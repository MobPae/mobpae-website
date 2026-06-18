import { Zap, Building2, ShieldCheck, Eye } from "lucide-react";
import { useInView } from "../../hooks/useInView";

export function BenefitsSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="benefits"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#f8faf7] pt-20 pb-24"
    >
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ecfdf5]/70 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className={`reveal ${inView ? "in-view" : ""}`}>
          <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#10b981]">Why Choose Us</p>
          <div className="mt-2 h-0.5 w-10 bg-[#10b981]" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">

          {/* Left column */}
          <div className={`flex flex-col gap-6 reveal delay-100 ${inView ? "in-view" : ""}`}>

            {/* Fast Approval card */}
            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-5">
                {/* Clock graphic */}
                <div className="relative flex-shrink-0 h-28 w-28">
                  <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at center, #d1fae5 0%, #f8faf7 70%)", border: "2px solid #bbf7d0" }} />
                  <div className="absolute inset-3 rounded-full border border-[#bbf7d0]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute h-8 w-0.5 rounded-full bg-[#0f172a]/60 origin-bottom" style={{ bottom: "50%", left: "calc(50% - 1px)", transform: "rotate(30deg)" }} />
                    <div className="absolute h-10 w-0.5 rounded-full bg-[#10b981] origin-bottom" style={{ bottom: "50%", left: "calc(50% - 1px)", transform: "rotate(150deg)" }} />
                    <div className="h-3 w-3 rounded-full bg-[#10b981] z-10" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ecfdf5]">
                    <Zap size={16} className="text-[#10b981]" />
                  </div>
                  <h3 className="mt-3 text-[20px] font-[600] text-[#0f172a]">Fast Approval</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-[#64748b]">
                    Get approved in minutes, not days. Access your earned wages when you need them.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-0 border-t border-[#e2e8f0] pt-5">
                {[
                  { val: "90%", label: "Approved", sub: "instantly" },
                  { val: "< 60s", label: "Approval", sub: "avg time" },
                  { val: "24/7", label: "Access", sub: "anytime" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 border-r border-[#e2e8f0] pr-4 last:border-r-0 last:pr-0 pl-4 first:pl-0">
                    <p className="text-[18px] font-[700] text-[#10b981] leading-none">{s.val}</p>
                    <p className="mt-1 text-[10px] text-[#94a3b8] leading-[1.5]">{s.label}<br/>{s.sub}</p>
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
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5]">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.3">
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
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#10b981]/40">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                </div>
              }
            />

            {/* Transparent workflow — mini chart */}
            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5]">
                  <Eye size={18} className="text-[#10b981]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] text-[#0f172a]">Transparent Workflow</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#64748b]">
                    No hidden fees, no fine print. Just clarity you can trust.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-[600] uppercase tracking-[0.12em] text-[#94a3b8]">Wage Access Activity</p>
                  <p className="text-[12px] font-[700] text-[#10b981]">₹42,850</p>
                </div>
                <svg viewBox="0 0 280 56" className="w-full" style={{ height: 56 }}>
                  <defs>
                    <linearGradient id="wChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,50 C40,46 60,38 90,30 C120,22 140,14 170,9 C200,4 230,6 280,2" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M0,50 C40,46 60,38 90,30 C120,22 140,14 170,9 C200,4 230,6 280,2 L280,56 L0,56 Z" fill="url(#wChartFill)"/>
                  <circle cx="280" cy="2" r="3.5" fill="#10b981"/>
                </svg>
                <div className="mt-1.5 flex justify-between">
                  {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                    <span key={d} className="text-[9px] text-[#94a3b8]">{d}</span>
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
    <div className="flex items-center gap-5 rounded-[28px] border border-emerald-100 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.045)] transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft">
      <div className="flex-1">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#10b981]">
          {icon}
        </div>
        <h3 className="mt-4 text-[16px] font-[600] text-[#0f172a]">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-[1.6] text-[#64748b]">{description}</p>
      </div>
      {visual}
    </div>
  );
}
