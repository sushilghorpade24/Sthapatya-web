"use client";

import { Navbar } from "./Navbar";
import Footer from "./shared/Footer";
import { PageLoader } from "./PageLoader";
import { usePathname } from "next/navigation";

export default function ClientShell({ children }: { children: React.ReactNode }) {
    
    const pathname = usePathname();

    // Routes where Navbar + Footer should NOT appear
    const hideOn = ["/homepage", "/about","/journeypage","/projectpage","/services","/career","/contact"];

    const shouldHide = hideOn.includes(pathname);

    return (
        <>
            <PageLoader />
            {shouldHide && <Navbar />}

            {children}

            {shouldHide && <Footer />}
        </>
    );
}
