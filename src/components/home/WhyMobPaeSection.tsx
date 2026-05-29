import { Building2, ShieldCheck, Zap, Users } from "lucide-react";

export function WhyMobPaeSection() {
  return (
    <section
      id="why-mobpae"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-16"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Why MobPae Exists
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 lg:text-6xl">
              Financial support,
              <br />
              when it matters most.
            </h2>

            <div className="mt-8 max-w-xl space-y-4">
              <p className="text-base leading-8 text-slate-800">
                Financial emergencies don't wait for payday.
              </p>

              <p className="text-base leading-8 text-slate-800">
                MobPae helps employees access earned salary through an
                employer-backed process that maintains visibility, governance
                and trust.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-700">
                Built for employees and employers alike
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Pill
                icon={<Building2 size={14} />}
                label="Employer Backed"
                color="blue"
              />

              <Pill
                icon={<ShieldCheck size={14} />}
                label="No Credit Checks"
                color="emerald"
              />

              <Pill
                icon={<Zap size={14} />}
                label="Fast Approval"
                color="amber"
              />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div>
            <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-[#EAF2FF] via-[#F8FBFF] to-[#EDF5FF] p-8">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />

              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />

              {/* FEATURE HIGHLIGHTS */}
              <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatCard title="24 Hours" subtitle="Typical Approval" />

                  <StatCard title="100%" subtitle="Employer Controlled" />

                  <StatCard title="0" subtitle="Credit Checks" />
                </div>
              </div>

              {/* FLOW */}
              <div className="mt-10 rounded-3xl bg-gradient-to-b from-white to-blue-50/50 p-8 shadow-sm">
                <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  {/* Employee */}
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                      <Users size={30} className="text-blue-600" />
                    </div>

                    <h4 className="mt-4 font-bold text-slate-900">Employee</h4>

                    <p className="mt-1 text-xs text-slate-600">
                      Earned salary access
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-center text-2xl font-bold text-blue-500">
                    →
                  </div>

                  {/* MobPae */}
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-600/20">
                      {/* <span className="text-3xl font-bold text-white">M</span> */}
                      <span className="text-2xl font-bold text-white">MP</span>
                    </div>

                    <h4 className="mt-4 font-bold text-slate-900">MobPae</h4>

                    <p className="mt-1 text-xs text-slate-600">
                      Salary access platform
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-center text-2xl font-bold text-blue-500">
                    →
                  </div>

                  {/* Employer */}
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                      <Building2 size={30} className="text-blue-600" />
                    </div>

                    <h4 className="mt-4 font-bold text-slate-900">Employer</h4>

                    <p className="mt-1 text-xs text-slate-600">
                      Visibility & control
                    </p>
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
      <p className="text-3xl font-black text-blue-600">{title}</p>

      <p className="mt-1 text-xs font-medium text-slate-700">{subtitle}</p>
    </div>
  );
}

function Pill({
  label,
  color,
  icon,
}: {
  label: string;
  color: "blue" | "emerald" | "amber" | "violet";
  icon: React.ReactNode;
}) {
  const styles = {
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    violet: "bg-violet-100 text-violet-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 shadow-sm text-sm font-semibold ${styles[color]}`}
    >
      {icon}
      {label}
    </span>
  );
}
