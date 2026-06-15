import { Building2, Eye, ShieldCheck, HeartHandshake } from "lucide-react";

const quickAnswers = [
  {
    icon: <ShieldCheck size={24} />,
    title: "No Credit Checks",
    description:
      "MobPae is not a traditional loan product. No CIBIL checks or complex underwriting involved.",
    accent: true,
  },
  {
    icon: <Building2 size={24} />,
    title: "Employer Controlled",
    description:
      "Employers define limits, approval workflows and policies with complete visibility.",
    accent: false,
  },
  {
    icon: <Eye size={24} />,
    title: "Transparent Workflow",
    description:
      "Track requests, approvals, disbursals and repayments through a structured, auditable process.",
    accent: false,
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Employee Wellness",
    description:
      "Help employees manage short-term financial needs without stress or awkward borrowing.",
    accent: true,
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#faf7f5] pb-32 pt-20">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#c4522a]/5 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-64 w-64 rounded-full bg-[#fde8d8]/70 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">
              Quick Answers
            </span>
          </div>

          <h2 className="mt-5 text-[40px] font-[600] tracking-[-0.02em] leading-[1.1] text-[#1c1209] lg:text-[46px]">
            Everything you need to know
          </h2>

          <a
            href="#contact"
            className="mt-1 inline-block font-serif italic text-[40px] font-[400] text-[#c4522a] hover:text-[#a8411f] transition-colors lg:text-[46px]"
          >
            Get in Touch with us.
          </a>

          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-[1.8] text-[#6b5e53]">
            Built for employers who want to support employees without losing
            visibility, governance or control.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quickAnswers.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                item.accent
                  ? "border-[#e8d5c8] bg-[#fdf3ee]"
                  : "border-[#f1e8e3] bg-white hover:border-[#fde8d8]"
              }`}
            >
              {/* Decorative circle — top right */}
              {item.accent && (
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#c4522a]/8" />
              )}

              {/* Icon box */}
              <div
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-[#c4522a] group-hover:text-white ${
                  item.accent
                    ? "bg-[#fde8d8] text-[#c4522a]"
                    : "bg-[#fdf3ee] text-[#c4522a]"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-[15px] font-[600] text-[#1c1209]">
                {item.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.75] text-[#6b5e53]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider — into white (Enquiry section) */}
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
