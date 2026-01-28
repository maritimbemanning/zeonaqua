"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import { COMPANY, SERVICES } from "./lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative bg-zeon-navy-dark text-white min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="MS Akva Fighter"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zeon-navy-dark/30 via-zeon-navy-dark/40 to-zeon-navy-dark/90" />
        </div>

        <div className="relative max-w-4xl mx-auto px-8 py-32 text-center">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 font-display"
          >
            Maritime tjenester i Nord-Norge
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto"
          >
            Zeon Aqua AS er et servicebåtrederi som tilbyr spesialiserte tjenester
            til havbruksnæringen og kystnær industri.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-12">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-white text-zeon-navy px-8 py-4 rounded-lg font-medium hover:bg-zeon-cream transition"
            >
              Ta kontakt
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Tjenester */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zeon-navy mb-4 font-display">Våre tjenester</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi leverer maritime servicetjenester til havbruksnæringen og
              kystnær industri.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="border border-zeon-gray rounded-lg p-6 hover:border-zeon-navy-light/30 hover:shadow-lg transition-all cursor-default bg-white"
              >
                <h3 className="font-semibold text-lg text-zeon-navy mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Fartøy */}
      <SectionWrapper className="bg-zeon-cream border-y border-zeon-gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={cardVariant}>
              <h2 className="text-3xl font-bold text-zeon-navy mb-4 font-display">MS Akva Fighter</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Vårt fartøy er en servicebåt bygget for havbruksoperasjoner i
                nordnorske farvann. Båten er utstyrt for fortøyningsarbeid,
                frakt og notservice.
              </p>
              <Link
                href="/akva-fighter"
                className="inline-flex items-center text-zeon-navy font-semibold hover:text-zeon-navy-light group"
              >
                Les mer om fartøyet
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/MS_AkvaFighter.jpg"
                alt="MS Akva Fighter"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Om oss */}
      <SectionWrapper className="bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-zeon-navy mb-4 font-display">Om selskapet</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Zeon Aqua AS ble etablert i 2024 og er basert i Botnhamn, strategisk
            plassert mellom Tromsø og Senja.
          </p>
          <Link
            href="/var-historie"
            className="inline-flex items-center text-zeon-navy font-semibold hover:text-zeon-navy-light group"
          >
            Les mer om oss
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Kontakt */}
      <SectionWrapper className="bg-zeon-navy-dark text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4 font-display">Kontakt oss</h2>
          <p className="text-lg text-slate-300 mb-8">
            Ta kontakt for mer informasjon om våre tjenester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center justify-center bg-white text-zeon-navy px-8 py-4 rounded-lg font-medium hover:bg-zeon-cream transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {COMPANY.phone}
            </motion.a>
            <motion.a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {COMPANY.email}
            </motion.a>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
