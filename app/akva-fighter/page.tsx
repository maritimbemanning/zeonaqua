import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import SpecGrid from "../components/SpecGrid";
import ContactBlock from "../components/ContactBlock";
import { VESSEL, USE_CASES, METADATA } from "../lib/constants";

export const metadata: Metadata = {
  title: METADATA.vessel.title,
  description: METADATA.vessel.description,
};

export default function AkvaFighterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[400px] md:min-h-[500px]">
        <Image
          src="/images/akvafighter.jpg"
          alt="MS Akva Fighter fra siden med kran i bruk og ROV-utstyr synlig"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {VESSEL.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Arbeidsbåt bygget for kystnær havbruksservice
          </p>
        </div>
      </section>

      {/* Nøkkeltall */}
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nøkkeltall
        </h2>
        <SpecGrid specs={VESSEL.specs} />
      </SectionWrapper>

      {/* Bruksscenarier */}
      <SectionWrapper className="bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Hva brukes båten til?
        </h2>
        <div className="space-y-12">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.id}
              id={useCase.id}
              className="border-l-4 border-teal-500 pl-6 scroll-mt-24"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {useCase.title}
              </h3>
              <div className="space-y-3 text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">
                    Passer når:
                  </span>{" "}
                  {useCase.passerNar}
                </p>
                <p>
                  <span className="font-medium text-slate-800">
                    Eksempel:
                  </span>{" "}
                  {useCase.eksempel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Utstyr ombord */}
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Utstyr ombord
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VESSEL.equipment.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-slate-800"
            >
              <svg
                className="w-5 h-5 text-teal-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* Mannskap */}
      <SectionWrapper className="bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Mannskap
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Erfaren skipper med over 15 års fartstid i havbruksnæringen. Kjenner kysten, anleggene og jobben som skal gjøres.
        </p>
      </SectionWrapper>

      {/* Kontaktblokk */}
      <SectionWrapper className="bg-slate-50">
        <ContactBlock headline="Passer Akva Fighter til din jobb?" />
      </SectionWrapper>
    </>
  );
}
