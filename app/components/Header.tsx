"use client";

import Link from "next/link";
import Image from "next/image";
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
          : "bg-white/95 backdrop-blur-md border-b border-zeon-gray py-3 shadow-sm"
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
                    ? "text-white/90 hover:text-white"
                    : "text-zeon-navy hover:text-zeon-navy-light"
                } transition-colors text-sm font-medium tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link
            href="/"
            className={`flex flex-col items-center shrink-0 transition-all ${
              isTransparent ? "text-white" : "text-zeon-navy"
            }`}
          >
             {/* Note: Using text fallback if image is missing, but structure is ready for SVG */}
             <div className="relative h-10 w-40">
                {/* 
                  TODO: Ensure /images/logo-horizontal.svg exists. 
                  Using a text fallback until the SVG is available in the correct path.
                */}
                <div className={`flex flex-col items-center justify-center h-full ${isTransparent ? "text-white" : "text-zeon-navy"}`}>
                   <span className="text-2xl font-bold tracking-wider font-display">ZEON AQUA</span>
                </div>
                {/* Uncomment when SVG is available:
                <Image 
                  src="/images/logo-horizontal.svg" 
                  alt="Zeon Aqua Logo" 
                  fill
                  className={`object-contain ${isTransparent ? 'brightness-0 invert' : ''}`}
                  priority
                />
                */}
             </div>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center justify-start gap-10 flex-1 pl-12">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-zeon-navy hover:text-zeon-navy-light"
                } transition-colors text-sm font-medium tracking-wide`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden absolute right-8 p-2 transition-colors ${
              isTransparent ? "text-white" : "text-zeon-navy"
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
                ? "border-white/10 bg-zeon-navy-dark/98 backdrop-blur-md text-white"
                : "border-zeon-gray bg-white text-zeon-navy"
            }`}
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-8 ${
                  isTransparent
                    ? "hover:bg-white/5"
                    : "hover:bg-zeon-cream"
                } transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={`mt-4 pt-4 mx-8 border-t ${
              isTransparent ? "border-white/10" : "border-zeon-gray"
            }`}>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="flex items-center gap-3 py-3 font-semibold"
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
