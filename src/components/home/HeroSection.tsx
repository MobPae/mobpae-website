export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf3ee] via-[#faf7f4] to-[#f5ede8] pb-28 pt-20 lg:pb-36 lg:pt-28">

      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#c4522a]/8 blur-[80px]" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-[320px] w-[320px] rounded-full bg-[#d95a2e]/6 blur-[70px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/3 h-[200px] w-[200px] rounded-full bg-[#a8411f]/5 blur-[60px]" />

      {/* ── Decorative dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #c4522a 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#c4522a]" />
              <span className="text-[13px] font-[500] text-slate-700">
                Employer-backed salary access
              </span>
            </div>

            <h1 className="mt-7 text-[44px] font-[900] leading-[1.12] tracking-[-0.03em] text-slate-900 lg:text-[56px]">
              Beating your
              <br />
              month-end crunch,
              <br />
              <span className="font-serif italic font-[400] text-[#c4522a]">
                when it matters most.
              </span>
            </h1>

            <p className="mt-7 max-w-[420px] text-[15px] leading-[1.8] text-slate-600">
              MobPae helps employees access a portion of their earned salary
              before payday through employer-backed financial support. No
              personal loans. No awkward borrowing. Just simple, secure and
              transparent salary access.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#c4522a] px-7 py-3.5 text-[14px] font-[600] text-white shadow-terracotta transition-all hover:bg-[#a8411f] hover:-translate-y-px"
              >
                Get started <span className="text-[16px]">→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-[14px] font-[500] text-slate-700 backdrop-blur-sm transition-all hover:border-[#c4522a]/40 hover:bg-white"
              >
                See how it works
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-5">
              {[
                { value: "24h", label: "Approval" },
                { value: "100%", label: "Employer controlled" },
                { value: "0", label: "Credit checks" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-[22px] font-[800] tracking-tight text-slate-900">{value}</p>
                  <p className="text-[11px] font-[500] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — glassy dashboard card ── */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-[500px] rounded-[28px] border border-white/80 bg-white/85 p-6 backdrop-blur-xl"
              style={{
                boxShadow:
                  "0 24px 64px rgba(196,82,42,0.14), 0 4px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Card header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf3ee]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="5" width="16" height="12" rx="3" stroke="#c4522a" strokeWidth="1.5" />
                      <path d="M2 9h16" stroke="#c4522a" strokeWidth="1.5" />
                      <circle cx="14.5" cy="13" r="1.5" fill="#c4522a" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-[500] text-slate-400 leading-none">
                      Earned salary access
                    </p>
                    <p className="text-[14px] font-[700] text-slate-900 leading-tight mt-0.5">
                      Available now
                    </p>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5L5 9L9.5 4"
                      stroke="#059669"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[12px] font-[600] text-emerald-700">Verified</span>
                </div>
              </div>

              {/* Terracotta balance card */}
              <div
                className="rounded-[20px] p-6 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #6d2514 0%, #c4522a 55%, #a8411f 100%)",
                }}
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />

                <p className="text-[12px] font-[500] text-[#fde8d8] leading-none relative">
                  Available to access
                </p>
                <p
                  className="mt-2 text-white leading-none relative"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 52,
                    fontWeight: 400,
                  }}
                >
                  ₹8000
                </p>

                {/* Progress bar */}
                <div className="mt-5 relative">
                  <div className="flex justify-between mb-1.5">
                    <p className="text-[11px] font-[500] text-[#fde8d8]/70">Progress</p>
                    <p className="text-[11px] font-[600] text-white">68%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white transition-all"
                      style={{ width: "68%" }}
                    />
                  </div>
                  <div className="mt-2.5 flex gap-4">
                    {["Request Access", "Approved", "Funds transferred"].map((step, i) => (
                      <div key={step} className="flex items-center gap-1.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${i <= 1 ? "bg-white" : "bg-white/40"}`} />
                        <p className={`text-[10px] font-[500] ${i <= 1 ? "text-white" : "text-[#fde8d8]/60"}`}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat boxes */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: "24h", label: "Typical approval" },
                  { value: "100%", label: "Employer controlled" },
                  { value: "0", label: "Credit checks" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-[#fdf9f7] border border-[#f1e8e3] px-3 py-4 text-center"
                  >
                    <p className="text-[20px] font-[800] tracking-tight text-slate-900">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] font-[500] text-slate-500 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave divider — white into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 70 }}
        >
          <path
            d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
