export function TrustedCompanies() {
  const companies = [
    "ABC Technologies",
    "Vertex Solutions",
    "Acme Industries",
    "Nova Retail",
    "Prime Logistics",
    "Apex Ventures",
    "Sterling Corp",
  ];

  // Double for seamless marquee loop
  const doubled = [...companies, ...companies];

  return (
    <section className="border-y border-slate-100 bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-7">
        <p className="text-center text-[11px] font-[700] uppercase tracking-[0.2em] text-slate-400">
          Trusted by Growing Employers
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden select-none">
        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50"
            >
              {/* Placeholder icon dot */}
              <span className="h-2 w-2 rounded-full bg-[#007FFF] opacity-60 flex-shrink-0" />
              <span className="text-[13.5px] font-[600] tracking-tight text-slate-500">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
