import { ArrowRight, BadgeCheck, Building2, Clock3, ShieldCheck, WalletCards } from "lucide-react";
import heroMockup from "../../assets/hero-mockup.png";
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
      className="relative isolate overflow-hidden bg-[#f8faf7] pt-12 pb-16 lg:pt-16 lg:pb-24"
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
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">
                  Employer-backed earned salary access
                </span>
              </div>
            </div>

            <h1
              className={`mt-6 font-[900] leading-[0.94] tracking-[-0.06em] text-slate-950 reveal delay-100 ${heroInView ? "in-view" : ""}`}
              style={{ fontSize: "clamp(48px, 7.4vw, 96px)" }}
            >
              Salary access that feels calm, fast and controlled.
            </h1>

            <p className={`mt-6 max-w-[520px] text-[17px] leading-[1.85] text-slate-600 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              MobPae gives employees a modern mobile way to access earned salary, while employers keep approval, limits, deductions and visibility in one clean workflow.
            </p>

            <div className={`mt-8 flex flex-wrap items-center gap-3 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              <a
                href="#contact"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-emerald-700"
              >
                Start employer onboarding
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-full border border-emerald-200 bg-white/86 px-6 text-[14px] font-[900] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-emerald-800"
              >
                View product flow
              </a>
            </div>

            <div className={`mt-9 grid max-w-[590px] grid-cols-3 gap-3 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-emerald-100 bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                  <p className="text-[27px] font-[900] leading-none tracking-[-0.05em] text-slate-950">{item.value}</p>
                  <p className="mt-2 text-[12px] font-[700] leading-snug text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative min-h-[520px] lg:min-h-[650px] reveal-scale delay-150 ${heroInView ? "in-view" : ""}`}>
            <div className="absolute inset-x-[-12%] bottom-2 top-8 rounded-[42px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-slate-950 shadow-[0_50px_120px_rgba(6,78,59,0.22)] lg:inset-x-0" />
            <div className="absolute inset-x-[-8%] bottom-8 top-0 overflow-hidden rounded-[42px] border border-white/20 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.22),transparent_34%),linear-gradient(135deg,rgba(16,185,129,0.18),rgba(15,23,42,0.1))] lg:inset-x-8">
              <div className="absolute left-8 top-8 hidden rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[12px] font-[900] text-white backdrop-blur-xl sm:block">
                Live employee app preview
              </div>
              <div className="absolute bottom-10 right-8 hidden w-[230px] rounded-[28px] border border-white/20 bg-white/14 p-4 text-white shadow-[0_20px_54px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/16">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[14px] font-[900]">Policy secured</p>
                    <p className="mt-1 text-[11px] font-[600] text-white/62">Limits, KYC, bank and membership checked before request.</p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={heroMockup}
              alt="MobPae employee app salary advance screens"
              className="absolute left-1/2 top-8 w-[760px] max-w-none -translate-x-1/2 drop-shadow-[0_38px_70px_rgba(0,0,0,0.28)] hue-rotate-[250deg] saturate-[1.08] lg:top-10 lg:w-[880px]"
            />

            <div className="absolute left-0 top-28 hidden rounded-[26px] border border-white/70 bg-white/88 p-4 shadow-soft backdrop-blur-xl lg:block animate-float-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Building2 size={21} />
                </div>
                <div>
                  <p className="text-[14px] font-[900] text-slate-950">Employer approval</p>
                  <p className="mt-1 text-[12px] font-[700] text-slate-500">No open-ended credit risk</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 left-8 rounded-[26px] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-xl lg:bottom-16">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <WalletCards size={21} />
                </div>
                <div>
                  <p className="text-[21px] font-[900] leading-none tracking-[-0.04em] text-slate-950">₹5,000</p>
                  <p className="mt-1 text-[12px] font-[700] text-slate-500">Typical advance request</p>
                </div>
              </div>
            </div>

            <div className="absolute right-1 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[12px] font-[900] text-emerald-800 shadow-soft backdrop-blur-xl lg:right-12">
              <Clock3 size={14} className="mr-1 inline" /> 24h payout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
