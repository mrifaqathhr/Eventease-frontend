"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "./appwrite";
import { Models } from "appwrite";

// Define what our Auth Context looks like
interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
    isLoading: boolean;
    checkSession: () => Promise<void>;
}

// Create the Context
const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    checkSession: async () => {},
});

// Create the Provider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkSession = async () => {
        try {
            // Ask Appwrite if there is an active session
            const currentAccount = await account.get();
            setUser(currentAccount);
        } catch {
            // If it fails, it means nobody is logged in
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Run this check once when the app first loads
    useEffect(() => {
        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, checkSession }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export a custom hook so any page can easily ask "Who is logged in?"
export const useAuth = () => useContext(AuthContext);