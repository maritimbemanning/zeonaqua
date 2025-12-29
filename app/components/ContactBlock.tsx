import Link from "next/link";
import { COMPANY } from "../lib/constants";

interface ContactBlockProps {
  headline: string;
  subheadline?: string;
  showForm?: boolean;
}

export default function ContactBlock({ headline, subheadline, showForm = false }: ContactBlockProps) {
  return (
    <div className="rounded-3xl p-8 md:p-16 text-center border border-slate-800/40 bg-gradient-to-br from-[#03142b] via-[#052a53] to-[#083d6d] text-white shadow-[0_40px_80px_rgba(4,12,24,0.65)]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {headline}
      </h2>
      {subheadline && (
        <p className="text-lg text-slate-300 mb-8">{subheadline}</p>
      )}

      <a
        href={`tel:${COMPANY.phoneClean}`}
        className="inline-block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-100 hover:scale-105 transition-all mb-6"
      >
        {COMPANY.phone}
      </a>

      <p className="text-slate-200/80 mb-8 text-lg max-w-xl mx-auto">
        Vi svarer innen 2 timer i arbeidstid. Utenfor arbeidstid – innen neste morgen.
      </p>

      {showForm && (
        <Link
          href="/kontakt"
          className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-colors"
        >
          Send forespørsel
        </Link>
      )}
    </div>
  );
}
