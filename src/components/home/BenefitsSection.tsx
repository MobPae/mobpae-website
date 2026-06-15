import {
  ArrowDown,
  Building2,
  CheckCircle2,
  Eye,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: <Zap size={16} />,
    title: "Fast Approval",
    description: "Quick employer-driven review process with minimal friction.",
  },
  {
    icon: <Building2 size={16} />,
    title: "Employer Controlled",
    description: "Define limits, policies and approval workflows your way.",
  },
  {
    icon: <ShieldCheck size={16} />,
    title: "No Credit Checks",
    description: "No CIBIL checks or traditional loan underwriting.",
  },
  {
    icon: <Eye size={16} />,
    title: "Transparent Workflow",
    description: "Full visibility from request to repayment.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-white pb-32 pt-20">

      {/* Decorative blob */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fdf3ee]/80 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Left Visual */}
          <div>
            <div className="rounded-[28px] border border-[#fde8d8] bg-gradient-to-br from-[#fdf3ee] via-white to-[#fde8d8]/30 p-8 shadow-soft relative overflow-hidden">
              {/* Decorative bg circle */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#c4522a]/5" />

              <div className="flex flex-col items-center">
                {/* Employer card */}
                <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-sm border border-[#f1e8e3]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3ee]">
                      <Building2 size={22} className="text-[#c4522a]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-[700] text-[#1c1209]">Employer</h4>
                      <p className="text-[12px] text-[#6b5e53]">Sets policies & approvals</p>
                    </div>
                  </div>
                </div>

                <ArrowDown className="my-4 text-[#c4522a]" size={22} />

                {/* MobPae card */}
                <div
                  className="w-full max-w-[320px] rounded-2xl p-6 text-center shadow-terracotta relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #6d2514 0%, #c4522a 60%, #a8411f 100%)",
                  }}
                >
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/5" />
                  <h4 className="font-serif text-[26px] font-[400] text-white">MobPae</h4>
                  <p className="mt-2 text-[12.5px] text-[#fde8d8]/80 leading-relaxed">
                    Salary access platform
                    <br />
                    with complete visibility
                  </p>
                </div>

                <ArrowDown className="my-4 text-[#c4522a]" size={22} />

                {/* Employee card */}
                <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-sm border border-[#f1e8e3]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3ee]">
                      <User size={22} className="text-[#c4522a]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-[700] text-[#1c1209]">Employee</h4>
                      <p className="text-[12px] text-[#6b5e53]">Access earned salary</p>
                    </div>
                  </div>
                </div>

                {/* Bottom highlights */}
                <div className="mt-6 grid w-full gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#f1e8e3]">
                    <p className="text-[13px] font-[600] text-[#1c1209]">Employer Backed</p>
                    <p className="mt-1 text-[11.5px] text-[#6b5e53] leading-relaxed">
                      Approval remains under employer control.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#f1e8e3]">
                    <p className="text-[13px] font-[600] text-[#1c1209]">Financial Wellness</p>
                    <p className="mt-1 text-[11.5px] text-[#6b5e53] leading-relaxed">
                      Reduce employee financial stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
              <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">
                Why Choose MobPae?
              </span>
            </div>

            <h2 className="mt-7 text-[40px] font-[600] leading-[1.1] tracking-[-0.02em] text-[#1c1209] lg:text-[46px]">
              Built for employers,
              <br />
              <span className="font-serif italic font-[400] text-[#c4522a]">
                designed for employees.
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.8] text-[#6b5e53]">
              MobPae helps organizations support employee financial wellness
              while maintaining complete visibility, governance and control over
              the salary access process.
            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="mt-0.5 text-[#c4522a] flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[600] text-[#1c1209]">{benefit.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-[1.7] text-[#6b5e53]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave divider — into warm bg ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 70 }}
        >
          <path
            d="M0,20 C480,70 960,0 1440,50 L1440,70 L0,70 Z"
            fill="#faf7f5"
          />
        </svg>
      </div>
    </section>
  );
}
