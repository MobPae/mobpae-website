import { Activity, ArrowRight, BadgeCheck, Database, Eye, FileCheck2, KeyRound, LockKeyhole, ShieldCheck, UserCheck } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

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
    <main className="relative min-h-screen bg-transparent">
      <SEO
        title="Security & Trust"
        description="MobPae is built around role-based access, identity verification, audit logs, session security and employer approval gates for sensitive salary workflows."
        path="/security"
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#E5E7EB]">

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <ShieldCheck size={14} className="text-[#4E32CA]" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#111827]">Security & trust</span>
              </div>
              <h1 className="mt-6 max-w-[680px] text-[42px] font-[700] leading-[0.96] tracking-normal text-[#111827] sm:text-[64px]">
                Built for sensitive salary workflows.
              </h1>
              <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-[#6B7280]">
                MobPae handles employee identity, bank details, salary access requests and repayment records. The product is designed around verification, role boundaries and auditability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/privacy-policy" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#5B3CE3] px-6 text-[14px] font-[700] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-[#4E32CA]">
                  Read privacy policy <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/for-employers" className="inline-flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/86 px-6 text-[14px] font-[700] text-[#111827] shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-[#111827]">
                  For employers
                </a>
              </div>
            </div>

            <div className="rounded-[40px] border border-white bg-white/84 p-5 shadow-soft backdrop-blur-xl">
              <div className="light-feature-panel rounded-[32px] p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-[700] uppercase tracking-[0.14em] text-white/60">Trust architecture</p>
                    <h2 className="mt-3 text-[32px] font-[700] leading-tight tracking-normal">Every request passes through checks.</h2>
                  </div>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-white/10 text-white/80">
                    <LockKeyhole size={27} />
                  </div>
                </div>
                <div className="mt-7 grid gap-3">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-3">
                      <FileCheck2 size={16} className="mt-0.5 flex-shrink-0 text-[#B8ACFF]" />
                      <p className="text-[13px] font-[600] leading-relaxed text-white/76">{point}</p>
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
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">Trust layers</p>
            <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-normal text-[#111827] lg:text-[48px]">
              Practical controls for MVP and beyond.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {trustLayers.map((layer) => (
              <article key={layer.title} className="rounded-[32px] border border-[#E5E7EB] bg-[#F8F9FC] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-13 w-13 h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-3xl bg-[#F0EDFF] text-[#4E32CA]">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-[700] tracking-normal text-[#111827]">{layer.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-[#6B7280]">{layer.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] py-20">
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
    <div className="rounded-[34px] border border-[#E5E7EB] bg-white p-6 shadow-soft">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#5B3CE3] text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-[25px] font-[700] leading-tight tracking-normal text-[#111827]">{value}</h3>
      <p className="mt-3 text-[14px] leading-[1.75] text-[#6B7280]">{label}</p>
    </div>
  );
}
