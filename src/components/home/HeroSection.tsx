import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from "lucide-react";
import relaxedEmployeeHero from "../../assets/relaxed-employee-hero.png";
import { useInView } from "../../hooks/useInView";

const metrics = [
  { value: "10%", label: "Policy limit" },
  { value: "28", label: "Payroll day" },
  { value: "12x", label: "Yearly access" },
];

const flow = [
  { icon: <UserRound size={15} />, label: "Employee requests" },
  { icon: <Building2 size={15} />, label: "Employer approves" },
  { icon: <ShieldCheck size={15} />, label: "Admin disburses" },
  { icon: <CalendarDays size={15} />, label: "Payroll recovers" },
];

export function HeroSection() {
  const [heroRef, heroInView] = useInView(0.05);

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative isolate overflow-hidden bg-[#FBFBFE] pb-16 pt-10 lg:pb-24 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#F0EDFF] blur-[120px]" />
        <div className="absolute right-[-16%] top-[8%] h-[620px] w-[620px] rounded-full bg-[#E9F6F6] blur-[130px]" />
        <div className="absolute bottom-[-24%] left-[30%] h-[520px] w-[520px] rounded-full bg-[#FDF6EB] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <div className={`brand-dark-card min-h-[620px] rounded-[42px] p-6 sm:p-8 lg:p-10 reveal ${heroInView ? "in-view" : ""}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-[700] uppercase tracking-[0.16em] text-white/80">
                <BadgeCheck size={13} className="text-[#B8ACFF]" />
                Employer-backed salary access
              </span>
              <span className="inline-flex rounded-full bg-[#FDF6EB] px-4 py-2 text-[11px] font-[700] text-[#C7686B]">
                No loan-like experience
              </span>
            </div>

            <h1 className="mt-10 max-w-[720px] text-[42px] font-[700] leading-[0.96] tracking-tighter text-white sm:text-[58px] lg:text-[76px]">
              Payday relief, without payroll chaos.
            </h1>
            <p className="mt-6 max-w-[610px] text-[16px] leading-[1.8] text-white/70">
              MobPae gives employees controlled access to earned salary while employers and admins keep approvals, KYC, disbursal, recovery and settlement in one auditable flow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[700] text-[#5B3CE3] transition-all hover:-translate-y-1 hover:bg-[#F8F9FC]"
              >
                Book a demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/10 px-6 text-[14px] font-[700] text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/14"
              >
                See workflow
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/10 p-4">
                  <p className="text-[27px] font-[700] leading-none tracking-tighter text-white">{item.value}</p>
                  <p className="mt-2 text-[12px] font-[700] text-white/55">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/10 p-4">
              <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-white/50">
                Actual MVP route
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-4">
                {flow.map((step, index) => (
                  <div key={step.label} className="relative rounded-[20px] bg-white px-3 py-3 text-[#111827]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#5B3CE3]">
                      {step.icon}
                    </span>
                    <p className="mt-3 text-[12px] font-[700] leading-tight">{step.label}</p>
                    <span className="absolute right-3 top-3 text-[10px] font-[700] text-[#B7B9C7]">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className={`relative min-h-[360px] overflow-hidden rounded-[42px] bg-[#E9F6F6] shadow-[0_24px_70px_rgba(17,24,39,0.08)] reveal-scale delay-150 ${heroInView ? "in-view" : ""}`}>
              <img
                src={relaxedEmployeeHero}
                alt="Relaxed employee working calmly with MobPae financial wellness support"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15121f]/78 via-[#15121f]/8 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#5B3CE3]">
                    <Sparkles size={20} />
                  </span>
                  <div>
                    <p className="text-[16px] font-[700]">Employee feels supported</p>
                    <p className="mt-1 text-[12px] font-[600] text-white/68">No panic borrowing before salary day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`grid gap-5 sm:grid-cols-2 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              <SalaryCard />
              <RecoveryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SalaryCard() {
  return (
    <div className="rounded-[34px] border border-[#DED7FF] bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#5B3CE3]">
          <WalletCards size={20} />
        </span>
        <span className="rounded-full bg-[#E9F6F6] px-3 py-1 text-[11px] font-[700] text-[#287A68]">Eligible</span>
      </div>
      <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#8D90A3]">Available access</p>
      <p className="mt-2 text-[34px] font-[700] leading-none tracking-tighter text-[#111827]">₹5,400</p>
      <p className="mt-2 text-[13px] font-[600] text-[#6B7280]">from ₹54,000 salary</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#F0EDFF]">
        <div className="h-full w-[72%] rounded-full bg-[#5B3CE3]" />
      </div>
    </div>
  );
}

function RecoveryCard() {
  return (
    <div className="rounded-[34px] border border-[#F8E3D8] bg-[#FDF6EB] p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#C7686B]">
          <CircleDollarSign size={20} />
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-[700] text-[#C7686B]">Payroll</span>
      </div>
      <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#8D90A3]">Recovery due</p>
      <p className="mt-2 text-[34px] font-[700] leading-none tracking-tighter text-[#111827]">28 Jun</p>
      <p className="mt-2 text-[13px] font-[600] text-[#6B7280]">deduction goes to employer settlement</p>
      <div className="mt-5 flex items-center gap-2 text-[12px] font-[700] text-[#287A68]">
        <CheckCircle2 size={15} /> audit-ready cycle
      </div>
    </div>
  );
}
