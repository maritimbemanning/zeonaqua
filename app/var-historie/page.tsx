"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { COMPANY } from "../lib/constants";

const milestones = [
  {
    year: "2024",
    title: "Grunnleggelsen",
    description: "Zeon Aqua etableres på Kvaløya utenfor Tromsø. Visjonen er klar: levere maritime tjenester med høyeste kvalitet til havbruksnæringen i nord.",
  },
  {
    year: "2024",
    title: "MS Akva Fighter",
    description: "Fartøyet settes i drift. 22,5 meter arbeidsbåt med 12-tonns kran, bygget for de mest krevende operasjonene langs nordnorsk kyst.",
  },
  {
    year: "2024",
    title: "Første oppdrag",
    description: "De første kontraktene signeres. Fokus på kvalitet, dokumentasjon og pålitelig leveranse etablerer raskt et godt omdømme i næringen.",
  },
  {
    year: "Fremover",
    title: "Vekst og utvikling",
    description: "Vi bygger videre på fundamentet — med samme kompromissløse fokus på kvalitet, sikkerhet og kundetilfredshet.",
  },
];

const values = [
  {
    title: "Pålitelighet",
    description: "Når vi sier vi kommer, kommer vi. Når vi sier vi leverer, leverer vi. Ingen unntak.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Kompetanse",
    description: "Erfaring fra havbruk, kjennskap til kysten, og teknisk dyktighet. Vi vet hva som kreves.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Sikkerhet",
    description: "HMS er ikke et dokument — det er en kultur. Hver operasjon planlegges og gjennomføres med trygghet først.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
  },
  {
    title: "Tilgjengelighet",
    description: "Kort vei fra forespørsel til handling. Én kontaktperson, raske svar, og klar kommunikasjon.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function VarHistoriePage() {
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
              Vår Historie
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
            >
              Bygget på erfaring.
              <span className="block text-sky-400">Drevet av kvalitet.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-8 text-xl text-slate-300 leading-relaxed"
            >
              Zeon Aqua er resultatet av årelang erfaring fra havbruk og maritime operasjoner.
              Vi vet hva næringen trenger — fordi vi kommer fra den.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
                Om selskapet
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-6">
                Lokalt forankret, profesjonelt drevet
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Zeon Aqua AS er et servicebåtrederi basert på Kvaløya utenfor Tromsø.
                  Vi leverer spesialiserte maritime tjenester til havbruksnæringen i Nord-Norge.
                </p>
                <p>
                  Med MS Akva Fighter som arbeidsplattform tilbyr vi alt fra fortøyningsarbeid
                  og frakt til ROV-støtte og notservice. Vårt fokus er alltid det samme:
                  kvalitet, sikkerhet og pålitelighet.
                </p>
                <p>
                  Vi er et lite rederi med stor gjennomføringsevne. Flat struktur betyr
                  rask respons, direkte kommunikasjon og et mannskap som tar personlig
                  ansvar for hver leveranse.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Etablert</p>
                <p className="text-4xl font-bold text-slate-900">{COMPANY.established}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Base</p>
                <p className="text-2xl font-bold text-slate-900">Tromsø</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Org.nr</p>
                <p className="text-2xl font-bold text-slate-900">{COMPANY.orgNr}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              Våre verdier
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
              Det vi står for
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Verdiene våre er ikke bare ord på en vegg. De styrer hver beslutning,
              hver operasjon, og måten vi møter kundene våre på.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              Milepæler
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900">
              Reisen så langt
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-sky-500 rounded-full -translate-x-1/2 mt-2 ring-4 ring-white" />
                <div className="flex-1 ml-16 md:ml-0">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-sky-100 text-sky-700 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-semibold text-xl text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Philosophy */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/MS_AkvaFighter.jpg"
                  alt="MS Akva Fighter mannskap"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-4">
                Menneskene
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-white mb-6">
                Erfaring du kan stole på
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Vårt mannskap har lang erfaring fra havbruk og maritime operasjoner
                  langs nordnorsk kyst. Vi kjenner anleggene, forholdene og utfordringene
                  — fordi vi har jobbet med dem i årevis.
                </p>
                <p>
                  Hos Zeon Aqua tar vi personlig ansvar for hver leveranse. Flat struktur
                  betyr at du alltid snakker med noen som har myndighet til å ta beslutninger
                  og løse problemer der og da.
                </p>
              </motion.div>
            </motion.div>
          </div>
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
            headline="Vil du vite mer?"
            subheadline="Ta kontakt for en uforpliktende prat om hvordan vi kan hjelpe."
            showForm
          />
        </motion.div>
      </SectionWrapper>
    </>
  );
}
