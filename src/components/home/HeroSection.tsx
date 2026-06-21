import { ArrowRight, BadgeCheck, CalendarCheck2, Clock3, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import relaxedEmployeeHero from "../../assets/relaxed-employee-hero.png";
import { useInView } from "../../hooks/useInView";

const metrics = [
  { value: "₹25K", label: "Policy-led access" },
  { value: "24h", label: "Approval to payout" },
  { value: "12x", label: "Yearly advances" },
];

export function HeroSection() {
  const [heroRef, heroInView] = useInView(0.05);

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative isolate overflow-hidden bg-[#F6F9F8] pt-12 pb-16 lg:pt-16 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 top-0 h-[520px] w-[520px] rounded-full bg-emerald-200/70 blur-[120px]" />
        <div className="absolute right-[-18%] top-10 h-[680px] w-[680px] rounded-full bg-cyan-100/80 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 max-w-[620px]">
            <div className={`reveal ${heroInView ? "in-view" : ""}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <BadgeCheck size={13} />
                </span>
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-emerald-800">
                  Employer-backed earned salary access
                </span>
              </div>
            </div>

            <h1
              className={`mt-6 text-[42px] font-[700] leading-[1.02] tracking-normal text-slate-950 sm:text-[54px] lg:text-[64px] reveal delay-100 ${heroInView ? "in-view" : ""}`}
            >
              Salary access that feels calm, fast and controlled.
            </h1>

            <p className={`mt-6 max-w-[520px] text-[17px] leading-[1.85] text-slate-600 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              MobPae gives employees a modern mobile way to access earned salary, while employers keep approval, limits, deductions and visibility in one clean workflow.
            </p>

            <div className={`mt-8 flex flex-wrap items-center gap-3 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[700] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-emerald-700"
              >
                Start employer onboarding
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-200 bg-white/86 px-6 text-[14px] font-[700] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-emerald-800"
              >
                View product flow
              </a>
            </div>

            <div className={`mt-9 grid max-w-[590px] grid-cols-3 gap-3 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-emerald-100 bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                  <p className="text-[27px] font-[700] leading-none tracking-normal text-slate-950">{item.value}</p>
                  <p className="mt-2 text-[12px] font-[700] leading-snug text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative min-h-[520px] lg:min-h-[650px] reveal-scale delay-150 ${heroInView ? "in-view" : ""}`}>
            <div className="absolute inset-x-0 bottom-4 top-8 rounded-[44px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-slate-950 shadow-[0_50px_120px_rgba(6,78,59,0.22)]" />
            <div className="absolute inset-x-3 bottom-8 top-0 overflow-hidden rounded-[40px] border border-white/40 bg-white shadow-[0_34px_90px_rgba(15,23,42,0.18)] lg:inset-x-8">
              <img
                src={relaxedEmployeeHero}
                alt="Relaxed employee working calmly with MobPae financial wellness support"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/18 to-transparent" />
              <div className="absolute left-6 top-6 max-w-[250px] rounded-[28px] border border-white/70 bg-white/82 p-5 shadow-soft backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Sparkles size={21} />
                  </div>
                  <div>
                    <p className="text-[15px] font-[700] text-slate-950">Workday feels lighter</p>
                    <p className="mt-1 text-[12px] font-[700] leading-snug text-slate-500">Earned salary access without panic borrowing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 mx-auto grid max-w-[560px] grid-cols-3 gap-3 px-6">
              <HeroSignal icon={<WalletCards size={18} />} label="Advance" value="₹5,000" />
              <HeroSignal icon={<ShieldCheck size={18} />} label="Policy" value="Secured" />
              <HeroSignal icon={<CalendarCheck2 size={18} />} label="Recovery" value="Payroll" />
            </div>

            <div className="absolute right-0 top-16 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[12px] font-[700] text-emerald-800 shadow-soft backdrop-blur-xl lg:right-2">
              <Clock3 size={14} className="mr-1 inline" /> calm before payday
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSignal({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-xl">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        {icon}
      </div>
      <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-[15px] font-[700] tracking-normal text-slate-950">{value}</p>
    </div>
  );
}
