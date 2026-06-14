import { Building2, ShieldCheck, Zap, Users } from "lucide-react";

export function WhyMobPaeSection() {
  return (
    <section
      id="why-mobpae"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#ddeeff]/40 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#f0f5ff]/60 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f0f5ff] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0047AB]" />
              <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#0047AB]">
                Why MobPae Exists
              </span>
            </div>

            <h2 className="mt-7 text-[40px] font-[800] leading-[1.15] tracking-[-0.03em] text-slate-950 lg:text-[50px]">
              Financial support,
              <br />
              <span className="font-serif italic font-[400] text-[#007FFF]">
                when it matters most.
              </span>
            </h2>

            <div className="mt-7 max-w-[420px] space-y-4">
              <p className="text-[15px] leading-[1.8] text-slate-600">
                Financial emergencies don't wait for payday.
              </p>
              <p className="text-[15px] leading-[1.8] text-slate-600">
                MobPae helps employees access earned salary through an
                employer-backed process that maintains visibility, governance
                and trust.
              </p>
            </div>

            <p className="mt-6 text-[13px] font-[600] uppercase tracking-[0.1em] text-slate-400">
              Built for employees and employers alike
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill icon={<Building2 size={13} />} label="Employer Backed" color="blue" />
              <Pill icon={<ShieldCheck size={13} />} label="No Credit Checks" color="emerald" />
              <Pill icon={<Zap size={13} />} label="Fast Approval" color="amber" />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-[#f0f5ff] via-white to-[#ddeeff]/40 p-7 shadow-soft">
              {/* Stats row */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatCard title="24 hrs" subtitle="Typical Approval" />
                  <StatCard title="100%" subtitle="Employer Controlled" />
                  <StatCard title="0" subtitle="Credit Checks" />
                </div>
              </div>

              {/* Flow diagram */}
              <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm">
                <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  {/* Employee */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f5ff]">
                      <Users size={26} className="text-[#0047AB]" />
                    </div>
                    <h4 className="mt-3 text-[13px] font-[700] text-slate-900">Employee</h4>
                    <p className="mt-0.5 text-[11px] text-slate-500">Earned salary access</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center text-[#007FFF] text-xl font-bold">→</div>

                  {/* MobPae */}
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0047AB] shadow-cobalt">
                      <span className="text-[16px] font-[800] text-white">MP</span>
                    </div>
                    <h4 className="mt-3 text-[13px] font-[700] text-slate-900">MobPae</h4>
                    <p className="mt-0.5 text-[11px] text-slate-500">Salary access platform</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center text-[#007FFF] text-xl font-bold">→</div>

                  {/* Employer */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f5ff]">
                      <Building2 size={26} className="text-[#0047AB]" />
                    </div>
                    <h4 className="mt-3 text-[13px] font-[700] text-slate-900">Employer</h4>
                    <p className="mt-0.5 text-[11px] text-slate-500">Visibility & control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="font-serif text-[28px] font-[400] tracking-tight text-[#0047AB]">{title}</p>
      <p className="mt-1 text-[11px] font-[500] text-slate-500">{subtitle}</p>
    </div>
  );
}

function Pill({
  label,
  color,
  icon,
}: {
  label: string;
  color: "blue" | "emerald" | "amber";
  icon: React.ReactNode;
}) {
  const styles = {
    blue:    "bg-blue-50 text-[#0047AB] border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber:   "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-[600] ${styles[color]}`}
    >
      {icon}
      {label}
    </span>
  );
}
