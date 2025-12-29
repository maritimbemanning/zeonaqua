import Link from "next/link";

interface UseCaseCardProps {
  title: string;
  description: string;
  href: string;
}

export default function UseCaseCard({ title, description, href }: UseCaseCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-2xl border border-slate-200/80 bg-white/95 p-8 shadow-[0_35px_60px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 hover:border-sky-300"
    >
      <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 mb-6" />
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
      <span className="inline-flex items-center mt-6 text-sky-700 font-semibold group-hover:translate-x-1 transition-transform">
        Les mer 
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
