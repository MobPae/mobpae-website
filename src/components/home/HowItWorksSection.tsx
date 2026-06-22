import { Building2, CheckCircle2, Landmark, Send, Wallet } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const steps = [
  {
    icon: <Send size={20} />,
    title: "Employee requests",
    copy: "Amount, tenure and repayment preview are shown before submission.",
    meta: "Mobile app",
  },
  {
    icon: <Building2 size={20} />,
    title: "Employer approves",
    copy: "Employer reviews salary context, available limit and request history before approval.",
    meta: "Employer portal",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Admin verifies",
    copy: "Admin verifies KYC, bank and selfie status, then marks approved requests ready for disbursal.",
    meta: "Admin portal",
  },
  {
    icon: <Wallet size={20} />,
    title: "Payout and recovery",
    copy: "Disbursal, payroll recovery and settlement stay linked.",
    meta: "Tracked end-to-end",
  },
];

export function HowItWorksSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className={`reveal ${inView ? "in-view" : ""}`}>
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#5659D9]">
              Product flow
            </p>
            <h2
              className="mt-5 text-[36px] font-[700] leading-[1.08] tracking-normal text-[#191A2E] lg:text-[48px]"
            >
              One request. Three checks. Clean settlement.
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.85] text-[#62657A]">
              The flow mirrors how the MVP actually works: employee, employer, admin, disbursal, repayment and settlement all connected.
            </p>
          </div>

          <div className={`relative reveal-scale delay-150 ${inView ? "in-view" : ""}`}>
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#ECEBFF] via-[#A5A7FF] to-[#ECEBFF] md:block" />
            <div className="theme-card-grid space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="group relative rounded-[30px] border border-[#E4E4EF] p-4 shadow-[0_12px_32px_rgba(15,23,42,0.045)] transition-all hover:-translate-y-1 hover:border-[#D4D5E0] hover:shadow-soft md:ml-12">
                  <div className="absolute -left-[70px] top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-[#E4E4EF] bg-white text-[#5659D9] shadow-soft md:flex">
                    {step.icon}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[1fr_220px] sm:items-center">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ECEBFF] text-[#5659D9] md:hidden">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] font-[700] text-[#7679FF]">0{index + 1}</span>
                          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">{step.meta}</span>
                        </div>
                        <h3 className="mt-3 text-[19px] font-[700] tracking-normal text-[#191A2E]">{step.title}</h3>
                        <p className="mt-2 text-[13.5px] leading-[1.7] text-[#62657A]">{step.copy}</p>
                      </div>
                    </div>
                    <WorkflowMini index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowMini({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-[24px] bg-white p-4">
        <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Preview</p>
        <p className="mt-2 text-[24px] font-[700] tracking-normal text-[#191A2E]">₹5,000</p>
        <div className="mt-3 h-2 rounded-full bg-[#F0F0F8]">
          <div className="h-full w-[62%] rounded-full bg-[#7679FF]" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-[24px] border border-[#D8D7FF] bg-[#ECEBFF] p-4 text-[#191A2E]">
        <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#5659D9]">Employer policy</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <MiniStatus label="Limit" value="10%" />
          <MiniStatus label="Salary" value="OK" />
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="rounded-[24px] bg-white p-4">
        <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Verification queue</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ECEBFF] text-[#5659D9]">
            <Landmark size={16} />
          </span>
          <div>
            <p className="text-[13px] font-[700] text-[#191A2E]">KYC + bank</p>
            <p className="text-[11px] font-[700] text-[#B7B9C7]">Admin verified</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] bg-white p-4">
      <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Recovery</p>
      <p className="mt-2 text-[20px] font-[700] text-[#5659D9]">28 Jun</p>
      <p className="mt-1 text-[11px] font-[700] text-[#B7B9C7]">Payroll deduction</p>
    </div>
  );
}

function MiniStatus({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white px-3 py-2">
      <p className="text-[9px] font-[700] uppercase tracking-[0.12em] text-[#8D90A3]">{label}</p>
      <p className="mt-1 text-[14px] font-[700]">{value}</p>
    </div>
  );
}
