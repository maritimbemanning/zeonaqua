"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SpecGrid from "../components/SpecGrid";
import { COMPANY, VESSEL, SERVICES } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const vesselSpecs = [
  { label: "Lengde", value: "14,98 m" },
  { label: "Bredde", value: "9,5 m" },
  { label: "Byggeår", value: "2015" },
  { label: "Motor", value: "2×500 hk" },
  { label: "Kran", value: "PK65002" },
  { label: "Vinsj", value: "PMH 40t m/veiecelle" },
  { label: "Dekkslast", value: "50 tonn" },
  { label: "Fuel", value: "15 m³" },
  { label: "ROV", value: "Ocein m/posisjonering" },
  { label: "Notvask", value: "Stealth Cleaner" },
  { label: "Lugarer", value: "2×1p + 2×2p" },
  { label: "Besetning", value: "3 mann" },
];

export default function AkvaFighterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zeon-navy-dark text-white min-h-[60vh] flex items-end">
        <Image
          src="/images/MS_AkvaFighter.jpg"
          alt="MS Akva Fighter"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zeon-navy-dark via-zeon-navy-dark/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-8 py-16 w-full text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">{VESSEL.name}</h1>
            <p className="mt-4 text-xl text-slate-200">{VESSEL.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Om fartøyet */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zeon-navy mb-6 font-display">Om fartøyet</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                MS Akva Fighter er vårt servicefartøy, bygget for havbruksoperasjoner
                i nordnorske farvann. Båten er utstyrt for tunge løft, fortøyningsarbeid,
                frakt og notservice.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Med kraftig kran, vinsjkapasitet på 40 tonn og ROV med posisjonering,
                er vi rustet for de fleste oppdrag. Fartøyet har også utstyr som platelås, 
                haikjeft, styrepinner, capstains (3t + 8t), HT-vasker og Steady320. 
                Rigget for slep, kranløft og ankerhåndtering.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/MS_AkvaFighter.jpg"
                alt="MS Akva Fighter på oppdrag"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Spesifikasjoner */}
      <SectionWrapper className="bg-zeon-cream border-y border-zeon-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-zeon-navy mb-4 font-display">Tekniske spesifikasjoner</h2>
             <p className="text-lg text-slate-600">Detaljert oversikt over utstyr og kapasitet</p>
          </div>
          <SpecGrid specs={vesselSpecs} />
        </div>
      </SectionWrapper>

      {/* Tjenester */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zeon-navy mb-12 text-center font-display">Tjenester vi utfører</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-lg p-8 border border-zeon-gray hover:border-zeon-navy-light/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-xl text-zeon-navy mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-zeon-navy-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">Kontakt oss</h2>
          <p className="text-lg text-slate-300 mb-8">
            Ta kontakt for mer informasjon om fartøyet eller for å bestille oppdrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center justify-center bg-white text-zeon-navy px-8 py-4 rounded-lg font-medium hover:bg-zeon-cream transition"
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
