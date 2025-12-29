"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { COMPANY } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function VarHistoriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-4">Om oss</p>
            <h1 className="text-4xl md:text-5xl font-bold">Vår Historie</h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl">
              Zeon Aqua ble etablert i 2024 med én båt og en enkel idé:
              levere god service til havbruksnæringen i nord.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Om selskapet */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Om selskapet</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {COMPANY.name} er et servicebåtrederi basert på Kvaløya utenfor Tromsø.
                  Vi driver med fortøyningsarbeid, frakt, ROV-støtte og notservice
                  for havbruksnæringen langs kysten fra Nordland til Finnmark.
                </p>
                <p>
                  Vi er et lite rederi. Det betyr at du snakker direkte med de som
                  gjør jobben, og at vi kan være fleksible når det trengs.
                </p>
                <p>
                  Skipper har over 15 års erfaring fra havbruksnæringen og kjenner
                  forholdene langs nordnorsk kyst godt.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Etablert</p>
                <p className="text-2xl font-bold text-slate-900">{COMPANY.established}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Base</p>
                <p className="text-2xl font-bold text-slate-900">Tromsø</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 col-span-2">
                <p className="text-sm text-slate-500 mb-1">Org.nr</p>
                <p className="text-xl font-bold text-slate-900">{COMPANY.orgNr}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Fartøy */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
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
                Vår arbeidsbåt er en 22,5 meter lang servicebåt med 12-tonns kran
                og 40 m² arbeidsdekk. Båten er rigget for de vanligste oppgavene
                i havbruksnæringen.
              </p>
              <a
                href="/akva-fighter"
                className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700"
              >
                Se spesifikasjoner
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-slate-900">
        <ContactBlock
          headline="Vil du vite mer?"
          subheadline="Ta kontakt for en prat."
          showForm
        />
      </SectionWrapper>
    </>
  );
}
