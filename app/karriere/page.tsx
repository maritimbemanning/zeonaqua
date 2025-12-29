"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { COMPANY } from "../lib/constants";

const benefits = [
  {
    title: "Variert arbeid",
    description: "Ingen dag er lik. Fra fortøyning til ROV-støtte — du får bred erfaring og nye utfordringer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Nordnorsk natur",
    description: "Arbeidsplassen din er kysten fra Nordland til Finnmark. Spektakulære omgivelser hele året.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Godt arbeidsmiljø",
    description: "Lite mannskap, tett samarbeid. Vi tar vare på hverandre og jobber som et lag.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Konkurransedyktige vilkår",
    description: "Rettferdig lønn, gode turnusordninger og fokus på balanse mellom jobb og fritid.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const qualities = [
  "Erfaring fra maritime operasjoner eller havbruk",
  "Gyldig sjømannssertifikat (D5L eller høyere)",
  "Praktisk anlagt og løsningsorientert",
  "God fysisk form",
  "Evne til å jobbe selvstendig og i team",
  "Fleksibilitet og vilje til å strekke seg",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function KarrierePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1f3c]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeIn}
              className="text-sm uppercase tracking-[0.4em] text-sky-400 mb-6"
            >
              Karriere
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
            >
              Bli en del av
              <span className="block text-sky-400">Zeon Aqua</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-8 text-xl text-slate-300 leading-relaxed"
            >
              Vi bygger et lag av dyktige fagfolk som deler vår lidenskap for
              kvalitet og maritim ekspertise. Er du en av dem?
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              Hvorfor Zeon Aqua
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
              Mer enn bare en jobb
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hos oss får du varierte arbeidsoppgaver, godt arbeidsmiljø og muligheten
              til å være en del av et ambisiøst rederi i vekst.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What We Look For */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
                Hvem vi ser etter
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-6">
                Riktig holdning, riktig kompetanse
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed">
                Vi ser etter folk som tar jobben seriøst, som tar ansvar og som
                trives med praktisk arbeid på sjøen. Erfaring er viktig, men
                holdning og arbeidsmoral veier like tungt.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="font-semibold text-xl text-slate-900 mb-6">Det vi vektlegger:</h3>
              <ul className="space-y-4">
                {qualities.map((quality, index) => (
                  <motion.li
                    key={index}
                    variants={fadeIn}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{quality}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Open Application */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center"
          >
            <motion.div
              variants={fadeIn}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.div>

            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              Åpen søknad
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-6">
              Ingen ledige stillinger akkurat nå?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Send oss en åpen søknad likevel. Vi er alltid interessert i å høre fra
              dyktige fagfolk, og vi lagrer søknaden din for fremtidige muligheter.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${COMPANY.email}?subject=Åpen søknad - Zeon Aqua`}
                className="inline-flex items-center justify-center rounded-full bg-[#0a1628] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#0d1f3c] transition-all hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send åpen søknad
              </a>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-4 text-sm font-semibold tracking-wide text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ring oss
              </a>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Culture */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-4">
              Vår kultur
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-white mb-6">
              Få ord, mye handling
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-300 leading-relaxed mb-8">
              Hos Zeon Aqua teller resultater mer enn titler. Vi er et lite rederi
              der alle bidrar, alle lærer, og alle tar ansvar. Hvis du trives med
              praktisk arbeid og vil være en del av noe som vokser — hør fra deg.
            </motion.p>
            <motion.div variants={fadeIn} className="flex justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Flat struktur
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Direkte kommunikasjon
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personlig ansvar
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
        >
          <ContactBlock
            headline="Spørsmål om karriere?"
            subheadline="Ta kontakt for en uformell prat om muligheter hos Zeon Aqua."
            showForm
          />
        </motion.div>
      </SectionWrapper>
    </>
  );
}
