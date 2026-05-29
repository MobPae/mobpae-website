import { Building2, Eye, ShieldCheck, HeartHandshake } from "lucide-react";

const quickAnswers = [
  {
    icon: <ShieldCheck size={24} />,
    title: "No Credit Checks",
    description:
      "MobPae is not a traditional loan product. No CIBIL checks or complex underwriting.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Employer Controlled",
    description:
      "Employers define limits, approval workflows and policies with complete visibility.",
  },
  {
    icon: <Eye size={24} />,
    title: "Transparent Workflow",
    description:
      "Track requests, approvals, disbursals and repayments through a structured process.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Employee Financial Wellness",
    description:
      "Help employees manage short-term financial needs without stress or awkward borrowing.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Answers
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-800">
            Built for employers who want to support employees without losing
            visibility, governance or control.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quickAnswers.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
