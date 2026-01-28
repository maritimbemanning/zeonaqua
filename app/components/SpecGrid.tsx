import React from "react";

interface SpecItem {
  label: string;
  value: string;
}

interface SpecGridProps {
  specs: SpecItem[];
}

export default function SpecGrid({ specs }: SpecGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {specs.map((spec, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-zeon-gray hover:border-zeon-navy-light/30 transition-colors"
        >
          <div className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-1">
            {spec.label}
          </div>
          <div className="text-lg font-semibold text-zeon-navy">
            {spec.value}
          </div>
        </div>
      ))}
    </div>
  );
}
