"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(components)/ThemeContext";
import ClientShell from "./(components)/ClientShell";
import { PageLoader } from "./(components)/PageLoader";
import { usePathname } from "next/navigation";
import { Toaster } from "./(components)/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Sthapatya Consultants",
//   description: "Professional architectural and engineering solutions",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  const pathname=usePathname()
  // console.log(pathname);
  return (
    
    
    <html lang="en">
      <body>

        {/* GLOBAL FIRST-LOAD LOADER */}
        <PageLoader />

        <ThemeProvider>
          <ClientShell>
            {/* <Navbar/> */}
            {children}
              <Toaster richColors position="top-right" />
            {/* <Footer/> */}
          </ClientShell>
        </ThemeProvider>
        

      </body>
    </html>
  
  
  );
}
