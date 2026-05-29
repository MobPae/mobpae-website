import { User, Building2, Wallet, CalendarDays } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              How It Works
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 lg:text-6xl">
            Simple. Transparent.
            <br />
            Employer controlled.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-800">
            A structured process that gives employees financial flexibility
            while ensuring employers retain complete visibility and control.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <div className="rounded-[36px] border border-white bg-white p-8 shadow-lg shadow-slate-200/50 lg:p-10">
            <div className="relative">
              {/* Desktop Line */}
              <div className="absolute left-0 right-0 top-8 hidden h-[3px] bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 lg:block" />

              <div className="grid gap-8 lg:grid-cols-4">
                <TimelineStep
                  number="01"
                  icon={<User size={26} />}
                  title="Request Advance"
                  description="Employee submits a request for earned salary access."
                />

                <TimelineStep
                  number="02"
                  icon={<Building2 size={26} />}
                  title="Request Review"
                  description="Request is reviewed according to employer policy."
                />

                <TimelineStep
                  number="03"
                  icon={<Wallet size={26} />}
                  title="Funds Disbursed"
                  description="Approved amount is transferred securely."
                />

                <TimelineStep
                  number="04"
                  icon={<CalendarDays size={26} />}
                  title="Auto Repayment"
                  description="Repayment happens through payroll deduction."
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
      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
        {number}
      </div>

      <div className="mt-5 flex justify-center text-blue-600">{icon}</div>

      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}
