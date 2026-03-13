📄 PRODUCT REQUIREMENTS DOCUMENT (PRD)
Project Name: EventEase (Version 0.1)

1. Product Overview

EventEase is a premium, commission-based wedding and event vendor marketplace. The platform connects users with highly vetted local professionals.

Core Logic: Vendors register, create profiles, and are manually approved by the Admin. Users browse the marketplace and submit inquiries. To protect the platform's commission model, no direct vendor contact information (phone, email, website) is ever displayed to users. All inquiries route through the EventEase platform to the Admin.

Monetization (v0.1): Free baseline listing. Paid premium features include "Featured Vendor" status and "Homepage Carousel Banners." Payments are handled manually (vendors upload a UPI payment screenshot, and Admins approve the status via the dashboard).

2. Architecture & Tech Stack

The project uses a monorepo structure designed for plug-and-play scalability, optimized for current deployment on a Hostinger Business Plan (Node.js environment).

Frontend: Next.js (App Router), React, Tailwind CSS, TypeScript.

Backend API: Node.js, Express, TypeScript.

Database, Auth & Storage: Appwrite Cloud (All-in-one BaaS).

Search Engine: Appwrite Native Full-Text Search Indexes.


3. Internationalization (i18n) & Localization

The platform must be built with comprehensive internationalization (i18n) routing and configuration natively from day one. English must be configured as the primary, default language for the entire website. The system should be structured to easily support additional languages as secondary options in the future.

4. Design System (Luxury Wedding x SaaS)

The AI must reference the 55 UI screenshots and 24 HTML/Tailwind code files located in the _design_references and _raw_stitch_ui folders. The aesthetic rules are:

Palette: Soft beige/champagne backgrounds, muted rose/rose-gold accent colors (for CTA buttons and active states), warm gray for typography, and off-white cards.

Typography: Elegant Serif fonts for main headings (e.g., Playfair Display or Merriweather); clean Sans-Serif fonts for body text and functional UI elements (e.g., Inter or Roboto).

UI Components: Rounded corners on cards and inputs, soft and diffuse drop shadows, ample whitespace (airy and un-cluttered).

Responsiveness: Mobile-first approach. All sidebars, grids, and filters must collapse into mobile-friendly drawers or stacked layouts.

5. Smart Search Implementation

The search functionality is a core feature and must be context-aware, typo-tolerant, and robust.

Scope: Deep search across Vendor Names, Vendor Descriptions, Services, Categories, and Blog titles.

Live Search: The global header search must feature a debounced autocomplete dropdown showing instant categorized results.

Database Mechanism: Use PostgreSQL tsvector columns on the vendors and blogs tables. Use the pg_trgm extension for fuzzy matching (e.g., matching "photgrafer" to "Photographer").

Ranking: Results must be weighted: exact keyword matches first, followed by fuzzy matches. "Featured" vendors receive a +0.1 score boost to appear slightly higher without destroying natural relevance.

6. User Roles & Workflows

Admin: Supreme control. Has access to the Admin Dashboard to approve/reject vendor registrations, approve promotion requests (verify UPI screenshots), configure the homepage carousel, manage blog posts, update SEO meta tags, and view/forward user inquiries.

Vendor: Has access to the Vendor Dashboard. Can edit their profile (description, gallery, services), select their respective categories, and submit requests for Paid Promotions (Featured/Carousel) along with payment proof.

User: Public browser. Can search, filter by category/location/price, read blogs, and submit the "Send Inquiry" form on a vendor's page.

7. Database Schema Blueprint (Appwrite Collections)

The PostgreSQL database must include the following core tables:

users: Managed via Appwrite Auth.

vendors: Appwrite Document Collection. Stores name, description, location, featured_status, carousel_status, approval_status. Uses Appwrite Full-Text Search index.

categories: Appwrite Document Collection (hierarchical via parent_id).

vendor_categories: Appwrite Document Collection (relationship mapping).

promotion_requests: Appwrite Document Collection.

inquiries: Appwrite Document Collection.

blogs: Appwrite Document Collection.

seo_settings: Dynamic meta titles, descriptions, and robots.txt rules controlled by the Admin.

8. Directory Structure Requirements

The monorepo must strictly follow this structure to prevent context loss:

Plaintext
eventease/
├── _design_references/      # 55 Screenshots of UI for AI visual context
├── _raw_stitch_ui/          # 24 Raw HTML/Tailwind exports from Stitch
├── PRD.md                   # Master source of truth
├── client/                  # Next.js Frontend (App Router)
│   ├── public/              # Static assets and images
│   ├── src/
│   │   ├── app/             # Pages, i18n routing, and API routes
│   │   ├── components/      # Modular, reusable React components
│   │   ├── lib/             # Supabase clients, utilities
│   │   └── styles/          # Global CSS and Tailwind directives
├── server/                  # Express Backend API
│   ├── src/
│   │   ├── modules/         # Plug-and-play logic (auth, vendors, search)
│   │   └── middleware/      # JWT validation, error handling
└── shared/                  # Shared TypeScript interfaces and types
9. Development Rules for the AI Assistant

Component Modularity: Break down the raw HTML in _raw_stitch_ui into highly reusable Next.js components (e.g., <Navbar />, <VendorCard />, <SearchDropdown />).

Tailwind Conversion: Ensure all standard class="..." attributes from provided HTML are properly converted to React's className="...".

No Hallucinated Data: Do not render dummy phone numbers or emails on the public-facing vendor UI. Enforce the "No Direct Contact" rule natively in the UI.

TypeScript Strictness: Use strict typing for all props, API responses, and database models. Utilize the /shared folder for types used by both Next.js and Express.

State Management: Use standard React hooks (useState, useEffect) for localized state, and context where necessary (e.g., Auth state, i18n state).