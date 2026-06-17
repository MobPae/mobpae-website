import { useInView } from "../../hooks/useInView";

export function HeroSection() {
  const [heroRef, heroInView] = useInView(0.05);

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#faf6f1]"
    >
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div className="max-w-[560px]">
            <div className={`reveal ${heroInView ? "in-view" : ""}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e8ddd4] bg-white px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#c4522a]" />
                <span className="text-[11px] font-[700] tracking-[0.18em] text-[#6b5e53] uppercase">
                  Financial Freedom Redefined
                </span>
              </div>
            </div>

            <h1
              className={`mt-5 font-[700] uppercase leading-[1.0] tracking-[-0.015em] text-[#1c1209] reveal delay-100 ${heroInView ? "in-view" : ""}`}
              style={{ fontSize: "clamp(40px, 5.5vw, 62px)" }}
            >
              Beating your
              <br />
              <span className="text-[#c4522a]">Month-End</span>
              <br />
              Crunch.
            </h1>

            <p className={`mt-5 max-w-[420px] text-[15.5px] leading-[1.8] text-[#6b5e53] reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              Access your earned salary before payday. No credit checks
              — just your money, when you need it most.
            </p>

            <div className={`mt-7 flex flex-wrap items-center gap-4 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[#c4522a] px-7 py-3.5 text-[14px] font-[600] text-white transition-all hover:bg-[#a8411f] hover:-translate-y-px"
                style={{ boxShadow: "0 8px 24px rgba(196,82,42,0.28)" }}
              >
                Download the App
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-[14px] border-2 border-[#1c1209]/20 bg-transparent px-7 py-3.5 text-[14px] font-[500] text-[#1c1209] transition-all hover:border-[#1c1209]/40"
              >
                How It Works
              </a>
            </div>

            <div className={`mt-7 flex items-center gap-6 border-t border-[#e8ddd4] pt-6 reveal delay-400 ${heroInView ? "in-view" : ""}`}>
              <div>
                <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">100%</p>
                <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Employer backed</p>
              </div>
              <div className="h-8 w-px bg-[#e8ddd4]" />
              <div>
                <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">24h</p>
                <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Typical approval</p>
              </div>
              <div className="h-8 w-px bg-[#e8ddd4]" />
              <div>
                <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">12×</p>
                <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Advances per year</p>
              </div>
            </div>
          </div>

          {/* RIGHT — White-theme phone mockup */}
          <div className={`flex items-center justify-center lg:justify-end reveal-scale delay-200 ${heroInView ? "in-view" : ""}`}>
            <div className="relative" style={{ perspective: "1200px" }}>
              <div
                style={{
                  transform: "rotateY(-10deg) rotateX(3deg) rotateZ(1deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Phone frame — white */}
                <div
                  className="relative mx-auto overflow-hidden rounded-[44px] bg-white"
                  style={{
                    width: 300,
                    height: 560,
                    boxShadow:
                      "0 60px 100px rgba(28,18,9,0.18), 0 24px 48px rgba(28,18,9,0.10), 0 0 0 1px rgba(28,18,9,0.07)",
                  }}
                >
                  {/* Notch */}
                  <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-[#e8e8ed]" />

                  {/* Screen area */}
                  <div
                    className="mx-3 mt-2 rounded-[28px] overflow-hidden"
                    style={{ background: "#f2f2f7", height: 490 }}
                  >
                    {/* Topbar */}
                    <div className="bg-white px-4 pt-3 pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c4522a] text-[10px] font-[700] text-white">
                            RK
                          </div>
                          <div>
                            <p className="text-[11px] font-[600] text-[#1c1209] leading-none">Rahul Kumar</p>
                            <p className="text-[9px] text-[#9a8070] mt-0.5">Good morning</p>
                          </div>
                        </div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f2f7]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b5e53" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Balance card — orange */}
                    <div className="mx-3 mt-2">
                      <div className="rounded-2xl p-4 bg-[#c4522a]">
                        <p className="text-[9px] font-[700] tracking-[0.18em] text-white/70 uppercase mb-1">
                          Earned Balance
                        </p>
                        <p className="text-[28px] font-[300] text-white leading-none tracking-tight">
                          ₹42,850<span className="text-[17px] text-white/60">.00</span>
                        </p>
                        <div className="mt-3">
                          <div className="flex justify-between mb-1">
                            <p className="text-[8.5px] font-[500] text-white/65">Access Used</p>
                            <p className="text-[8.5px] font-[700] text-white">3 of 12</p>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                            <div className="h-full rounded-full bg-white" style={{ width: "25%" }} />
                          </div>
                        </div>
                        <button className="mt-3 w-full rounded-xl py-2 text-[11.5px] font-[700] bg-white text-[#c4522a]">
                          Request Advance
                        </button>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="mx-3 mt-2 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[8.5px] text-[#9a8070] uppercase tracking-[0.12em] font-[600]">Membership</p>
                        <p className="text-[19px] font-[700] text-[#c4522a] leading-tight mt-0.5">Active</p>
                        <p className="text-[8px] text-[#c8bab3] mt-0.5">Annual plan</p>
                      </div>
                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[8.5px] text-[#9a8070] uppercase tracking-[0.12em] font-[600]">Next payroll</p>
                        <p className="text-[19px] font-[700] text-[#1c1209] leading-tight mt-0.5">30 Jun</p>
                        <p className="text-[8px] text-[#c8bab3] mt-0.5">Auto-repayment</p>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="mx-3 mt-2">
                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[8.5px] font-[700] tracking-[0.14em] text-[#9a8070] uppercase mb-2.5">
                          Recent Activity
                        </p>
                        {[
                          { label: "March Advance", amount: "₹5,000", status: "Repaid", ok: true },
                          { label: "Emergency Fund", amount: "₹8,000", status: "Active", ok: false },
                          { label: "Feb Advance",    amount: "₹3,200", status: "Repaid", ok: true },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between py-1.5 border-b border-[#f2f2f7] last:border-0"
                          >
                            <p className="text-[9.5px] font-[500] text-[#1c1209]">{item.label}</p>
                            <div className="flex items-center gap-1.5">
                              <p className="text-[9.5px] font-[700] text-[#1c1209]">{item.amount}</p>
                              <span
                                className={`text-[7.5px] font-[700] px-1.5 py-0.5 rounded-full ${
                                  item.ok
                                    ? "bg-emerald-50 text-emerald-600"
                                    : "bg-[#fdf3ee] text-[#c4522a]"
                                }`}
                              >
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating: approval */}
              <div
                className="absolute -bottom-4 -left-12 rounded-2xl bg-white p-4"
                style={{ boxShadow: "0 16px 48px rgba(28,18,9,0.13)", width: 168 }}
              >
                <p className="text-[30px] font-[800] tracking-tight text-[#c4522a] leading-none">24h</p>
                <p className="mt-1.5 text-[11px] leading-[1.5] text-[#6b5e53]">
                  Typical approval and disbursal time.
                </p>
              </div>

              {/* Floating: plan */}
              <div
                className="absolute -top-3 -right-8 rounded-2xl bg-white p-3.5"
                style={{ boxShadow: "0 12px 40px rgba(28,18,9,0.11)", width: 156 }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="h-5 w-5 rounded-full bg-[#fdf3ee] flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5L5 9L9.5 3.5" stroke="#c4522a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[9.5px] font-[700] text-[#1c1209]">₹499 / year</p>
                </div>
                <p className="text-[10px] text-[#6b5e53] leading-snug">
                  Full access — 12 advances/year
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
