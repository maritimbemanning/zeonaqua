"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { COMPANY } from "../lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-4">Karriere</p>
            <h1 className="text-4xl md:text-5xl font-bold">Jobb hos oss</h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl">
              Vi er alltid interessert i å høre fra folk med erfaring fra sjø og havbruk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Åpen søknad</h2>

          <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              Vi har ikke alltid ledige stillinger utlyst, men vi lagrer gjerne
              søknaden din dersom det blir aktuelt senere.
            </p>
            <p>
              Vi ser etter folk med erfaring fra maritime operasjoner eller havbruk,
              som trives med praktisk arbeid på sjøen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${COMPANY.email}?subject=Åpen søknad`}
              className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Send søknad på e-post
            </a>
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Ring oss
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-slate-900">
        <ContactBlock
          headline="Spørsmål?"
          subheadline="Ta kontakt for en uformell prat."
          showForm
        />
      </SectionWrapper>
    </>
  );
}
