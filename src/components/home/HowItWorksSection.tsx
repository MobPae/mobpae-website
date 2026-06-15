import { User, Building2, Wallet, CalendarDays } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#1c1209] pb-32 pt-20">

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #c4522a 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c4522a]/10 blur-[90px]" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-64 w-64 rounded-full bg-[#c4522a]/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c4522a]/30 bg-[#c4522a]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d95a2e]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#d95a2e]">
              How It Works
            </span>
          </div>

          <h2 className="mt-7 text-[40px] font-[600] leading-[1.1] tracking-[-0.02em] text-white lg:text-[48px]">
            Simple. Transparent.
            <br />
            <span className="font-serif italic font-[400] text-[#d95a2e]">
              Employer controlled.
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.8] text-white/55">
            A structured process that gives employees financial flexibility
            while ensuring employers retain complete visibility and control.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14">
          <div className="relative grid gap-6 lg:grid-cols-4">


            <TimelineStep
              number="01"
              icon={<User size={20} />}
              title="Request Advance"
              description="Employee submits a request for earned salary access via the MobPae app."
            />
            <TimelineStep
              number="02"
              icon={<Building2 size={20} />}
              title="Employer Reviews"
              description="Employer reviews and approves according to their defined policy."
            />
            <TimelineStep
              number="03"
              icon={<Wallet size={20} />}
              title="Funds Disbursed"
              description="Approved amount is transferred to the employee's account securely."
            />
            <TimelineStep
              number="04"
              icon={<CalendarDays size={20} />}
              title="Auto Repayment"
              description="Repayment happens automatically through payroll deduction."
            />
          </div>
        </div>

        {/* Bottom strip — key proof points */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-3" style={{ background: "rgba(255,255,255,0.04)" }}>
          <Proof value="₹0" label="Interest charged" />
          <Proof value="24 hrs" label="Average approval time" />
          <Proof value="100%" label="Employer visibility" />
        </div>
      </div>

      {/* Wave into Benefits (white) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 70 }}
        >
          <path
            d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

function TimelineStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:border-[#c4522a]/40" style={{ background: "rgba(255,255,255,0.04)" }}>
      {/* Large background number */}
      <div className="pointer-events-none absolute right-3 top-1 select-none font-serif text-[72px] font-[400] leading-none text-white/70">
        {number}
      </div>

      {/* Step circle */}
      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg, #6d2514 0%, #c4522a 100%)" }}
      >
        <div className="text-white/90">{icon}</div>
      </div>

      <h3 className="mt-5 text-[15px] font-[600] text-white">{title}</h3>
      <p className="mt-2 text-[13px] leading-[1.7] text-white/50">{description}</p>
    </div>
  );
}

function Proof({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-white/8 px-8 py-6 text-center last:border-r-0">
      <p className="font-serif text-[32px] font-[400] text-[#d95a2e] leading-none">{value}</p>
      <p className="mt-2 text-[12px] font-[500] text-white/45">{label}</p>
    </div>
  );
}
