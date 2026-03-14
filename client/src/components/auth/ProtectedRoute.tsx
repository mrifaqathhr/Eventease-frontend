"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isCheckingRole, setIsCheckingRole] = useState(requireAdmin);

    useEffect(() => {
        let isMounted = true;

        const verifyAccess = async () => {
            if (isLoading) return; // Wait for AuthContext to finish

            if (!user) {
                if (isMounted) router.push("/auth/login");
                return;
            }

            if (!requireAdmin) {
                if (isMounted) {
                    setIsAuthorized(true);
                    setIsCheckingRole(false);
                }
                return;
            }

            // If requireAdmin is true, fetch the profile
            try {
                const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
                const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROFILE_COLLECTION_ID;

                if (!dbId || !collectionId) {
                    throw new Error("Missing Appwrite environment variables");
                }

                const profiles = await databases.listDocuments(dbId, collectionId, [
                    Query.equal("userId", user.$id),
                ]);

                if (profiles.documents.length > 0 && profiles.documents[0].role === "admin") {
                    if (isMounted) setIsAuthorized(true);
                } else {
                    // Not an admin, kick them out
                    if (isMounted) router.push("/vendor/dashboard");
                }
            } catch (error) {
                console.error("Failed to verify admin role:", error);
                if (isMounted) router.push("/auth/login");
            } finally {
                if (isMounted) setIsCheckingRole(false);
            }
        };

        verifyAccess();

        return () => {
            isMounted = false;
        };
    }, [user, isLoading, requireAdmin, router]);

    // Show loading spinner while AuthContext resolves OR while fetching admin role
    if (isLoading || isCheckingRole) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="flex flex-col items-center gap-4">
                    <span className="material-symbols-outlined animate-spin text-5xl text-primary font-bold">
                        progress_activity
                    </span>
                    <p className="font-serif text-lg font-medium tracking-wide text-text-main dark:text-text-muted">
                        Securing connection...
                    </p>
                </div>
            </div>
        );
    }

    // Only render children if we are explicitly authorized
    return isAuthorized ? <>{children}</> : null;
}
