"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { VESSEL, USE_CASES } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AkvaFighterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] text-white min-h-[60vh] flex items-end">
        <Image
          src="/images/MS_AkvaFighter.jpg"
          alt="MS Akva Fighter i operasjon"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-sm uppercase tracking-[0.4em] text-sky-400 mb-4"
            >
              Fartøyet
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              {VESSEL.name}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-xl md:text-2xl text-slate-300"
            >
              {VESSEL.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Specs */}
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
              Spesifikasjoner
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900">
              Nøkkeltall
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VESSEL.specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-200 hover:bg-sky-50/30 transition-all"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">{spec.label}</p>
                <p className="text-3xl font-bold text-slate-900 mb-2">{spec.value}</p>
                <p className="text-sm text-slate-600">{spec.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Use Cases */}
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
              Anvendelse
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
              Hva brukes båten til?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
              MS Akva Fighter er rigget for et bredt spekter av havbruksoperasjoner.
              Her er de vanligste oppdragstypene.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                id={useCase.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 scroll-mt-24"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-slate-900 mb-4">{useCase.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{useCase.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Passer når</p>
                        <p className="text-slate-700">{useCase.passerNar}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Eksempel</p>
                        <p className="text-slate-700">{useCase.eksempel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment */}
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
                Utstyr
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-slate-900 mb-6">
                Ombord
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed mb-8">
                MS Akva Fighter er utstyrt for effektiv gjennomføring av krevende
                maritime operasjoner. Alt utstyr vedlikeholdes etter strenge rutiner.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-4">
                {VESSEL.equipment.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={fadeIn}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/MS_AkvaFighter.jpg"
                  alt="MS Akva Fighter utstyr og dekk"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Crew */}
      <SectionWrapper className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-4">
              Mannskap
            </motion.p>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl text-white mb-6">
              Erfaring du kan stole på
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-300 leading-relaxed mb-6">
              MS Akva Fighter opereres av erfaren skipper med over 15 års fartstid
              i havbruksnæringen. Vi kjenner kysten, anleggene og forholdene — fordi
              vi har jobbet her hele karrieren.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-slate-300 leading-relaxed">
              Flat struktur betyr at du alltid snakker direkte med noen som
              har myndighet til å ta beslutninger og løse problemer der og da.
            </motion.p>
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
            headline="Passer Akva Fighter til jobben?"
            subheadline="Ta kontakt for å diskutere ditt oppdrag."
            showForm
          />
        </motion.div>
      </SectionWrapper>
    </>
  );
}
