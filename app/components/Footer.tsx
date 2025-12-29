import Link from "next/link";
import { COMPANY, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">ZEON AQUA</span>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-slate-400">
                Maritime Services
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Servicebåtrederi for havbruksnæringen i Nord-Norge.
            </p>
          </div>

          {/* Navigasjon */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navigasjon
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm">
                  Hjem
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>{COMPANY.name}</p>
              <p>{COMPANY.postalCode}</p>
              <p>
                <a href={`tel:${COMPANY.phoneClean}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}</p>
          <p>Org.nr: {COMPANY.orgNr}</p>
        </div>
      </div>
    </footer>
  );
}
