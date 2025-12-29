"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { COMPANY, VESSEL, SERVICES } from "../lib/constants";

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

        <div className="relative max-w-4xl mx-auto px-8 py-16 w-full text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold">{VESSEL.name}</h1>
            <p className="mt-4 text-xl text-slate-300">{VESSEL.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Om fartøyet */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Om fartøyet</h2>
              <p className="text-slate-600 leading-relaxed">
                MS Akva Fighter er vårt servicefartøy, bygget for havbruksoperasjoner
                i nordnorske farvann. Båten er utstyrt for fortøyningsarbeid,
                frakt og ROV-støtte.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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

      {/* Tjenester */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Tjenester</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-lg p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
          <p className="text-lg text-slate-300 mb-8">
            Ta kontakt for mer informasjon om fartøyet.
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
