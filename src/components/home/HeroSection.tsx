export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4f8]">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#0047AB]" />
              <span className="text-[13px] font-[500] text-slate-700">
                Employer-backed salary access
              </span>
            </div>

            <h1 className="mt-7 text-[44px] font-[900] leading-[1.12] tracking-[-0.03em] text-slate-900 lg:text-[56px]">
              Beating your
              <br />
              month-end crunch,
              <br />
              <span className="font-serif italic font-[400] text-[#007FFF]">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#0047AB] px-7 py-3.5 text-[14px] font-[600] text-white shadow-cobalt transition-all hover:bg-[#00358a] hover:-translate-y-px"
              >
                Get started <span className="text-[16px]">→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[14px] font-[500] text-slate-700 transition-all hover:border-slate-400"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* ── RIGHT — glassy dashboard card ── */}
          <div className="flex items-center justify-center">
            {/* Outer glass card */}
            <div
              className="w-full max-w-[500px] rounded-[28px] border border-white bg-white/80 p-6 backdrop-blur-xl"
              style={{
                boxShadow:
                  "0 24px 64px rgba(0,71,171,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Card header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff]">
                    {/* Wallet icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="16"
                        height="12"
                        rx="3"
                        stroke="#0047AB"
                        strokeWidth="1.5"
                      />
                      <path d="M2 9h16" stroke="#0047AB" strokeWidth="1.5" />
                      <circle cx="14.5" cy="13" r="1.5" fill="#0047AB" />
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
                      d="M6 1L7.5 3H10L8.5 5L9.5 7.5L7 6.5L5 8.5L5.5 6L3 4.5H5.5L6 1Z"
                      fill="#059669"
                      opacity="0.2"
                    />
                    <path
                      d="M2.5 6.5L5 9L9.5 4"
                      stroke="#059669"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[12px] font-[600] text-emerald-700">
                    Verified
                  </span>
                </div>
              </div>

              {/* Blue balance card */}
              <div
                className="rounded-[20px] p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #0047AB 0%, #1a6fd4 50%, #2563eb 100%)",
                }}
              >
                <p className="text-[12px] font-[500] text-blue-200 leading-none">
                  Available to access
                </p>
                <p
                  className="mt-2 text-white leading-none"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 52,
                    fontWeight: 400,
                  }}
                >
                  ₹8000
                </p>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white"
                      style={{ width: "68%" }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] font-[500] text-blue-200">
                    Request Access - Approved - Funds transferred
                  </p>
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
                    className="rounded-2xl bg-slate-50 border border-slate-100 px-3 py-4 text-center"
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
    </section>
  );
}
