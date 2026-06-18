import { useInView } from "../../hooks/useInView";

export function WhyMobPaeSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="why-mobpae"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#f8faf7] pt-20 pb-24"
    >
      {/* Subtle blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d1fae5]/40 blur-[90px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-64 w-64 rounded-full bg-[#ecfdf5]/60 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* 2-col grid */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

          {/* Left — headline */}
          <div className={`reveal ${inView ? "in-view" : ""}`}>
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#10b981]">
              Why We Exist
            </p>
            <div className="mt-2 h-0.5 w-10 bg-[#10b981]" />

            <h2
              className="mt-7 font-[700] leading-[1.05] tracking-[-0.02em] text-[#0f172a]"
              style={{ fontSize: "clamp(34px, 4.5vw, 52px)" }}
            >
              Financial{" "}
              <span className="text-[#10b981]">emergencies</span>
              <br />
              don't wait
              <br />
              for payday.
            </h2>

            <p className="mt-6 max-w-[400px] text-[15px] leading-[1.8] text-[#64748b]">
              Life happens. Bills, medical needs, urgent responsibilities — not everything can wait. MobPae bridges the gap between today's needs and tomorrow's paycheck.
            </p>
          </div>

          {/* Right — monthly salary advances chart */}
          <div className={`flex items-start lg:justify-end reveal delay-150 ${inView ? "in-view" : ""}`}>
            <div className="w-full max-w-[420px] rounded-2xl border border-[#e2e8f0] bg-white p-6">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-[700] uppercase tracking-[0.2em] text-[#94a3b8]">
                  Monthly Salary Advances
                </p>
                <span className="text-[11px] font-[600] text-[#10b981]">2024–25</span>
              </div>

              {/* Bar chart */}
              {(() => {
                const months = [
                  { m: "Jun", k: 2 }, { m: "Jul", k: 4 }, { m: "Aug", k: 3 },
                  { m: "Sep", k: 5 }, { m: "Oct", k: 6 }, { m: "Nov", k: 3 },
                ];
                const max = Math.max(...months.map(d => d.k));
                return (
                  <div className="mt-5 flex items-end gap-2" style={{ height: 100 }}>
                    {months.map((d) => (
                      <div key={d.m} className="flex flex-1 flex-col items-center gap-1">
                        <span className="text-[8.5px] font-[700] text-[#10b981]">₹{d.k}K</span>
                        <div
                          className="w-full rounded-t-[6px] bg-[#10b981]"
                          style={{ height: `${Math.round((d.k / max) * 72)}px` }}
                        />
                        <span className="text-[8.5px] text-[#94a3b8]">{d.m}</span>
                      </div>
                    ))}
                  </div>
                );
              })()}

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { val: "₹23K", label: "Total accessed" },
                  { val: "6×", label: "Advances" },
                  { val: "24h", label: "Avg approval" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#ffffff] px-3 py-3 text-center border border-[#e2e8f0]">
                    <p className="text-[17px] font-[700] text-[#10b981] leading-none">{s.val}</p>
                    <p className="mt-1 text-[9.5px] text-[#94a3b8] leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flow diagram */}
        <div className={`mt-16 flex items-start justify-center gap-0 reveal delay-200 ${inView ? "in-view" : ""}`}>
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

          <Arrow />

          {/* Center: MobPae — solid emerald, no gradient */}
          <div className="text-center px-5">
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#10b981]"
              style={{ boxShadow: "0 18px 42px rgba(16,185,129,0.32)" }}
            >
              <svg width="28" height="20" viewBox="0 0 22 16" fill="none">
                <path d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="mt-4 text-[15px] font-[700] text-[#0f172a]">MobPae</h4>
            <p className="mt-2 mx-auto max-w-[160px] text-[12px] leading-[1.6] text-[#64748b]">
              Secure, seamless salary access — employees first.
            </p>
          </div>

          <Arrow />

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

        {/* Quote block */}
        <div className={`mt-10 flex justify-center reveal delay-300 ${inView ? "in-view" : ""}`}>
          <div className="mx-auto max-w-[600px] rounded-[28px] border border-emerald-100 bg-white/82 px-8 py-5 text-center shadow-soft backdrop-blur-xl">
            <p className="text-[13.5px] font-[500] leading-[1.8] text-[#64748b]">
              <span className="text-[28px] leading-none text-[#10b981] font-[300] align-bottom mr-1">"</span>
              We exist to build a world where employees never have to choose between their{" "}
              <span className="font-[600] text-[#10b981]">financial well-being</span> and their{" "}
              <span className="font-[600] text-[#10b981]">peace of mind.</span>
              <span className="text-[28px] leading-none text-[#10b981] font-[300] align-bottom ml-1">"</span>
            </p>
          </div>
        </div>
      </div>

      {/* Wave → HowItWorks (white) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,20 C480,70 960,0 1440,55 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <div className="flex items-center mt-8 flex-1 max-w-[100px]">
      <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#10b981]" />
      <div className="flex-1 h-px bg-[#10b981]/30" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
        <path d="M2 6h8M7 3l3 3-3 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function FlowNode({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center px-4">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d1fae5] bg-[#ecfdf5] text-[#10b981]">
        {icon}
      </div>
      <h4 className="mt-4 text-[15px] font-[700] text-[#0f172a]">{title}</h4>
      <p className="mt-2 mx-auto max-w-[180px] text-[12px] leading-[1.6] text-[#64748b]">{description}</p>
    </div>
  );
}
