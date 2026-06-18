import { Activity, ArrowRight, BadgeCheck, Database, Eye, FileCheck2, KeyRound, LockKeyhole, ShieldCheck, UserCheck } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const trustLayers = [
  {
    icon: <KeyRound size={22} />,
    title: "Session security",
    body: "JWT access tokens, refresh rotation, logout, password-change session invalidation and single-session enforcement protect account access.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Identity checks",
    body: "KYC documents, bank verification and selfie status support a safer employee onboarding flow before salary requests.",
  },
  {
    icon: <Activity size={22} />,
    title: "Audit trail",
    body: "Important auth and business actions are captured so admin, employer and employee flows remain traceable.",
  },
  {
    icon: <Database size={22} />,
    title: "Data boundaries",
    body: "Role-based access keeps employees, employers and admins scoped to the information they need to operate.",
  },
];

const proofPoints = ["Employer approval before admin disbursal", "KYC, bank and selfie checks before completion", "Payroll recovery and settlement visibility", "Notifications and audit logs for key events"];

export function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-emerald-100">
        <div className="pointer-events-none absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-24 h-[460px] w-[460px] rounded-full bg-cyan-100/80 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <ShieldCheck size={14} className="text-emerald-700" />
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">Security & trust</span>
              </div>
              <h1 className="mt-6 max-w-[680px] text-[48px] font-[900] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[76px]">
                Built for sensitive salary workflows.
              </h1>
              <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-slate-600">
                MobPae handles employee identity, bank details, salary access requests and repayment records. The product is designed around verification, role boundaries and auditability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/privacy-policy" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-emerald-700">
                  Read privacy policy <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/for-employers" className="inline-flex h-14 items-center justify-center rounded-full border border-emerald-200 bg-white/86 px-6 text-[14px] font-[900] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-emerald-800">
                  For employers
                </a>
              </div>
            </div>

            <div className="rounded-[40px] border border-white bg-white/84 p-5 shadow-soft backdrop-blur-xl">
              <div className="rounded-[32px] bg-slate-950 p-6 text-white">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-[900] uppercase tracking-[0.14em] text-emerald-100/60">Trust architecture</p>
                    <h2 className="mt-3 text-[32px] font-[900] leading-tight tracking-[-0.05em]">Every request passes through checks.</h2>
                  </div>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-emerald-400/15 text-emerald-200">
                    <LockKeyhole size={27} />
                  </div>
                </div>
                <div className="mt-7 grid gap-3">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-3">
                      <FileCheck2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-300" />
                      <p className="text-[13px] font-[800] leading-relaxed text-white/76">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-emerald-700">Trust layers</p>
            <h2 className="mt-4 text-[40px] font-[900] leading-[1] tracking-[-0.05em] text-slate-950 lg:text-[62px]">
              Practical controls for MVP and beyond.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {trustLayers.map((layer) => (
              <article key={layer.title} className="rounded-[32px] border border-emerald-100 bg-[#f8faf7] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-13 w-13 h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-[900] tracking-[-0.04em] text-slate-950">{layer.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-slate-600">{layer.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf7] py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-3">
          <TrustMetric icon={<BadgeCheck size={22} />} value="Not a loan-first flow" label="Access is based on earned salary and employer policy." />
          <TrustMetric icon={<Eye size={22} />} value="Visible deductions" label="Employees can see repayment and recovery expectations." />
          <TrustMetric icon={<ShieldCheck size={22} />} value="Approval gates" label="Employer and admin checks reduce unmanaged payouts." />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TrustMetric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-[34px] border border-emerald-100 bg-white p-6 shadow-soft">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-[25px] font-[900] leading-tight tracking-[-0.05em] text-slate-950">{value}</h3>
      <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">{label}</p>
    </div>
  );
}
