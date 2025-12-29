"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { COMPANY } from "../lib/constants";

const leftLinks = [
  { href: "/akva-fighter", label: "MS Akva Fighter" },
  { href: "/var-historie", label: "Vår Historie" },
];

const rightLinks = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/karriere", label: "Karriere" },
];

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

  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "bg-transparent py-4"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } transition-colors font-medium text-sm tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link
            href="/"
            className={`flex flex-col items-center transition-all ${
              isTransparent ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="text-2xl font-bold tracking-tight">ZEON AQUA</span>
            <span className={`text-[10px] tracking-[0.3em] uppercase ${
              isTransparent ? "text-white/60" : "text-slate-400"
            }`}>Maritime Services</span>
          </Link>

          {/* Right Navigation - Desktop */}
          <nav className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } transition-colors font-medium text-sm tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: Phone + Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className={`flex items-center gap-2 font-semibold transition-colors ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            <button
              className={`p-2 transition-colors ${
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden py-4 border-t absolute left-0 right-0 top-full shadow-xl ${
              isTransparent
                ? "border-white/10 bg-slate-900/98 backdrop-blur-md"
                : "border-slate-100 bg-white"
            }`}
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-6 ${
                  isTransparent
                    ? "text-white/90 hover:bg-white/5"
                    : "text-slate-700 hover:bg-slate-50"
                } font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={`mt-4 pt-4 mx-6 border-t ${
              isTransparent ? "border-white/10" : "border-slate-200"
            }`}>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className={`flex items-center gap-3 py-3 font-semibold ${
                  isTransparent ? "text-white" : "text-slate-900"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {COMPANY.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
