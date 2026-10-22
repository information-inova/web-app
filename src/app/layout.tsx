import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Alvino Technologies — Empowering Businesses Through Technology",
  description:
    "Alvino Technologies helps small and medium-sized businesses strengthen their digital presence, simplify everyday operations, and grow through practical technology solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Suspense fallback={<div className="h-16 sm:h-20 w-full bg-white" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
