import { Building2, Eye, ShieldCheck, HeartHandshake } from "lucide-react";

const quickAnswers = [
  {
    icon: <ShieldCheck size={22} />,
    title: "No Credit Checks",
    description:
      "MobPae is not a traditional loan product. No CIBIL checks or complex underwriting involved.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Employer Controlled",
    description:
      "Employers define limits, approval workflows and policies with complete visibility.",
  },
  {
    icon: <Eye size={22} />,
    title: "Transparent Workflow",
    description:
      "Track requests, approvals, disbursals and repayments through a structured, auditable process.",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Employee Financial Wellness",
    description:
      "Help employees manage short-term financial needs without stress or awkward borrowing.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f0f5ff] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0047AB]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#0047AB]">
              Quick Answers
            </span>
          </div>

          <h2 className="mt-7 text-[40px] font-[800] tracking-[-0.03em] leading-[1.1] text-slate-950 lg:text-[48px]">
            Everything you need to know
          </h2>

          <a
            href="#contact"
            className="mt-3 inline-block font-serif italic text-[40px] font-[400] text-[#007FFF] hover:text-[#0047AB] transition-colors lg:text-[48px]"
          >
            Get in Touch with us.
          </a>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-slate-600">
            Built for employers who want to support employees without losing
            visibility, governance or control.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quickAnswers.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-soft"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5ff] text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="mt-5 text-[15px] font-[700] text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.75] text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
