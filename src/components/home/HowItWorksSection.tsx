import { User, Building2, Wallet, CalendarDays } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const STEPS = [
  {
    num: "01",
    icon: <User size={22} />,
    title: "Request",
    sub: "Select how much of your earned salary you need and submit — takes under a minute.",
  },
  {
    num: "02",
    icon: <Building2 size={22} />,
    title: "Approval",
    sub: "Your employer reviews the request and approves based on your pay cycle and policy.",
  },
  {
    num: "03",
    icon: <Wallet size={22} />,
    title: "Disbursed",
    sub: "Funds land in your bank account within 24 hours of approval.",
  },
  {
    num: "04",
    icon: <CalendarDays size={22} />,
    title: "Repayment",
    sub: "The amount is automatically deducted from your next salary. Nothing to do.",
  },
];

export function HowItWorksSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#faf7f5] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className={`text-center reveal ${inView ? "in-view" : ""}`}>
          <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#c4522a]">MOBPAE</p>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-[#c4522a]" />
          <h2
            className="mt-6 font-[700] leading-[1.05] tracking-[-0.02em] text-[#1c1209]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            How It Works
          </h2>
          <p className="mt-4 mx-auto max-w-[400px] text-[15px] leading-[1.8] text-[#6b5e53]">
            Four simple steps from request to funds in your account.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="mt-16 relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-[#e8ddd4] z-0" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col items-center text-center reveal delay-${i * 100} ${inView ? "in-view" : ""}`}
              >
                {/* Number circle */}
                <div className="relative z-10 mb-6">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-[#e8ddd4] bg-white shadow-sm">
                    <span className="text-[13px] font-[700] text-[#c4522a]">{step.num}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="w-full rounded-2xl border border-[#f1e8e3] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#fde8d8] hover:shadow-warm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3ee] text-[#c4522a]">
                    {step.icon}
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#1c1209]">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#6b5e53]">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className={`mt-14 rounded-2xl border border-[#f1e8e3] bg-white px-8 py-6 reveal delay-400 ${inView ? "in-view" : ""}`}>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <p className="text-[14px] font-[500] text-[#6b5e53] max-w-[480px]">
              The entire process is transparent at every step — employees and employers both get real-time visibility.
            </p>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-[12px] bg-[#c4522a] px-6 py-3 text-[13.5px] font-[600] text-white transition-all hover:bg-[#a8411f] hover:-translate-y-px"
              style={{ boxShadow: "0 6px 18px rgba(196,82,42,0.24)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Wave → Benefits */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
