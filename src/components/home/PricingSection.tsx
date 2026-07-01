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
    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5B3CE3]/12">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5L5 9L9.5 3.5"
          stroke="#5B3CE3"
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
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#5B3CE3]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-[#5B3CE3]/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className={`text-center reveal ${sectionInView ? "in-view" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0EDFF] bg-[#F7F7FF] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5B3CE3]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#5B3CE3]">
              Pricing
            </span>
          </div>

          <h2
            className="mt-5 text-[36px] font-[700] leading-[1.08] tracking-tighter text-[#111827] lg:text-[48px]"
          >
            One plan.{" "}
            <span className="text-[#5B3CE3]">Full access.</span>
          </h2>

          <p className={`mt-4 mx-auto max-w-[440px] text-[15px] leading-[1.8] text-[#8D90A3] reveal delay-150 ${sectionInView ? "in-view" : ""}`}>
            No tiers, no hidden charges, no surprises. One flat annual fee gives employees complete access to MobPae.
          </p>
        </div>

        {/* Pricing card */}
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`mt-14 mx-auto max-w-[520px] reveal-scale ${cardInView ? "in-view" : ""}`}
        >
          <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_32px_90px_rgba(36,38,95,0.16)]">

            <div className="h-[4px] bg-gradient-to-r from-[#B8ACFF] via-[#5B3CE3] to-[#4E32CA]" />

            <div className="px-8 pt-8 pb-9 sm:px-10">

              {/* Plan badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F7FF] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B3CE3]" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#5B3CE3]">
                  MobPae Premium Plan
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-end gap-3">
                <span className="text-[56px] font-[700] leading-none tracking-tighter text-[#111827] sm:text-[68px]">
                  ₹499
                </span>
                <div className="mb-2 pb-0.5">
                  <p className="text-[15px] font-[500] text-[#8D90A3] leading-none">/ year</p>
                  <p className="mt-1 text-[11px] text-[#cbd5e1]">per employee</p>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-[1.75] text-[#6B7280]">
                Pay once a year. Access your earned salary up to{" "}
                <strong className="font-[600] text-[#111827]">12 times</strong> — whenever you need it.
              </p>

              <div className="my-6 h-px bg-[#E5E6EE]" />

              {/* Feature list */}
              <ul className="space-y-3.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13.5px] text-[#111827]">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Mandatory note */}
              <div className="mt-7 rounded-2xl border border-[#E5E6EE] bg-[#F8F9FC] px-5 py-4">
                <p className="text-[12.5px] font-[600] text-[#111827]">
                  Required for all employees
                </p>
                <p className="mt-1 text-[12px] leading-[1.7] text-[#6B7280]">
                  MobPae membership is mandatory to access salary advances. There is no free plan — every employee gets the full experience from day one.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#5B3CE3] to-[#4E32CA] py-3.5 text-[14px] font-[600] text-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(91,60,227,0.26)]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className={`mt-10 text-center text-[12.5px] text-[#6B7280] reveal delay-200 ${sectionInView ? "in-view" : ""}`}>
          Employers are billed separately for platform access.{" "}
          <a href="#contact" className="text-[#5B3CE3] underline underline-offset-3 hover:text-[#9787FF]">
            Contact us
          </a>{" "}
          for employer pricing.
        </p>
      </div>

      {/* Wave → FAQ */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z" fill="#F8F9FC" />
        </svg>
      </div>
    </section>
  );
}
