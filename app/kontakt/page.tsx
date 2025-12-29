import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import ContactForm from "../components/ContactForm";
import { COMPANY, METADATA } from "../lib/constants";

export const metadata: Metadata = {
  title: METADATA.contact.title,
  description: METADATA.contact.description,
};

export default function KontaktPage() {
  return (
    <>
      {/* Primær kontakt */}
      <SectionWrapper className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ta kontakt
          </h1>
          <a
            href={`tel:${COMPANY.phoneClean}`}
            className="inline-block text-4xl md:text-5xl font-bold text-teal-600 hover:underline mb-4"
          >
            {COMPANY.phone}
          </a>
          <p className="text-lg text-slate-600">Daglig leder</p>
        </div>
      </SectionWrapper>

      {/* Forventningsstyring */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Når kan du forvente svar?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-slate-900 whitespace-nowrap">
                  Arbeidstid (07-17):
                </span>
                <span>Vi svarer innen 2 timer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-slate-900 whitespace-nowrap">
                  Utenom arbeidstid:
                </span>
                <span>Vi ringer deg tilbake neste morgen.</span>
              </li>
            </ul>
            <p className="mt-4 pt-4 border-t border-slate-200 text-slate-500">
              Vi har én båt. Er den opptatt, sier vi det med en gang – og hjelper deg videre om vi kan.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Kontaktskjema */}
      <SectionWrapper className="bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Send forespørsel
          </h2>
          <ContactForm />
        </div>
      </SectionWrapper>

      {/* Hjelpetekst */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            For raskest mulig svar, fortell oss:
          </h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-3">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Hva slags jobb det gjelder
            </li>
            <li className="flex items-center gap-3">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Hvor (anlegg/område)
            </li>
            <li className="flex items-center gap-3">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Når du trenger båten
            </li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
