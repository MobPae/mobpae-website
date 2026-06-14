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
    <section id="benefits" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Visual */}
          <div>
            <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-[#f0f5ff] via-white to-[#ddeeff]/30 p-8 shadow-soft">
              <div className="flex flex-col items-center">
                {/* Employer card */}
                <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5ff]">
                      <Building2 size={22} className="text-[#0047AB]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-[700] text-slate-900">Employer</h4>
                      <p className="text-[12px] text-slate-500">Sets policies & approvals</p>
                    </div>
                  </div>
                </div>

                <ArrowDown className="my-4 text-[#007FFF]" size={22} />

                {/* MobPae card */}
                <div className="w-full max-w-[320px] rounded-2xl bg-[#0047AB] p-6 text-center shadow-cobalt">
                  <h4 className="font-serif text-[26px] font-[400] text-white">MobPae</h4>
                  <p className="mt-2 text-[12.5px] text-blue-200 leading-relaxed">
                    Salary access platform
                    <br />
                    with complete visibility
                  </p>
                </div>

                <ArrowDown className="my-4 text-[#007FFF]" size={22} />

                {/* Employee card */}
                <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5ff]">
                      <User size={22} className="text-[#0047AB]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-[700] text-slate-900">Employee</h4>
                      <p className="text-[12px] text-slate-500">Access earned salary</p>
                    </div>
                  </div>
                </div>

                {/* Bottom highlights */}
                <div className="mt-6 grid w-full gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                    <p className="text-[13px] font-[600] text-slate-900">Employer Backed</p>
                    <p className="mt-1 text-[11.5px] text-slate-500 leading-relaxed">
                      Approval remains under employer control.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                    <p className="text-[13px] font-[600] text-slate-900">Financial Wellness</p>
                    <p className="mt-1 text-[11.5px] text-slate-500 leading-relaxed">
                      Reduce employee financial stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f0f5ff] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0047AB]" />
              <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#0047AB]">
                Why Choose MobPae?
              </span>
            </div>

            <h2 className="mt-7 text-[40px] font-[800] leading-[1.15] tracking-[-0.03em] text-slate-950 lg:text-[48px]">
              Built for employers,
              <br />
              <span className="font-serif italic font-[400] text-[#007FFF]">
                designed for employees.
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.8] text-slate-600">
              MobPae helps organizations support employee financial wellness
              while maintaining complete visibility, governance and control over
              the salary access process.
            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="mt-0.5 text-[#0047AB] flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[700] text-slate-900">{benefit.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-[1.7] text-slate-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
