import { useInView } from "../../hooks/useInView";

export function HeroSection() {
  const [heroRef, heroInView] = useInView(0.05);

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#faf6f1] pt-16 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
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

            <div className={`mt-7 flex flex-wrap items-center gap-3 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-[14px] bg-[#1c1209] px-5 py-3 transition-all hover:bg-[#c4522a] hover:-translate-y-px"
                style={{ boxShadow: "0 6px 20px rgba(28,18,9,0.22)" }}
              >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M1.5 1C1.5 0.4 2.2 0 2.8 0.3L18.5 9.6C19.1 9.9 19.1 10.8 18.5 11.1L2.8 20.5C2.2 20.8 1.5 20.4 1.5 19.8V1Z" fill="white"/>
                  <path d="M1.5 1L11 10.3L1.5 19.8" stroke="white" strokeOpacity="0.3" strokeWidth="0.5"/>
                </svg>
                <div>
                  <p className="text-[9px] font-[400] text-white/60 leading-none">Get it on</p>
                  <p className="text-[13px] font-[700] text-white leading-tight mt-0.5">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-[14px] bg-[#1c1209] px-5 py-3 transition-all hover:bg-[#c4522a] hover:-translate-y-px"
                style={{ boxShadow: "0 6px 20px rgba(28,18,9,0.22)" }}
              >
                <svg width="18" height="22" viewBox="0 0 18 22" fill="white">
                  <path d="M14.5 11.7c0-2.9 2.4-4.3 2.5-4.4C15.5 5 13.4 4.7 12.6 4.7c-1.8-.2-3.5 1-4.4 1s-2.3-1-3.8-1C2.5 4.7.3 6.1.3 9.6c0 2.2.9 4.5 1.9 5.9 1 1.4 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.2.9 3.6.9 1.5 0 2.4-1.4 3.4-2.8.7-1 1.2-2.1 1.5-3.3-2.1-.8-3.3-2.8-3.3-4.4z"/>
                  <path d="M11.7 3c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8C8.7 2 8 3.3 8.2 4.6c1.3.1 2.7-.7 3.5-1.6z"/>
                </svg>
                <div>
                  <p className="text-[9px] font-[400] text-white/60 leading-none">Download on the</p>
                  <p className="text-[13px] font-[700] text-white leading-tight mt-0.5">App Store</p>
                </div>
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

      {/* Wave → TrustedCompanies (white) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,20 C480,70 960,0 1440,55 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
