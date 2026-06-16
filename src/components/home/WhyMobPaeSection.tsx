export function WhyMobPaeSection() {
  return (
    <section id="why-mobpae" className="relative overflow-hidden bg-white pt-20 pb-32">

      {/* Blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#fde8d8]/50 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-64 w-64 rounded-full bg-[#fdf3ee]/70 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Top 2-col ── */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">

          {/* Left — headline */}
          <div>
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#c4522a]">
              Why We Exist
            </p>
            <div className="mt-2 h-0.5 w-10 bg-[#c4522a]" />

            <h2
              className="mt-7 font-[700] leading-[1.05] tracking-[-0.02em] text-[#1c1209]"
              style={{ fontSize: "clamp(36px, 4.5vw, 52px)" }}
            >
              Financial<br />
              emergencies<br />
              don't wait<br />
              <span className="font-serif italic font-[400] text-[#c4522a]">for payday.</span>
            </h2>

            <p className="mt-6 max-w-[400px] text-[15px] leading-[1.8] text-[#6b5e53]">
              Life happens. Bills, medical needs, urgent responsibilities — not everything can wait. MobPae was created to bridge the gap between today's needs and tomorrow's paycheck.
            </p>
          </div>

          {/* Right — salary overview card */}
          <div className="flex items-start lg:justify-end">
            <div className="w-full max-w-[420px] rounded-2xl border border-[#f1e8e3] bg-[#faf6f1] p-6 shadow-soft">
              <p className="text-[10px] font-[700] uppercase tracking-[0.2em] text-[#9e8f85]">
                Your Wage Access Overview
              </p>
              <p className="mt-3 text-[36px] font-[300] text-[#1c1209] leading-none tracking-tight">
                ₹42,850<span className="text-[20px] text-[#9e8f85]">.00</span>
              </p>
              <p className="mt-1 text-[12px] text-[#9e8f85]">Accessed this pay period</p>

              {/* Mini bar chart */}
              <div className="mt-5 space-y-2">
                {[
                  { label: "Mon", w: 35 }, { label: "Tue", w: 55 },
                  { label: "Wed", w: 45 }, { label: "Thu", w: 70 },
                  { label: "Fri", w: 85 }, { label: "Sat", w: 60 },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <span className="w-8 text-[10px] text-[#9e8f85]">{d.label}</span>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-[#e8ddd4]">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${d.w}%`, background: "linear-gradient(to right, #8a3118, #c4522a)" }}
                      />
                    </div>
                    <span className="w-8 text-right text-[10px] font-[600] text-[#c4522a]">{d.w}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { val: "₹0", label: "Interest" },
                  { val: "24h", label: "Approval" },
                  { val: "100%", label: "Employer" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white px-3 py-3 text-center border border-[#f1e8e3]">
                    <p className="text-[18px] font-[700] text-[#c4522a] leading-none">{s.val}</p>
                    <p className="mt-1 text-[10px] text-[#9e8f85]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Flow diagram ── */}
        <div className="mt-16 flex items-start justify-center gap-0">
          <FlowNode
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            }
            title="Employee"
            description="Gets instant access to earned salary — without stress or debt."
          />

          <div className="flex items-center mt-8 flex-1 max-w-[100px]">
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#c4522a]" />
            <div className="flex-1 h-px bg-gradient-to-r from-[#c4522a] to-[#c4522a]/40" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="#c4522a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="text-center px-5">
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #6d2514, #c4522a)", boxShadow: "0 12px 40px rgba(196,82,42,0.35)" }}
            >
              <svg width="28" height="20" viewBox="0 0 22 16" fill="none">
                <path d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="mt-4 text-[15px] font-[700] text-[#1c1209]">MobPae</h4>
            <p className="mt-2 mx-auto max-w-[160px] text-[12px] leading-[1.6] text-[#6b5e53]">
              Secure, seamless salary access — employees first.
            </p>
          </div>

          <div className="flex items-center mt-8 flex-1 max-w-[100px]">
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#c4522a]" />
            <div className="flex-1 h-px bg-gradient-to-r from-[#c4522a] to-[#c4522a]/40" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="#c4522a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <FlowNode
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
            }
            title="Employer"
            description="Empowers teams with financial wellness — boosting loyalty and productivity."
          />
        </div>

        {/* ── Quote block ── */}
        <div className="mt-14 rounded-2xl border border-[#f1e8e3] bg-[#fdf9f7] px-8 py-7">
          <div className="flex items-start gap-5">
            <span className="font-serif text-[52px] leading-none text-[#c4522a] select-none" style={{ marginTop: "-8px" }}>"</span>
            <p className="text-[15px] font-[500] leading-[1.8] text-[#1c1209]">
              We exist to build a world where employees never have to choose between their{" "}
              <span className="font-[600] text-[#c4522a]">financial well-being</span> and their{" "}
              <span className="font-[600] text-[#c4522a]">peace of mind.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Wave → HowItWorks warm bg */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,0 C360,70 1080,0 1440,55 L1440,70 L0,70 Z" fill="#faf7f5"/>
        </svg>
      </div>
    </section>
  );
}

function FlowNode({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center px-4">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#fde8d8] bg-[#fdf3ee] text-[#c4522a]">
        {icon}
      </div>
      <h4 className="mt-4 text-[15px] font-[700] text-[#1c1209]">{title}</h4>
      <p className="mt-2 mx-auto max-w-[180px] text-[12px] leading-[1.6] text-[#6b5e53]">{description}</p>
    </div>
  );
}
