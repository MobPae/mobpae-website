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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className={`reveal ${inView ? "in-view" : ""}`}>
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">Operating cycle</p>
            <h2
              className="mt-5 text-[36px] font-[700] leading-[1.08] tracking-tighter text-[#111827] lg:text-[48px]"
            >
              MobPae is not just a request button. It is a closed money loop.
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.85] text-[#6B7280]">
              Every advance moves through the same controlled cycle: employee request, employer approval, admin disbursal, payroll recovery and employer settlement.
            </p>
            <div className="mt-8 grid max-w-[500px] grid-cols-2 gap-3">
              <CycleStat value="₹40,548" label="monthly recovery file" />
              <CycleStat value="1 link" label="request to settlement" />
            </div>
          </div>

          <div className={`relative reveal-scale delay-150 ${inView ? "in-view" : ""}`}>
            <div className="brand-dark-card rounded-[42px] p-5 sm:p-6 lg:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className={`rounded-[28px] border p-4 ${index === 0 ? "border-white/14 bg-white text-[#111827]" : "border-white/10 bg-white/10 text-white"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${index === 0 ? "bg-[#F0EDFF] text-[#5B3CE3]" : "bg-white text-[#5B3CE3]"}`}>
                        {step.icon}
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-[700] ${index === 0 ? "bg-[#F8F9FC] text-[#8D90A3]" : "bg-white/10 text-white/55"}`}>
                      0{index + 1}
                    </span>
                  </div>
                  <p className={`mt-5 text-[10px] font-[700] uppercase tracking-[0.14em] ${index === 0 ? "text-[#5B3CE3]" : "text-[#B8ACFF]"}`}>{step.meta}</p>
                  <h3 className={`mt-2 text-[19px] font-[700] tracking-tighter ${index === 0 ? "text-[#111827]" : "text-white"}`}>{step.title}</h3>
                  <p className={`mt-2 min-h-[68px] text-[13.5px] leading-[1.7] ${index === 0 ? "text-[#6B7280]" : "text-white/62"}`}>{step.copy}</p>
                  <WorkflowMini index={index} dark={index !== 0} />
                </div>
              ))}
              </div>
              <div className="mt-4 rounded-[28px] border border-white/10 bg-white/10 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-white/50">Settlement summary</p>
                    <p className="mt-2 text-[22px] font-[700] text-white">Employer pays admin after payroll recovery</p>
                  </div>
                  <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-[13px] font-[700] text-[#5B3CE3]">
                    Discuss setup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CycleStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F8F9FC] p-4">
      <p className="text-[26px] font-[700] leading-none tracking-tighter text-[#111827]">{value}</p>
      <p className="mt-2 text-[12px] font-[700] text-[#8D90A3]">{label}</p>
    </div>
  );
}

function WorkflowMini({ index, dark = false }: { index: number; dark?: boolean }) {
  if (index === 0) {
    return (
      <div className={`mt-4 rounded-[24px] p-4 ${dark ? "bg-white/10" : "bg-[#F8F9FC]"}`}>
        <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Preview</p>
        <p className={`mt-2 text-[24px] font-[700] tracking-tighter ${dark ? "text-white" : "text-[#111827]"}`}>₹5,000</p>
        <div className={`mt-3 h-2 rounded-full ${dark ? "bg-white/14" : "bg-white"}`}>
          <div className="h-full w-[62%] rounded-full bg-[#5B3CE3]" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`mt-4 rounded-[24px] border p-4 ${dark ? "border-white/10 bg-white/10 text-white" : "border-[#DED7FF] bg-[#F0EDFF] text-[#111827]"}`}>
        <p className={`text-[10px] font-[700] uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-[#4E32CA]"}`}>Employer policy</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <MiniStatus label="Limit" value="10%" dark={dark} />
          <MiniStatus label="Salary" value="OK" dark={dark} />
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className={`mt-4 rounded-[24px] p-4 ${dark ? "bg-white/10" : "bg-white"}`}>
        <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Verification queue</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5B3CE3]">
            <Landmark size={16} />
          </span>
          <div>
            <p className={`text-[13px] font-[700] ${dark ? "text-white" : "text-[#111827]"}`}>KYC + bank</p>
            <p className="text-[11px] font-[700] text-[#B7B9C7]">Admin verified</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mt-4 rounded-[24px] p-4 ${dark ? "bg-white/10" : "bg-white"}`}>
      <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#B7B9C7]">Recovery</p>
      <p className="mt-2 text-[20px] font-[700] text-[#4E32CA]">28 Jun</p>
      <p className="mt-1 text-[11px] font-[700] text-[#B7B9C7]">Payroll deduction</p>
    </div>
  );
}

function MiniStatus({ label, value, dark = false }: { label: string; value: string; dark?: boolean }) {
  return (
    <div className={`rounded-2xl px-3 py-2 ${dark ? "bg-white/10" : "bg-white"}`}>
      <p className="text-[9px] font-[700] uppercase tracking-[0.12em] text-[#8D90A3]">{label}</p>
      <p className={`mt-1 text-[14px] font-[700] ${dark ? "text-white" : ""}`}>{value}</p>
    </div>
  );
}
