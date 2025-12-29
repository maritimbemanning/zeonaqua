interface Spec {
  label: string;
  value: string;
  context: string;
}

interface SpecGridProps {
  specs: Spec[];
}

export default function SpecGrid({ specs }: SpecGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="bg-white border border-slate-200 rounded-lg p-4 md:p-6"
        >
          <p className="text-sm text-slate-500 mb-1">{spec.label}</p>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {spec.value}
          </p>
          <p className="text-sm text-slate-700">{spec.context}</p>
        </div>
      ))}
    </div>
  );
}
