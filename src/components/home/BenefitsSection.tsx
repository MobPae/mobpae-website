import { Building2, Eye, Gauge, ShieldCheck } from "lucide-react";
import { useInView } from "../../hooks/useInView";

export function BenefitsSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="benefits"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#F6F9F8] py-24"
    >
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-emerald-100/80 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className={`mx-auto max-w-3xl text-center reveal ${inView ? "in-view" : ""}`}>
          <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-emerald-700">Why teams choose MobPae</p>
          <h2 className="mt-5 text-[36px] font-[700] leading-[1] tracking-normal text-slate-950 lg:text-[48px]">
            Built for financial wellness without losing control.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`rounded-[36px] border border-emerald-100 bg-white p-6 shadow-soft reveal delay-100 ${inView ? "in-view" : ""}`}>
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                  <Building2 size={24} />
                </div>
                <h3 className="mt-6 text-[28px] font-[700] leading-[1.05] tracking-normal text-slate-950">
                  Employer control center
                </h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
                  Set advance percentage, max limits, KYC rules, bank verification and approval flow from admin settings.
                </p>
              </div>
              <div className="rounded-[30px] bg-slate-950 p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[13px] font-[700]">Policy settings</p>
                  <span className="rounded-full bg-emerald-400/16 px-3 py-1 text-[10px] font-[700] text-emerald-200">Active</span>
                </div>
                <SettingBar label="Advance percentage" value="10%" width="42%" />
                <SettingBar label="Max advance" value="₹10,000" width="72%" />
                <SettingBar label="Bank verification" value="Required" width="88%" />
                <SettingBar label="KYC + selfie" value="Required" width="94%" />
              </div>
            </div>
          </div>

          <div className={`grid gap-5 reveal delay-200 ${inView ? "in-view" : ""}`}>
            <FeatureTile
              icon={<ShieldCheck size={22} />}
              title="No credit-score anxiety"
              copy="Employees access earned wages through employer policy, not loan-style underwriting."
            />
            <FeatureTile
              icon={<Eye size={22} />}
              title="Every rupee is traceable"
              copy="Request status, disbursal, repayment and settlement are visible across portals."
            />
          </div>
        </div>

        <div className={`mt-5 grid gap-5 lg:grid-cols-3 reveal delay-300 ${inView ? "in-view" : ""}`}>
          <InsightCard title="Employee confidence" value="₹5,400" label="available to withdraw" />
          <InsightCard title="Payroll clarity" value="28 Jun" label="next recovery date" />
          <InsightCard title="Operational speed" value="24h" label="approval to payout target" />
        </div>
      </div>
    </section>
  );
}

function SettingBar({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[11px] font-[600] text-white/56">{label}</span>
        <span className="text-[12px] font-[700] text-white">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" style={{ width }} />
      </div>
    </div>
  );
}

function FeatureTile({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-soft">
      <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
        {icon}
      </div>
      <h3 className="mt-5 text-[21px] font-[700] tracking-normal text-slate-950">{title}</h3>
      <p className="mt-3 text-[13.5px] leading-[1.75] text-slate-600">{copy}</p>
    </div>
  );
}

function InsightCard({ title, value, label }: { title: string; value: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-6 shadow-soft">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100" />
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Gauge size={19} />
        </div>
        <p className="mt-5 text-[13px] font-[700] uppercase tracking-[0.12em] text-slate-400">{title}</p>
        <p className="mt-2 text-[34px] font-[700] leading-none tracking-normal text-slate-950">{value}</p>
        <p className="mt-2 text-[13px] font-[700] text-slate-500">{label}</p>
      </div>
    </div>
  );
}
