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

  const doubled = [...companies, ...companies];

  return (
    <section className="relative bg-white py-12 overflow-hidden border-b border-[#E5E6EE]">
      <div className="mx-auto max-w-7xl px-6 mb-7">
        <p className="text-center text-[11px] font-[700] uppercase tracking-[0.22em] text-[#5B3CE3]">
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
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#E5E6EE] bg-[#ffffff]"
            >
              <span className="h-2 w-2 rounded-full bg-[#5B3CE3] opacity-60 flex-shrink-0" />
              <span className="text-[13.5px] font-[600] tracking-tight text-[#8D90A3]">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
