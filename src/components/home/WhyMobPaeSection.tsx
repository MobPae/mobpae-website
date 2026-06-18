import { AlertCircle, ArrowDownRight, ArrowUpRight, BadgeIndianRupee, HeartPulse } from "lucide-react";
import { useInView } from "../../hooks/useInView";

export function WhyMobPaeSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="why-mobpae"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-[#f8faf7] py-24"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-100/70 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className={`reveal ${inView ? "in-view" : ""}`}>
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-emerald-700">
              The real problem
            </p>
            <h2
              className="mt-5 font-[900] leading-[0.98] tracking-[-0.05em] text-slate-950"
              style={{ fontSize: "clamp(38px, 5vw, 66px)" }}
            >
              Financial emergencies do not wait for payroll.
            </h2>
            <p className="mt-6 max-w-[430px] text-[16px] leading-[1.85] text-slate-600">
              Employees need breathing room before payday. Employers need a structured, auditable system that does not become an informal cash desk.
            </p>
            <div className="mt-8 grid max-w-[470px] gap-3">
              {[
                "No credit checks or loan-style experience",
                "Employer limits and approval stay central",
                "Repayment is tracked against payroll",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.045)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <BadgeIndianRupee size={16} />
                  </span>
                  <span className="text-[14px] font-[800] text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative reveal-scale delay-150 ${inView ? "in-view" : ""}`}>
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <VisualCard tone="danger" title="Before MobPae" amount="Stress gap" icon={<AlertCircle size={20} />}>
                  <div className="mt-5 space-y-3">
                    <MiniRow label="Unexpected bill" value="₹4,500" down />
                    <MiniRow label="Payday distance" value="9 days" down />
                    <MiniRow label="Informal borrowing" value="High" down />
                  </div>
                </VisualCard>
                <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-[900] text-slate-950">Month-end pressure</p>
                    <ArrowUpRight size={17} className="text-red-500" />
                  </div>
                  <div className="mt-5 flex h-32 items-end gap-2">
                    {[38, 46, 44, 58, 72, 86, 96].map((h, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-red-200 to-red-400" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:pt-12">
                <VisualCard tone="success" title="With MobPae" amount="Controlled access" icon={<HeartPulse size={20} />}>
                  <div className="mt-5 rounded-[24px] bg-emerald-950 p-5 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[11px] font-[800] text-emerald-100/70">Available limit</p>
                        <p className="mt-2 text-[34px] font-[900] leading-none tracking-[-0.05em]">₹8,000</p>
                      </div>
                      <span className="rounded-full bg-white/12 px-3 py-1 text-[11px] font-[900]">Verified</span>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-300 to-white" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <MiniPill label="KYC" value="Done" />
                    <MiniPill label="Bank" value="Verified" />
                  </div>
                </VisualCard>

                <div className="rounded-[30px] border border-emerald-100 bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-[900] text-slate-950">Payroll disruption</p>
                    <ArrowDownRight size={17} className="text-emerald-600" />
                  </div>
                  <div className="mt-5 flex h-32 items-end gap-2">
                    {[92, 78, 62, 49, 36, 28, 20].map((h, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-100 to-emerald-500" style={{ height: `${h}%` }} />
                    ))}
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

function VisualCard({
  tone,
  title,
  amount,
  icon,
  children,
}: {
  tone: "danger" | "success";
  title: string;
  amount: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const success = tone === "success";
  return (
    <div className="rounded-[34px] border border-white bg-white/88 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-[900] uppercase tracking-[0.14em] text-slate-400">{title}</p>
          <p className="mt-2 text-[22px] font-[900] tracking-[-0.04em] text-slate-950">{amount}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${success ? "bg-emerald-100 text-emerald-700" : "bg-red-50 text-red-500"}`}>
          {icon}
        </div>
      </div>
      {children}
    </div>
  );
}

function MiniRow({ label, value, down }: { label: string; value: string; down?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
      <span className="text-[12px] font-[800] text-slate-500">{label}</span>
      <span className={`text-[13px] font-[900] ${down ? "text-red-500" : "text-emerald-600"}`}>{value}</span>
    </div>
  );
}

function MiniPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-emerald-50 px-4 py-3">
      <p className="text-[10px] font-[900] uppercase tracking-[0.12em] text-emerald-600">{label}</p>
      <p className="mt-1 text-[13px] font-[900] text-slate-950">{value}</p>
    </div>
  );
}
