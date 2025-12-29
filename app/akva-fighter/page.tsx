"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { VESSEL, USE_CASES } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function AkvaFighterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a1628] text-white min-h-[50vh] flex items-end">
        <Image
          src="/images/MS_AkvaFighter.jpg"
          alt="MS Akva Fighter"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-4">Fartøyet</p>
            <h1 className="text-4xl md:text-5xl font-bold">{VESSEL.name}</h1>
            <p className="mt-4 text-xl text-slate-300">{VESSEL.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Spesifikasjoner */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Spesifikasjoner</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VESSEL.specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200"
              >
                <p className="text-sm text-slate-500 mb-1">{spec.label}</p>
                <p className="text-2xl font-bold text-slate-900">{spec.value}</p>
                <p className="text-sm text-slate-600 mt-1">{spec.context}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bruksområder */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Hva vi bruker båten til</h2>

          <div className="space-y-6">
            {USE_CASES.map((useCase, index) => (
              <div
                key={useCase.id}
                id={useCase.id}
                className="bg-white rounded-lg p-6 border border-slate-200 scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <span className="text-slate-400 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{useCase.title}</h3>
                    <p className="text-slate-600 mb-4">{useCase.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-50 rounded p-3">
                        <p className="text-slate-500 mb-1">Passer når:</p>
                        <p className="text-slate-700">{useCase.passerNar}</p>
                      </div>
                      <div className="bg-slate-50 rounded p-3">
                        <p className="text-slate-500 mb-1">Eksempel:</p>
                        <p className="text-slate-700">{useCase.eksempel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Utstyr */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Utstyr ombord</h2>
              <ul className="space-y-3">
                {VESSEL.equipment.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-sky-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/MS_AkvaFighter.jpg"
                alt="MS Akva Fighter dekk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mannskap */}
      <SectionWrapper className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Mannskap</h2>
          <p className="text-slate-600 leading-relaxed">
            Erfaren skipper med over 15 års fartstid fra havbruksnæringen.
            Kjenner kysten, anleggene og jobben som skal gjøres.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-slate-900">
        <ContactBlock
          headline="Passer båten til jobben din?"
          subheadline="Ta kontakt for å sjekke tilgjengelighet."
          showForm
        />
      </SectionWrapper>
    </>
  );
}
