export function TrustedCompanies() {
  const companies = [
    "ABC Technologies",
    "Vertex Solutions",
    "Acme Industries",
    "Nova Retail",
    "Prime Logistics",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:py-14">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-600">
            Trusted by Growing Employers
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-lg font-bold tracking-wide text-slate-400 transition hover:text-slate-700">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
