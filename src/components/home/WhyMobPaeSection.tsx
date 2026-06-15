import { Building2, ShieldCheck, Zap } from "lucide-react";

export function WhyMobPaeSection() {
  return (
    <section
      id="why-mobpae"
      className="relative overflow-hidden bg-white pb-32 pt-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#fde8d8]/50 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-72 w-72 rounded-full bg-[#fdf3ee]/70 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
              <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">
                Why MobPae Exists
              </span>
            </div>

            <h2 className="mt-7 text-[40px] font-[600] leading-[1.1] tracking-[-0.02em] text-[#1c1209] lg:text-[48px]">
              Financial support,
              <br />
              <span className="font-serif italic font-[400] text-[#c4522a]">
                when it matters most.
              </span>
            </h2>

            <div className="mt-7 max-w-[420px] space-y-4">
              <p className="text-[15px] leading-[1.8] text-[#6b5e53]">
                Financial emergencies don't wait for payday.
              </p>
              <p className="text-[15px] leading-[1.8] text-[#6b5e53]">
                MobPae helps employees access earned salary through an
                employer-backed process that maintains visibility, governance
                and trust.
              </p>
            </div>

            <p className="mt-6 text-[13px] font-[700] uppercase tracking-[0.14em] text-[#9e8f85]">
              Built for employees and employers alike
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill icon={<Building2 size={13} />} label="Employer Backed" color="terracotta" />
              <Pill icon={<ShieldCheck size={13} />} label="No Credit Checks" color="emerald" />
              <Pill icon={<Zap size={13} />} label="Fast Approval" color="amber" />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#fde8d8] bg-gradient-to-br from-[#fdf3ee] via-white to-[#fde8d8]/30 p-7 shadow-soft">
              {/* Decorative inner circle */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#c4522a]/5" />

              {/* Stats row */}
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-[#f1e8e3]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatCard title="24 hrs" subtitle="Typical Approval" />
                  <StatCard title="100%" subtitle="Employer Controlled" />
                  <StatCard title="0" subtitle="Credit Checks" />
                </div>
              </div>

              {/* Flow diagram */}
              <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm border border-[#f1e8e3]">
                <p className="mb-4 text-center text-[11px] font-[700] uppercase tracking-[0.16em] text-[#9e8f85]">
                  How it flows
                </p>
                <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  {/* Employee */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fdf3ee] ring-2 ring-[#fde8d8]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4522a" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <h4 className="mt-3 text-[13px] font-[600] text-[#1c1209]">Employee</h4>
                    <p className="mt-0.5 text-[11px] text-[#9e8f85]">Earned salary access</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center text-[#c4522a] text-xl font-bold">→</div>

                  {/* MobPae */}
                  <div className="text-center">
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, #6d2514 0%, #c4522a 100%)",
                      }}
                    >
                      <span className="text-[16px] font-[800] text-white">MP</span>
                    </div>
                    <h4 className="mt-3 text-[13px] font-[600] text-[#1c1209]">MobPae</h4>
                    <p className="mt-0.5 text-[11px] text-[#9e8f85]">Salary access platform</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center text-[#c4522a] text-xl font-bold">→</div>

                  {/* Employer */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fdf3ee] ring-2 ring-[#fde8d8]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4522a" strokeWidth="1.5">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      </svg>
                    </div>
                    <h4 className="mt-3 text-[13px] font-[600] text-[#1c1209]">Employer</h4>
                    <p className="mt-0.5 text-[11px] text-[#9e8f85]">Visibility & control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave divider — into warm bg ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 70 }}
        >
          <path
            d="M0,0 C360,70 1080,0 1440,55 L1440,70 L0,70 Z"
            fill="#1c1209"
          />
        </svg>
      </div>
    </section>
  );
}

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="font-serif text-[28px] font-[400] tracking-tight text-[#c4522a]">{title}</p>
      <p className="mt-1 text-[11px] font-[500] text-[#9e8f85]">{subtitle}</p>
    </div>
  );
}

function Pill({
  label,
  color,
  icon,
}: {
  label: string;
  color: "terracotta" | "emerald" | "amber";
  icon: React.ReactNode;
}) {
  const styles = {
    terracotta: "bg-[#fdf3ee] text-[#c4522a] border-[#fde8d8]",
    emerald:    "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber:      "bg-amber-50 text-amber-700 border-amber-100",
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
