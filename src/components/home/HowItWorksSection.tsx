import { User, Building2, Wallet, CalendarDays } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f0f5ff] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0047AB]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#0047AB]">
              How It Works
            </span>
          </div>

          <h2 className="mt-7 text-[40px] font-[800] leading-[1.15] tracking-[-0.03em] text-slate-950 lg:text-[50px]">
            Simple. Transparent.
            <br />
            <span className="font-serif italic font-[400] text-[#007FFF]">
              Employer controlled.
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.8] text-slate-600">
            A structured process that gives employees financial flexibility
            while ensuring employers retain complete visibility and control.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <div className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-soft lg:p-10">
            <div className="relative">
              {/* Desktop connector line */}
              <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-[2px] bg-gradient-to-r from-blue-100 via-[#007FFF]/30 to-blue-100 lg:block" />

              <div className="grid gap-10 lg:grid-cols-4">
                <TimelineStep
                  number="01"
                  icon={<User size={22} />}
                  title="Request Advance"
                  description="Employee submits a request for earned salary access via the MobPae app."
                />
                <TimelineStep
                  number="02"
                  icon={<Building2 size={22} />}
                  title="Request Review"
                  description="Employer reviews and approves according to their defined policy."
                />
                <TimelineStep
                  number="03"
                  icon={<Wallet size={22} />}
                  title="Funds Disbursed"
                  description="Approved amount is transferred to the employee's account securely."
                />
                <TimelineStep
                  number="04"
                  icon={<CalendarDays size={22} />}
                  title="Auto Repayment"
                  description="Repayment happens automatically through payroll deduction."
                />
              </div>
            </div>
          </div>
        </div>
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
    <div className="relative text-center">
      {/* Step number circle */}
      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0047AB] shadow-cobalt">
        <span className="font-serif text-[20px] font-[400] text-white leading-none">{number}</span>
      </div>

      {/* Icon */}
      <div className="mt-5 flex justify-center text-[#0047AB]">{icon}</div>

      <h3 className="mt-3 text-[15px] font-[700] text-slate-900">{title}</h3>

      <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">{description}</p>
    </div>
  );
}
