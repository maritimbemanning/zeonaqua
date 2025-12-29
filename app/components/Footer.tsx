import Link from "next/link";
import { COMPANY } from "../lib/constants";

const footerLinks = {
  tjenester: [
    { href: "/akva-fighter#fortoyning", label: "Fortøyningsarbeid" },
    { href: "/akva-fighter#frakt", label: "Frakt og logistikk" },
    { href: "/akva-fighter#rov", label: "ROV-støtte" },
    { href: "/akva-fighter#not", label: "Notservice" },
  ],
  selskap: [
    { href: "/var-historie", label: "Vår Historie" },
    { href: "/akva-fighter", label: "MS Akva Fighter" },
    { href: "/karriere", label: "Karriere" },
    { href: "/kontakt", label: "Kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">ZEON AQUA</span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-slate-400 mt-1">
                Maritime Services
              </span>
            </Link>
            <p className="mt-6 text-slate-400 leading-relaxed text-sm">
              Servicebåt og mannskap til havbruksnæringen i Nord-Norge.
              Kvalitet, pålitelighet og trygghet — hver gang.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              {COMPANY.socials?.facebook && (
                <a
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {COMPANY.socials?.linkedin && (
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Selskap
            </h3>
            <ul className="space-y-3">
              {footerLinks.selskap.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400 pt-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p>{COMPANY.address}</p>
                  <p>{COMPANY.postalCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle rettigheter reservert.</p>
            <p>Org.nr: {COMPANY.orgNr}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
