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
      className="relative overflow-hidden bg-white pt-20 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className={`text-center reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="mt-6 font-[700] leading-[1.05] tracking-[-0.02em] text-[#0f172a]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            How It Works
          </h2>
          <p className="mt-4 mx-auto max-w-[400px] text-[15px] leading-[1.8] text-[#64748b]">
            Four simple steps from request to funds in your account.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="mt-16 relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-[#e2e8f0] z-0" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6 lg:items-stretch">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col items-center text-center reveal delay-${i * 100} ${inView ? "in-view" : ""}`}
              >
                {/* Number circle */}
                <div className="relative z-10 mb-6 flex-shrink-0">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-[#e2e8f0] bg-white shadow-sm">
                    <span className="text-[13px] font-[700] text-[#10b981]">{step.num}</span>
                  </div>
                </div>

                {/* Card — flex-1 makes all cards equal height */}
                <div className="w-full flex-1 flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#d1fae5] hover:shadow-soft">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#10b981]">
                    {step.icon}
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#0f172a]">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#64748b]">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Wave → Benefits */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z" fill="#f8faf7" />
        </svg>
      </div>
    </section>
  );
}
