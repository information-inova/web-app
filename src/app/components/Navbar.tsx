"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About",     href: "/about"     },
  { label: "Blog",      href: "/blog"      },
  { label: "Services",  href: "/services"  },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact",   href: "/contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname               = usePathname();
  const isHome                 = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo — always links to home */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Go to Alvino Technologies home">
          <Image
            src="/web.jpeg"
            alt="Alvino Technologies"
            width={320}
            height={107}
            className={`w-auto object-contain transition-all duration-300 ${solid ? "h-14" : "h-18"}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200
                      after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full
                      after:origin-left after:scale-x-0 after:rounded-full
                      after:bg-gradient-to-r after:from-indigo-600 after:to-purple-600
                      after:transition-transform after:duration-200
                      hover:after:scale-x-100
                      text-gray-700 hover:text-indigo-600
                      ${active ? "text-indigo-600 after:scale-x-100" : ""}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side: CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{background:"linear-gradient(135deg,#4f7df9,#a855f7)"}}
          >
            Let&apos;s Build Together →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                    pathname.startsWith(link.href) ? "bg-indigo-50 text-indigo-600" : "text-gray-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Build Together →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
