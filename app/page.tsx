"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import UseCaseCard from "./components/UseCaseCard";
import ContactBlock from "./components/ContactBlock";
import { COMPANY, USE_CASES } from "./lib/constants";

const vesselFacts = [
  { label: "Lengde", value: "22,5 m" },
  { label: "Kran", value: "12 t Palfinger" },
  { label: "Dekk", value: "40 m²" },
  { label: "Fart", value: "20 knop" },
];

const whyUs = [
  {
    title: "Erfaring fra næringen",
    description: "Skipper med 15+ års fartstid i havbruk. Vi kjenner jobben, kysten og folkene.",
  },
  {
    title: "Tydelig kommunikasjon",
    description: "Du snakker direkte med de som gjør jobben. Kort vei fra telefon til handling.",
  },
  {
    title: "Dokumentert leveranse",
    description: "Hver jobb loggføres med bilder og sjekkliste. Du får rapport når vi er ferdige.",
  },
];

const regions = [
  { name: "Troms", note: "Hjemmebase Tromsø" },
  { name: "Nordland", note: "Faste oppdrag" },
  { name: "Finnmark", note: "På forespørsel" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative bg-[#0a1628] text-white min-h-[90vh] flex items-center"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="MS Akva Fighter"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <motion.div variants={fadeIn} className="max-w-2xl">
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-4">
              Servicebåt for havbruk
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              MS Akva Fighter
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Arbeidsbåt og mannskap til havbruksnæringen i Nord-Norge.
              Fortøyning, frakt, ROV-støtte og notservice.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Ring {COMPANY.phone}
              </a>
              <Link
                href="/akva-fighter"
                className="inline-flex items-center justify-center border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Se fartøyet
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {vesselFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-slate-400 text-xs uppercase tracking-wider">{fact.label}</p>
                <p className="text-xl font-semibold mt-1">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Tjenester */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Tjenester</p>
            <h2 className="text-3xl font-bold text-slate-900">Hva vi gjør</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                title={useCase.title}
                description={useCase.description}
                href={`/akva-fighter#${useCase.id}`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Hvorfor oss */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Om oss</p>
            <h2 className="text-3xl font-bold text-slate-900">Enkelt å jobbe med</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Fartøy */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-400 text-sm uppercase tracking-widest mb-2">Fartøyet</p>
              <h2 className="text-3xl font-bold mb-4">MS Akva Fighter</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                22,5 meter arbeidsbåt med 12-tonns Palfinger-kran og 40 m² arbeidsdekk.
                Bygget for kystnær havbruksservice i nordnorske forhold.
              </p>
              <Link
                href="/akva-fighter"
                className="inline-flex items-center text-sky-400 font-semibold hover:text-sky-300"
              >
                Se spesifikasjoner
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/MS_AkvaFighter.jpg"
                alt="MS Akva Fighter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Område */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Område</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Hvor vi opererer</h2>
              <p className="text-slate-600 leading-relaxed">
                Med base i Tromsø tar vi oppdrag langs kysten fra Nordland til Finnmark.
                Ta kontakt for å sjekke tilgjengelighet.
              </p>
            </div>

            <div className="space-y-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <span className="font-semibold text-slate-900">{region.name}</span>
                  <span className="text-slate-500 text-sm">{region.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-slate-900">
        <ContactBlock
          headline="Trenger du båt?"
          subheadline="Ring for å sjekke tilgjengelighet."
          showForm
        />
      </SectionWrapper>
    </>
  );
}
