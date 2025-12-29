"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { COMPANY } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function VarHistoriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Om Zeon Aqua</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {COMPANY.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Om selskapet */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Selskapet</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Zeon Aqua AS ble etablert i 2024 og er basert i Botnhamn,
                  strategisk plassert mellom Tromsø og Senja.
                </p>
                <p>
                  Vi tilbyr servicebåttjenester til havbruksnæringen og
                  kystnær industri langs kysten fra Nordland til Finnmark.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Etablert</p>
                <p className="text-xl font-bold text-slate-900">{COMPANY.established}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Lokasjon</p>
                <p className="text-xl font-bold text-slate-900">{COMPANY.location}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Org.nr</p>
                <p className="text-xl font-bold text-slate-900">{COMPANY.orgNr}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Fartøy */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/MS_AkvaFighter.jpg"
                alt="MS Akva Fighter"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">MS Akva Fighter</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Vårt fartøy er en servicebåt bygget for havbruksoperasjoner i
                nordnorske farvann.
              </p>
              <a
                href="/akva-fighter"
                className="inline-flex items-center text-slate-900 font-medium hover:text-slate-600"
              >
                Les mer om fartøyet
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
          <p className="text-lg text-slate-300 mb-8">
            Ta kontakt for mer informasjon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-100 transition"
            >
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
