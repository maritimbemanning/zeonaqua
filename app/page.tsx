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

const capabilityMatrix = [
  {
    title: "Fortøyning",
    points: ["Ankervinsj 10 t", "Dobbel capstan", "Dekkskraner"],
  },
  {
    title: "Logistikk",
    points: ["Containerlast", "Lukket lager", "ROV-støtte"],
  },
  {
    title: "Beredskap",
    points: ["24/7 crew", "NS 9415 rutiner", "Dokumentert HMS"],
  },
];

const responseAreas = [
  { area: "Troms", detail: "Primærbase Tromsø. Umiddelbar mobilisering." },
  { area: "Nordland", detail: "Fast ukekapasitet og langvarige kontrakter." },
  { area: "Finnmark", detail: "Prosjektbasert støtte og sesongtopp-dekning." },
];

const processSteps = [
  {
    title: "Brief",
    subtitle: "Oppdragsbeskrivelse",
    description: "Vi avklarer last, lokasjon og sikkerhetsparametere i løpet av samme dag.",
  },
  {
    title: "Plan",
    subtitle: "Logistikk og bemanning",
    description: "Crew, dekksutstyr og værvinduer settes i en operativ rekkefølge.",
  },
  {
    title: "Utførelse",
    subtitle: "Operasjon til sjøs",
    description: "MS Akva Fighter gjennomfører oppdraget med kontinuerlig statusdeling.",
  },
  {
    title: "Rapport",
    subtitle: "Teknisk dokumentasjon",
    description: "Leveranse loggføres med bilder, måledata og signert sjekkliste.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        className="bg-[#061427] text-white border-b border-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 lg:py-24 grid gap-12 lg:grid-cols-2">
          <motion.div variants={fadeIn}>
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300 mb-6">MS AKVA FIGHTER</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
              Servicebåt for havbruk i nord
            </h1>
            <p className="mt-6 text-lg text-slate-100 max-w-xl">
              Crew og fartøy til fortøyning, frakt og tekniske operasjoner i Troms og Nordland. Flat
              struktur, tydelig kommunikasjon og dokumentert leveranse.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/akva-fighter"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold tracking-wide hover:bg-white hover:text-[#061427] transition"
              >
                Se fartøydata
              </Link>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center rounded-full bg-white text-[#061427] px-7 py-3 text-sm font-semibold tracking-wide hover:bg-slate-200 transition"
              >
                Ring vakt: {COMPANY.phone}
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-[#0b1f33] border border-slate-800 rounded-2xl p-6 relative">
            <div className="flex justify-between text-xs text-slate-300 uppercase tracking-[0.4em] border-b border-slate-800 pb-3">
              <span>Operativ status</span>
              <span>Bemannet 24/7</span>
            </div>
            <div className="mt-6 rounded-xl border border-slate-800 overflow-hidden bg-[#061427]">
              <Image
                src="/images/hero.webp"
                alt="MS Akva Fighter"
                width={640}
                height={420}
                className="w-full h-64 object-cover"
                priority
              />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-y-4 text-sm text-slate-200">
              <div>
                <dt className="text-slate-400">MMSI</dt>
                <dd className="font-semibold">258011000</dd>
              </div>
              <div>
                <dt className="text-slate-400">Havn</dt>
                <dd className="font-semibold">Tromsø</dd>
              </div>
              <div>
                <dt className="text-slate-400">Crew</dt>
                <dd className="font-semibold">3-4 personer</dd>
              </div>
              <div>
                <dt className="text-slate-400">Oppdrag</dt>
                <dd className="font-semibold">Fortøyning, logistikk, ROV</dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-slate-400 uppercase tracking-[0.3em] text-xs">{stat.label}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">TJENESTER</p>
          <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-4">Oppdrag vi tar</h2>
          <p className="mt-4 text-slate-600">
            Vi jobber flatt og teknisk. Hvert oppdrag blir koordinert med tydelig ansvar, kontaktpunkt og
            sikkerhetslogg.
          </p>
        </div>
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
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50 border-y border-slate-200">
        <div className="grid gap-6 md:grid-cols-3">
          {capabilityMatrix.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">KAPASITET</p>
              <h3 className="font-display text-2xl text-slate-900 mt-3">{item.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-px w-6 bg-slate-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">OPERASJONSOMRÅDE</p>
            <h2 className="font-display text-3xl text-slate-900 mt-4">Hvor vi responderer</h2>
            <p className="mt-4 text-slate-600">
              MS Akva Fighter er rigget for nordlige farvann. Vi har faste løp i Troms og Nordland, men kan
              mobilisere lenger nord eller sør med kort varsel.
            </p>
            <div className="mt-8 grid gap-4">
              {responseAreas.map((item) => (
                <div key={item.area} className="border border-slate-200 rounded-xl p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.area}</p>
                  <p className="mt-2 text-slate-900 font-semibold">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">PROSESS</p>
            <h3 className="font-display text-2xl text-slate-900 mt-3">Hvordan vi jobber</h3>
            <ol className="mt-6 space-y-6 text-sm text-slate-700">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border-l-2 border-slate-300 pl-4">
                  <span className="text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-1 text-slate-900 font-semibold">{step.title}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">{step.subtitle}</p>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-900">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <ContactBlock headline="La oss planlegge neste operasjon" showForm />
        </motion.div>
      </SectionWrapper>
    </>
  );
}
