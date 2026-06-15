export function HeroSection() {
  return (
    <>
      {/* ── Main hero — cream background ── */}
      <section className="relative overflow-hidden bg-[#faf6f1]">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-8 lg:pt-12 lg:pb-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">

            {/* ── LEFT ── */}
            <div className="max-w-[580px]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e8ddd4] bg-white px-4 py-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-[#c4522a]" />
                <span className="text-[11px] font-[700] tracking-[0.18em] text-[#6b5e53] uppercase">
                  Financial Freedom Redefined
                </span>
              </div>

              {/* Headline — editorial */}
              <h1
                className="font-[600] uppercase leading-[1.0] tracking-[-0.01em] text-[#1c1209]"
                style={{ fontSize: "clamp(40px, 5.5vw, 64px)" }}
              >
                Beating your
                <br />
                <span className="text-[#c4522a]">Month-End</span>
                <br />
                Crunch.
              </h1>

              <p className="mt-5 max-w-[440px] text-[16px] leading-[1.75] text-[#6b5e53]">
                Access your earned salary instantly. No interest, no credit
                checks, just your money when you need it most.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[14px] bg-[#c4522a] px-7 py-3.5 text-[14px] font-[600] text-white transition-all hover:bg-[#a8411f] hover:-translate-y-px"
                  style={{ boxShadow: "0 8px 28px rgba(196,82,42,0.30)" }}
                >
                  Download the App
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-[14px] border-2 border-[#1c1209]/20 bg-transparent px-7 py-3.5 text-[14px] font-[500] text-[#1c1209] transition-all hover:border-[#1c1209]/50"
                >
                  Talk to Sales
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-7 flex items-center gap-6 border-t border-[#e8ddd4] pt-6">
                <div>
                  <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">0%</p>
                  <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Interest charged</p>
                </div>
                <div className="h-8 w-px bg-[#e8ddd4]" />
                <div>
                  <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">24h</p>
                  <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Typical approval</p>
                </div>
                <div className="h-8 w-px bg-[#e8ddd4]" />
                <div>
                  <p className="text-[26px] font-[700] tracking-tight text-[#1c1209]">100%</p>
                  <p className="text-[11.5px] font-[500] text-[#6b5e53] mt-0.5">Employer backed</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT — Phone mockup ── */}
            <div className="flex items-center justify-center lg:justify-end">
              <div
                className="relative"
                style={{
                  perspective: "1200px",
                }}
              >
                {/* 3-D tilt wrapper */}
                <div
                  style={{
                    transform: "rotateY(-12deg) rotateX(4deg) rotateZ(1.5deg)",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.4s ease",
                  }}
                >

                {/* Phone frame */}
                <div
                  className="relative mx-auto overflow-hidden rounded-[44px] bg-[#1c1209]"
                  style={{
                    width: 300,
                    height: 560,
                    boxShadow:
                      "0 60px 100px rgba(28,18,9,0.40), 0 20px 40px rgba(28,18,9,0.25), -8px 0 30px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Phone notch simulation */}
                  <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#2e2010]" />

                  {/* ─ App screen content ─ */}
                  <div className="px-5 pt-4 pb-4">

                    {/* User row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-[700] text-white"
                          style={{ background: "linear-gradient(135deg, #c4522a, #d95a2e)" }}
                        >
                          RK
                        </div>
                        <div>
                          <p className="text-[11px] font-[600] text-white leading-none">Rahul Kumar</p>
                          <p className="text-[9px] text-white/40 mt-0.5">EMP-2024-1847</p>
                        </div>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                        </svg>
                      </div>
                    </div>

                    {/* Balance card */}
                    <div
                      className="rounded-2xl p-4 mb-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <p className="text-[9px] font-[700] tracking-[0.18em] text-white/40 uppercase mb-1.5">
                        Earned Balance
                      </p>
                      <p className="text-[32px] font-[300] text-white leading-none tracking-tight">
                        ₹42,850<span className="text-[20px] text-white/60">.00</span>
                      </p>

                      {/* Limit bar */}
                      <div className="mt-4">
                        <div className="flex justify-between mb-1.5">
                          <p className="text-[9.5px] font-[500] text-white/45">Withdrawal Limit</p>
                          <p className="text-[9.5px] font-[700] text-[#d95a2e]">80% Available</p>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "80%",
                              background: "linear-gradient(to right, #c4522a, #d95a2e)",
                            }}
                          />
                        </div>
                        <div className="mt-1.5 flex justify-between">
                          <p className="text-[8.5px] text-white/30">₹0</p>
                          <p className="text-[8.5px] text-white/30">₹50,000</p>
                        </div>
                      </div>

                      {/* Withdraw button */}
                      <button
                        className="mt-3 w-full rounded-xl py-2.5 text-[12px] font-[700] text-white transition-opacity hover:opacity-90"
                        style={{ background: "linear-gradient(135deg, #c4522a, #d95a2e)" }}
                      >
                        Withdraw Funds
                      </button>
                    </div>

                    {/* Recent activity */}
                    <div
                      className="rounded-2xl p-4"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-[9px] font-[700] tracking-[0.16em] text-white/35 uppercase mb-3">
                        Recent Activity
                      </p>

                      {[
                        { label: "March Advance", amount: "₹5,000", status: "Repaid", green: true },
                        { label: "Emergency Fund", amount: "₹8,000", status: "Active", green: false },
                        { label: "Feb Advance", amount: "₹3,200", status: "Repaid", green: true },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                          <div>
                            <p className="text-[10px] font-[600] text-white/70 leading-none">{item.label}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-[10px] font-[700] text-white">{item.amount}</p>
                            <span
                              className={`text-[8px] font-[700] px-1.5 py-0.5 rounded-full ${
                                item.green
                                  ? "bg-emerald-500/15 text-emerald-400"
                                  : "bg-[#c4522a]/20 text-[#d95a2e]"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}

                      <div className="mt-3 rounded-xl bg-white/5 px-3 py-2 flex items-center justify-between">
                        <p className="text-[9px] text-white/40">Total saved this year</p>
                        <p className="text-[11px] font-[800] text-[#d95a2e]">₹32,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div> {/* end 3D tilt wrapper */}

                {/* ── Floating card — 0% interest ── */}
                <div
                  className="absolute -bottom-4 -left-14 rounded-2xl bg-white p-4"
                  style={{
                    boxShadow: "0 16px 48px rgba(28,18,9,0.14)",
                    width: 180,
                  }}
                >
                  <p className="text-[32px] font-[900] tracking-tight text-[#c4522a] leading-none">0%</p>
                  <p className="mt-1.5 text-[11px] leading-[1.5] text-slate-500">
                    Interest on all early salary withdrawals.
                  </p>
                </div>

                {/* ── Floating card — approval time ── */}
                <div
                  className="absolute -top-4 -right-10 rounded-2xl bg-white p-3.5"
                  style={{
                    boxShadow: "0 12px 40px rgba(28,18,9,0.12)",
                    width: 148,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.5L5 9L9.5 4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[9.5px] font-[700] text-slate-700">Approved!</p>
                  </div>
                  <p className="text-[10.5px] font-[500] text-slate-500 leading-snug">
                    ₹8,000 disbursed in under 2 hours
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Dark bottom strip + scroll indicator ── */}
        <div className="bg-[#1c1209] px-6 py-5">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <p className="text-[12px] font-[600] text-white/40 uppercase tracking-[0.16em]">
              Salary access for modern India
            </p>
            <a
              href="#why-mobpae"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-white/40 hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
            <p className="text-[12px] font-[600] text-white/40 uppercase tracking-[0.16em]">
              Employer backed · Zero interest
            </p>
          </div>
        </div>

      </section>
    </>
  );
}
