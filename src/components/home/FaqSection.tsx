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
    <section id="faq" className="relative overflow-hidden bg-[#faf7f5] pb-32 pt-20">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#c4522a]/5 blur-[70px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-56 w-56 rounded-full bg-[#fde8d8]/60 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">
              Quick Answers
            </span>
          </div>

          <h2 className="mt-7 text-[40px] font-[800] tracking-[-0.03em] leading-[1.1] text-slate-950 lg:text-[48px]">
            Everything you need to know
          </h2>

          <a
            href="#contact"
            className="mt-3 inline-block font-serif italic text-[40px] font-[400] text-[#c4522a] hover:text-[#a8411f] transition-colors lg:text-[48px]"
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
              className="group rounded-2xl border border-[#f1e8e3] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fde8d8] hover:shadow-warm"
            >
              {/* Icon box */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3ee] text-[#c4522a] transition-all duration-300 group-hover:bg-[#c4522a] group-hover:text-white group-hover:shadow-terracotta">
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

      {/* ── Wave divider — into white ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 70 }}
        >
          <path
            d="M0,40 C360,0 1080,70 1440,30 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
