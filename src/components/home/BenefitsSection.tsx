import { Zap, Building2, ShieldCheck, Eye } from "lucide-react";
import { useInView } from "../../hooks/useInView";

export function BenefitsSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="benefits"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#faf6f1] pt-20 pb-24"
    >
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fdf3ee]/70 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className={`reveal ${inView ? "in-view" : ""}`}>
          <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#c4522a]">Why Choose Us</p>
          <div className="mt-2 h-0.5 w-10 bg-[#c4522a]" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">

          {/* Left column */}
          <div className={`flex flex-col gap-6 reveal delay-100 ${inView ? "in-view" : ""}`}>

            {/* Fast Approval card */}
            <div className="rounded-2xl border border-[#f1e8e3] bg-[#faf6f1] p-6">
              <div className="flex items-start gap-5">
                {/* Clock graphic */}
                <div className="relative flex-shrink-0 h-28 w-28">
                  <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at center, #fde8d8 0%, #faf6f1 70%)", border: "2px solid #e8d5c8" }} />
                  <div className="absolute inset-3 rounded-full border border-[#e8d5c8]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute h-8 w-0.5 rounded-full bg-[#1c1209]/60 origin-bottom" style={{ bottom: "50%", left: "calc(50% - 1px)", transform: "rotate(30deg)" }} />
                    <div className="absolute h-10 w-0.5 rounded-full bg-[#c4522a] origin-bottom" style={{ bottom: "50%", left: "calc(50% - 1px)", transform: "rotate(150deg)" }} />
                    <div className="h-3 w-3 rounded-full bg-[#c4522a] z-10" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdf3ee]">
                    <Zap size={16} className="text-[#c4522a]" />
                  </div>
                  <h3 className="mt-3 text-[20px] font-[600] text-[#1c1209]">Fast Approval</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-[#6b5e53]">
                    Get approved in minutes, not days. Access your earned wages when you need them.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-0 border-t border-[#e8ddd4] pt-5">
                {[
                  { val: "90%", label: "Approved", sub: "instantly" },
                  { val: "< 60s", label: "Approval", sub: "avg time" },
                  { val: "24/7", label: "Access", sub: "anytime" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 border-r border-[#e8ddd4] pr-4 last:border-r-0 last:pr-0 pl-4 first:pl-0">
                    <p className="text-[18px] font-[700] text-[#c4522a] leading-none">{s.val}</p>
                    <p className="mt-1 text-[10px] text-[#9e8f85] leading-[1.5]">{s.label}<br/>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className={`flex flex-col gap-5 reveal delay-200 ${inView ? "in-view" : ""}`}>
            <FeatureCard
              icon={<Building2 size={20} />}
              title="Employer Controlled"
              description="Employers set the rules, approve access, and manage limits. Full visibility, always."
              visual={
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#fdf3ee]">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c4522a" strokeWidth="1.3">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              }
            />
            <FeatureCard
              icon={<ShieldCheck size={20} />}
              title="No Credit Checks"
              description="Your credit score doesn't determine your access. Your earned wages do."
              visual={
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#fdf3ee]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#c4522a]/40">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4522a" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                </div>
              }
            />

            {/* Transparent workflow — mini chart */}
            <div className="rounded-2xl border border-[#f1e8e3] bg-[#faf6f1] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#fdf3ee]">
                  <Eye size={18} className="text-[#c4522a]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] text-[#1c1209]">Transparent Workflow</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#6b5e53]">
                    No hidden fees, no fine print. Just clarity you can trust.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#ede8e2] bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-[600] uppercase tracking-[0.12em] text-[#9e8f85]">Wage Access Activity</p>
                  <p className="text-[12px] font-[700] text-[#c4522a]">₹42,850</p>
                </div>
                <svg viewBox="0 0 280 56" className="w-full" style={{ height: 56 }}>
                  <defs>
                    <linearGradient id="wChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c4522a" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#c4522a" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,50 C40,46 60,38 90,30 C120,22 140,14 170,9 C200,4 230,6 280,2" fill="none" stroke="#c4522a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M0,50 C40,46 60,38 90,30 C120,22 140,14 170,9 C200,4 230,6 280,2 L280,56 L0,56 Z" fill="url(#wChartFill)"/>
                  <circle cx="280" cy="2" r="3.5" fill="#c4522a"/>
                </svg>
                <div className="mt-1.5 flex justify-between">
                  {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                    <span key={d} className="text-[9px] text-[#9e8f85]">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave → Pricing (white) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,20 C480,70 960,0 1440,55 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, visual }: {
  icon: React.ReactNode; title: string; description: string; visual: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-[#f1e8e3] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#fde8d8] hover:shadow-warm">
      <div className="flex-1">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdf3ee] text-[#c4522a]">
          {icon}
        </div>
        <h3 className="mt-4 text-[16px] font-[600] text-[#1c1209]">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6b5e53]">{description}</p>
      </div>
      {visual}
    </div>
  );
}
