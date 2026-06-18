import { ArrowRight, BarChart3, Building2, ClipboardCheck, Landmark, Settings2, ShieldCheck, Users, WalletCards } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const controlItems = [
  { label: "Advance percentage", value: "10%" },
  { label: "Maximum advance", value: "₹10,000" },
  { label: "KYC required", value: "Active" },
  { label: "Bank verification", value: "Active" },
];

const employerSteps = [
  {
    icon: <Building2 size={21} />,
    title: "Configure policy",
    copy: "Set salary advance percentage, max limits, approval rules and verification requirements.",
  },
  {
    icon: <Users size={21} />,
    title: "Invite employees",
    copy: "Employees complete KYC, bank verification, membership and request salary access from the app.",
  },
  {
    icon: <ClipboardCheck size={21} />,
    title: "Approve requests",
    copy: "Employer reviews eligible requests before admin disbursal and payroll recovery.",
  },
  {
    icon: <Landmark size={21} />,
    title: "Recover in payroll",
    copy: "Repayment and settlement reporting stays visible across the full workflow.",
  },
];

export function EmployersPage() {
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
                <Building2 size={14} className="text-emerald-700" />
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">For employers</span>
              </div>
              <h1 className="mt-6 max-w-[690px] text-[48px] font-[900] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[76px]">
                Offer salary access without losing control.
              </h1>
              <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-slate-600">
                MobPae helps employers support employees before payday with policy limits, approvals, verification, payroll recovery and settlement visibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-emerald-700">
                  Request demo <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/security" className="inline-flex h-14 items-center justify-center rounded-full border border-emerald-200 bg-white/86 px-6 text-[14px] font-[900] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-emerald-800">
                  View security
                </a>
              </div>
            </div>

            <div className="rounded-[40px] border border-white bg-white/84 p-5 shadow-soft backdrop-blur-xl">
              <div className="rounded-[32px] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-[900] uppercase tracking-[0.14em] text-emerald-100/60">Admin control room</p>
                    <h2 className="mt-3 text-[32px] font-[900] leading-tight tracking-[-0.05em]">Policy before payout.</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-400/15 text-emerald-200">
                    <Settings2 size={27} />
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  {controlItems.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/8 px-4 py-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-[12px] font-[800] text-white/58">{item.label}</span>
                        <span className="text-[13px] font-[900] text-white">{item.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" />
                      </div>
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
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-emerald-700">Employer workflow</p>
            <h2 className="mt-4 text-[40px] font-[900] leading-[1] tracking-[-0.05em] text-slate-950 lg:text-[62px]">
              A benefit that fits payroll operations.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {employerSteps.map((step, index) => (
              <article key={step.title} className="rounded-[32px] border border-emerald-100 bg-[#f8faf7] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    {step.icon}
                  </div>
                  <span className="text-[12px] font-[900] text-emerald-700">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-[21px] font-[900] tracking-[-0.04em] text-slate-950">{step.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf7] py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-3">
          <EmployerMetric icon={<WalletCards size={22} />} value="No open-ended credit" label="Requests follow employer policy and salary data." />
          <EmployerMetric icon={<ShieldCheck size={22} />} value="Verified employees" label="KYC, bank and selfie checks support safer access." />
          <EmployerMetric icon={<BarChart3 size={22} />} value="Recoveries visible" label="Disbursal, repayment and settlement stay connected." />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="rounded-[36px] border border-emerald-100 bg-slate-950 p-7 text-white shadow-[0_28px_80px_rgba(6,78,59,0.18)] lg:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-[900] uppercase tracking-[0.16em] text-emerald-200/70">Ready for employer onboarding</p>
                <h2 className="mt-3 text-[32px] font-[900] leading-tight tracking-[-0.05em] lg:text-[44px]">
                  Turn salary access into a controlled workplace benefit.
                </h2>
              </div>
              <a href="/#contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[900] text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-50">
                Talk to MobPae <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function EmployerMetric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
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
