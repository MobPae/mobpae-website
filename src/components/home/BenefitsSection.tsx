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
    icon: <Zap size={18} />,
    title: "Fast Approval",
    description: "Quick employer-driven review process with minimal friction.",
  },
  {
    icon: <Building2 size={18} />,
    title: "Employer Controlled",
    description: "Define limits, policies and approval workflows your way.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "No Credit Checks",
    description: "No CIBIL checks or traditional loan underwriting.",
  },
  {
    icon: <Eye size={18} />,
    title: "Transparent Workflow",
    description: "Full visibility from request to repayment.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Visual */}
          <div>
            <div className="rounded-[36px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm">
              <div className="flex flex-col items-center">
                {/* Employer */}
                <div className="w-full max-w-[260px] rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <Building2 size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-950">Employer</h4>

                      <p className="text-sm text-slate-600">
                        Sets policies & approvals
                      </p>
                    </div>
                  </div>
                </div>

                <ArrowDown className="my-4 text-blue-500" size={26} />

                {/* MobPae */}
                <div className="w-full max-w-[320px] rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-center text-white shadow-xl shadow-blue-200">
                  <h4 className="text-2xl font-bold">MobPae</h4>

                  <p className="mt-2 text-sm text-blue-100">
                    Salary access platform
                    <br />
                    with complete visibility
                  </p>
                </div>

                <ArrowDown className="my-4 text-blue-500" size={26} />

                {/* Employee */}
                <div className="w-full max-w-[260px] rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <User size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-950">Employee</h4>

                      <p className="text-sm text-slate-600">
                        Access earned salary
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlights */}
                <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-950">
                      Employer Backed
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Approval remains under employer control.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-950">
                      Financial Wellness
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Reduce employee financial stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Why Choose MobPae?
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950">
              Built for employers,
              <br />
              designed for employees.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-800">
              MobPae helps organizations support employee financial wellness
              while maintaining complete visibility, governance and control over
              the salary access process.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="mt-1 text-blue-600">
                    <CheckCircle2 size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-slate-700">{benefit.description}</p>
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
