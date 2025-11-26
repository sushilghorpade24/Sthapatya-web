"use client";

import { Navbar } from "./Navbar";
import Footer from "./shared/Footer";
import { PageLoader } from "./PageLoader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClientShell({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    // Show loader whenever pathname changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);

        // simulate loading until the page fully hydrates
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); // adjust duration if needed

        return () => clearTimeout(timeout);
    }, [pathname]);

    const hideOn = [
        "/homepage",
        "/about",
        "/journeypage",
        "/projectpage",
        "/services",
        "/career",
        "/contact",
    ];

    const shouldHide = hideOn.includes(pathname);

    return (
        <>
            {/* Show Loader on initial + route change */}
            {loading && <PageLoader />}

            {shouldHide && <Navbar />}

            {children}

            {shouldHide && <Footer />}
        </>
    );
}
