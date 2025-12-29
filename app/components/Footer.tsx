import Link from "next/link";
import { COMPANY, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Contact */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              ZEON AQUA
            </Link>
            <div className="mt-6 space-y-3 text-slate-400">
              <p>
                <a
                  href={`tel:${COMPANY.phoneClean}`}
                  className="hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-white font-medium">Tlf:</span> {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-white font-medium">E-post:</span> {COMPANY.email}
                </a>
              </p>
            </div>
            
            {/* Socials */}
            <div className="mt-8 flex gap-4">
              {COMPANY.socials?.facebook && (
                <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {COMPANY.socials?.linkedin && (
                <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navigasjon</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Hjem
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt" className="hover:text-teal-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Selskapsinfo</h3>
            <div className="space-y-3 text-slate-400">
              <p className="font-medium text-white">{COMPANY.name}</p>
              <p>Org.nr: {COMPANY.orgNr}</p>
              <p>{COMPANY.address}</p>
              <p>{COMPANY.postalCode}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}
