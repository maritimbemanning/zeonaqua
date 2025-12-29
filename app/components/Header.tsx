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
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-center h-14">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-10 flex-1 pr-12">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } transition-colors text-sm tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link
            href="/"
            className={`flex flex-col items-center shrink-0 transition-all ${
              isTransparent ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="text-xl font-bold tracking-wide">ZEON AQUA</span>
            <span className={`text-[9px] tracking-[0.25em] uppercase ${
              isTransparent ? "text-white/50" : "text-slate-400"
            }`}>Maritime Services</span>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center justify-start gap-10 flex-1 pl-12">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } transition-colors text-sm tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden absolute right-8 p-2 transition-colors ${
              isTransparent ? "text-white" : "text-slate-900"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden py-4 border-t absolute left-0 right-0 top-full ${
              isTransparent
                ? "border-white/10 bg-slate-900/98 backdrop-blur-md"
                : "border-slate-100 bg-white"
            }`}
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-8 ${
                  isTransparent
                    ? "text-white/80 hover:bg-white/5"
                    : "text-slate-700 hover:bg-slate-50"
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={`mt-4 pt-4 mx-8 border-t ${
              isTransparent ? "border-white/10" : "border-slate-200"
            }`}>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className={`flex items-center gap-3 py-3 ${
                  isTransparent ? "text-white" : "text-slate-900"
                }`}
              >
                {COMPANY.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
