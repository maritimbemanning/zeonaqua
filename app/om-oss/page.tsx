import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import ContactBlock from "../components/ContactBlock";
import { COMPANY, METADATA } from "../lib/constants";

export const metadata: Metadata = {
  title: METADATA.about.title,
  description: METADATA.about.description,
};

export default function OmOssPage() {
  return (
    <>
      {/* Intro */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Om Zeon Aqua
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {COMPANY.name} er et servicebåtrederi basert i {COMPANY.location}. Vi leverer båt og mannskap til havbruksnæringen i Nord-Norge – med fokus på å være tilgjengelige, pålitelige og enkle å jobbe med.
          </p>
        </div>
      </SectionWrapper>

      {/* Fakta */}
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Selskapsinfo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">
              Organisasjonsnummer
            </p>
            <p className="text-xl font-bold text-slate-900">
              {COMPANY.orgNr}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Lokasjon</p>
            <p className="text-xl font-bold text-slate-900">
              {COMPANY.location}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Etablert</p>
            <p className="text-xl font-bold text-slate-900">
              {COMPANY.established}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Kontaktblokk */}
      <SectionWrapper className="bg-white">
        <ContactBlock headline="Ta kontakt" showForm />
      </SectionWrapper>
    </>
  );
}
