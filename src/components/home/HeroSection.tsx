import heroMockup from "../../assets/hero-mockup.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#eff6ff,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          {/* Left */}
          <div>
            <div className="inline-flex rounded-lg border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">
                Easy. Fast. Transparent.
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
              Beating Your Month-End Crunch
              <br />
            </h1>

            <p className="mt-4 text-lg font-medium text-blue-600">
              Making it simple.
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-slate-700">
              MobPae helps employees access a portion of their earned salary
              before payday through employer-backed financial support.
            </p>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-700">
              No personal loans. No awkward borrowing. Just simple, secure and
              transparent salary access when it matters most.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src={heroMockup}
              alt="MobPae Salary Advance Platform"
              className="mx-auto w-full max-w-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
