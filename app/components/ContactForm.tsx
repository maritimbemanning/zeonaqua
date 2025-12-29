"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    period: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-teal-600 mx-auto mb-4"
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
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          Takk for din henvendelse!
        </h3>
        <p className="text-slate-600">
          Vi ringer deg innen 2 timer i arbeidstid.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Navn *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Hva gjelder det?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
        />
      </div>

      <div>
        <label
          htmlFor="period"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Ønsket periode (valgfritt)
        </label>
        <input
          type="text"
          id="period"
          name="period"
          value={formData.period}
          onChange={handleChange}
          placeholder="F.eks. uke 12-14"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Send forespørsel
      </button>
    </form>
  );
}
