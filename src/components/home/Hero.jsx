import { ArrowRight, Play } from "lucide-react";
import { useMemo } from "react";

/**
 * Generates an array of line descriptors radiating outward from center.
 * Each line has a unique angle, length, and staggered animation delay
 * to create a dynamic sunburst/starburst ripple effect.
 */
function useRadialLines(count = 64) {
  return useMemo(() => {
    const lines = [];
    const angleStep = 360 / count;

    for (let i = 0; i < count; i++) {
      const angle = i * angleStep;
      // Vary length so the pattern feels organic and covers full width
      const length = 600 + Math.sin(i * 0.7) * 150 + Math.cos(i * 1.3) * 80;
      // Inner gap so lines don't crowd the center text
      const innerRadius = 240 + Math.sin(i * 0.9) * 40;
      // Stagger delay — spiral wave pattern for "coming outward" feel
      const delay = (i % 24) * 0.08;

      lines.push({ angle, length, innerRadius, delay, index: i });
    }
    return lines;
  }, [count]);
}

export function Hero() {
  const lines = useRadialLines(64);

  return (
    <section className="hero-figma-section relative isolate overflow-hidden">
      {/* ── Animated radial background lines (SVG) ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg
          className="hero-lines-svg"
          viewBox="-1000 -1000 2000 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ width: "100%", height: "100%", maxWidth: "none", maxHeight: "none" }}
          preserveAspectRatio="xMidYMid slice"
        >
          {lines.map((line) => {
            const rad = (line.angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * line.innerRadius;
            const y1 = Math.sin(rad) * line.innerRadius;
            const x2 = Math.cos(rad) * (line.innerRadius + line.length);
            const y2 = Math.sin(rad) * (line.innerRadius + line.length);

            return (
              <line
                key={line.index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#5B3CE3"
                strokeWidth="1.2"
                strokeLinecap="round"
                className="hero-radial-line"
                style={{
                  "--line-delay": `${line.delay}s`,
                  "--line-len": `${Math.round(line.length)}`,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* ── Soft gradient overlays to fade edges ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#FAF9F6_72%)]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center sm:px-6 lg:py-32">
        
        {/* Aesthetic Glow Behind Text */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,#B8ACFF_0%,#FEA1A2_33%,#9FD7DD_66%,#B8ACFF_100%)] opacity-20 blur-[100px]" />

        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-[#F0EDFF] px-4 py-1.5 text-[12px] font-[700] uppercase tracking-[0.18em] text-[#5B3CE3]">
            Mobpae Salary Access
          </span>
        </div>

        <h1 className="mx-auto max-w-[920px] figma-hero-title font-[800] leading-[0.98] tracking-tighter text-[#111827]">
          Make Payday Feel
          <br />
          Like a{" "}
          <span className="hero-figma-accent relative inline-block">
            Well-Tuned
            <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-[#B8ACFF]/60 sm:-bottom-1.5 sm:h-[5px]" />
          </span>{" "}
          Engine.
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-7 max-w-[620px] text-[15px] leading-[1.85] text-[#6B7280] sm:text-[16px]">
          Empower your team with controlled, transparent salary access.
          <br className="hidden sm:block" />
          No credit checks. No loan anxiety. Just seamless payroll alignment.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex h-[52px] items-center gap-2.5 rounded-full bg-[#111827] px-7 text-[14px] font-[700] text-white shadow-[0_16px_48px_rgba(17,24,39,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937] hover:shadow-[0_20px_56px_rgba(17,24,39,0.28)]"
          >
            Start Employer Onboarding
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="/#product"
            className="group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-7 text-[14px] font-[700] text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D1D5DB] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
          >
            <Play
              size={14}
              className="text-[#111827] transition-transform duration-300 group-hover:scale-110"
              fill="#111827"
            />
            View Product Flow
          </a>
        </div>
      </div>
    </section>
  );
}
