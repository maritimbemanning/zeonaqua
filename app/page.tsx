"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import UseCaseCard from "./components/UseCaseCard";
import ContactBlock from "./components/ContactBlock";
import { COMPANY, USE_CASES } from "./lib/constants";

const heroStats = [
  { label: "Lengde", value: "22,5 m" },
  { label: "Arbeidsdekk", value: "40 m²" },
  { label: "Kran", value: "12 t Palfinger" },
  { label: "Marsjfart", value: "20 knop" },
];

const valuePropositions = [
  {
    title: "Operativ beredskap",
    description: "24/7 bemanning. Samme dag mobilisering innenfor operasjonsområdet.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dokumentert kvalitet",
    description: "Full sporbarhet. Foto, logg og signert sjekkliste etter hvert oppdrag.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Direkte kommunikasjon",
    description: "Én kontaktperson. Kort vei fra forespørsel til operasjon.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const operationalAreas = [
  {
    region: "Troms",
    status: "Primærbase",
    detail: "Umiddelbar mobilisering fra Tromsø"
  },
  {
    region: "Nordland",
    status: "Fast kapasitet",
    detail: "Ukentlige løp og langvarige avtaler"
  },
  {
    region: "Finnmark",
    status: "Prosjektbasert",
    detail: "Sesongtopp og spesialoppdrag"
  },
];

const processSteps = [
  {
    number: "01",
    title: "Henvendelse",
    description: "Du ringer eller sender forespørsel. Vi bekrefter tilgjengelighet samme dag.",
  },
  {
    number: "02",
    title: "Planlegging",
    description: "Crew, utstyr og værvinduer koordineres. Du får én kontaktperson.",
  },
  {
    number: "03",
    title: "Gjennomføring",
    description: "MS Akva Fighter utfører oppdraget med kontinuerlig statusrapportering.",
  },
  {
    number: "04",
    title: "Dokumentasjon",
    description: "Komplett leveranserapport med foto, data og signert sjekkliste.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative bg-[#0a1628] text-white min-h-screen flex items-center"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="MS Akva Fighter i operasjon"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 lg:py-40">
          <motion.div variants={stagger} className="max-w-3xl">
            <motion.p
              variants={fadeIn}
              className="text-sm uppercase tracking-[0.4em] text-sky-400 mb-6 font-medium"
            >
              Maritim servicepartner
            </motion.p>

            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white font-bold"
            >
              Når jobben
              <span className="block text-sky-400">må gjøres riktig</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-8 text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Servicebåt og mannskap til havbruksnæringen i Nord-Norge.
              Vi leverer presisjon, pålitelighet og trygghet — hver gang.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/akva-fighter"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#0a1628] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-sky-50 transition-all hover:scale-105"
              >
                Se fartøyspesifikasjoner
              </Link>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white/10 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ring nå: {COMPANY.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Stats Bar */}
          <motion.div
            variants={fadeIn}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Value Propositions */}
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
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900">
              Forpliktelse til kvalitet
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                  {prop.icon}
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-4">{prop.title}</h3>
                <p className="text-slate-600 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
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
              Tjenester
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
              Spesialisert havbruksservice
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fra fortøyningsarbeid til ROV-støtte — vi har kompetansen og utstyret
              for krevende maritime operasjoner.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
              >
                <UseCaseCard
                  title={useCase.title}
                  description={useCase.description}
                  href={`/akva-fighter#${useCase.id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vessel Highlight */}
      <SectionWrapper className="bg-[#0a1628] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-4">
                Fartøyet
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-white mb-6">
                MS Akva Fighter
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-300 leading-relaxed mb-8">
                Bygget for nordnorske forhold. 22,5 meter arbeidsbåt med 12-tonns Palfinger-kran,
                40 m² dekksareal og kapasitet for de mest krevende operasjoner langs kysten.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link
                  href="/akva-fighter"
                  className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors group"
                >
                  Utforsk spesifikasjoner
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/MS_AkvaFighter.jpg"
                  alt="MS Akva Fighter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sky-500 text-white p-6 rounded-xl">
                <p className="text-xs uppercase tracking-wider mb-1">Operativ status</p>
                <p className="text-2xl font-bold">24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Operational Areas */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
                Operasjonsområde
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-6">
                Nord-Norge er vårt farvann
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed">
                Med base i Tromsø dekker vi hele kysten fra Nordland til Finnmark.
                Vi kjenner forholdene, anleggene og folkene — det gir trygghet
                og effektivitet i hver operasjon.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="space-y-4"
            >
              {operationalAreas.map((area, index) => (
                <motion.div
                  key={area.region}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 p-6 rounded-xl border border-slate-200 hover:border-sky-200 hover:bg-sky-50/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-slate-600">{area.region.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-slate-900">{area.region}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700">
                        {area.status}
                      </span>
                    </div>
                    <p className="text-slate-600">{area.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
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
              Slik jobber vi
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
              Fra forespørsel til leveranse
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Enkel prosess, tydelig kommunikasjon, dokumentert resultat.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-200 -translate-x-1/2" />
                )}
                <div className="text-5xl font-bold text-slate-200 mb-4">{step.number}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[#0a1628]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
        >
          <ContactBlock
            headline="Klar for neste oppdrag?"
            subheadline="Ta kontakt for tilgjengelighet og pristilbud."
            showForm
          />
        </motion.div>
      </SectionWrapper>
    </>
  );
}
