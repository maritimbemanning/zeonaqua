"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { COMPANY, NAV_LINKS } from "../lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header is transparent ONLY on home page AND when at the top
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent py-4" 
          : "bg-white/90 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold transition-colors ${
              isTransparent ? "text-white" : "text-slate-900"
            }`}
          >
            ZEON AQUA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent ? "text-slate-100 hover:text-white" : "text-slate-600 hover:text-teal-600"
                } transition-colors font-medium text-sm uppercase tracking-wider`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone - Always Visible */}
          <a
            href={`tel:${COMPANY.phoneClean}`}
            className={`flex items-center gap-2 font-bold hover:underline transition-colors ${
              isTransparent ? "text-white" : "text-teal-600"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:inline">{COMPANY.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isTransparent ? "text-white" : "text-slate-900"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`md:hidden py-4 border-t absolute left-0 right-0 top-full shadow-xl ${
              isTransparent ? "border-slate-700 bg-slate-900/95 backdrop-blur-md" : "border-slate-100 bg-white"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-6 ${
                  isTransparent ? "text-slate-100 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"
                } hover:text-teal-500 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
