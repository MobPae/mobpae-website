import { useInView } from "../../hooks/useInView";

const FEATURES = [
  "Up to 12 salary advances per year",
  "Funds disbursed within 24 hours",
  "Employer-backed approval flow",
  "Auto-repayment from next payroll",
  "Full advance history in-app",
  "Dedicated employee support",
];

function Check() {
  return (
    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#c4522a]/12">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5L5 9L9.5 3.5"
          stroke="#c4522a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function PricingSection() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [cardRef, cardInView] = useInView(0.12);

  return (
    <section
      id="pricing"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-white pt-20 pb-24"
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#c4522a]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-[#c4522a]/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className={`text-center reveal ${sectionInView ? "in-view" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">
              Pricing
            </span>
          </div>

          <h2
            className="mt-5 font-[700] leading-[1.05] tracking-[-0.02em] text-[#1c1209]"
            style={{ fontSize: "clamp(36px, 4.5vw, 52px)" }}
          >
            One plan.{" "}
            <span className="text-[#c4522a]">Full access.</span>
          </h2>

          <p className={`mt-4 mx-auto max-w-[440px] text-[15px] leading-[1.8] text-[#9e8f85] reveal delay-150 ${sectionInView ? "in-view" : ""}`}>
            No tiers, no hidden charges, no surprises. One flat annual fee gives employees complete access to MobPae.
          </p>
        </div>

        {/* Pricing card */}
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`mt-14 mx-auto max-w-[520px] reveal-scale ${cardInView ? "in-view" : ""}`}
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)]">

            {/* Orange top bar */}
            <div className="h-[3px] bg-[#c4522a]" />

            <div className="px-8 pt-8 pb-9 sm:px-10">

              {/* Plan badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fdf3ee] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#c4522a]">
                  MobPae Premium Plan
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-end gap-3">
                <span
                  className="font-[700] leading-none tracking-tight text-[#1c1209]"
                  style={{ fontSize: "clamp(56px, 8vw, 76px)" }}
                >
                  ₹499
                </span>
                <div className="mb-2 pb-0.5">
                  <p className="text-[15px] font-[500] text-[#9e8f85] leading-none">/ year</p>
                  <p className="mt-1 text-[11px] text-[#c8bab3]">per employee</p>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-[1.75] text-[#6b5e53]">
                Pay once a year. Access your earned salary up to{" "}
                <strong className="font-[600] text-[#1c1209]">12 times</strong> — whenever you need it.
              </p>

              <div className="my-6 h-px bg-[#f1e8e3]" />

              {/* Feature list */}
              <ul className="space-y-3.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13.5px] text-[#1c1209]">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Mandatory note */}
              <div className="mt-7 rounded-2xl border border-[#e8ddd4] bg-[#faf6f1] px-5 py-4">
                <p className="text-[12.5px] font-[600] text-[#1c1209]">
                  Required for all employees
                </p>
                <p className="mt-1 text-[12px] leading-[1.7] text-[#6b5e53]">
                  MobPae membership is mandatory to access salary advances. There is no free plan — every employee gets the full experience from day one.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#c4522a] py-3.5 text-[14px] font-[600] text-white transition-all hover:bg-[#a8411f] hover:-translate-y-px"
                style={{ boxShadow: "0 8px 24px rgba(196,82,42,0.30)" }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className={`mt-10 text-center text-[12.5px] text-[#6b5e53] reveal delay-200 ${sectionInView ? "in-view" : ""}`}>
          Employers are billed separately for platform access.{" "}
          <a href="#contact" className="text-[#c4522a] underline underline-offset-3 hover:text-[#d95a2e]">
            Contact us
          </a>{" "}
          for employer pricing.
        </p>
      </div>

      {/* Wave → FAQ (cream) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z" fill="#faf6f1" />
        </svg>
      </div>
    </section>
  );
}
