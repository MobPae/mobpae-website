import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { useInView } from "../../hooks/useInView";

export function HeroSection() {
  const [heroRef, heroInView] = useInView(0.05);

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative isolate overflow-hidden bg-[#f8faf7] pt-14 pb-20 sm:pt-18 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-200/70 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[-12%] top-[10%] h-[560px] w-[560px] rounded-full bg-teal-100/80 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,78,59,0.12)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-[650px]">
            <div className={`reveal ${heroInView ? "in-view" : ""}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Sparkles size={13} />
                </span>
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">
                  Earned wage access for modern teams
                </span>
              </div>
            </div>

            <h1
              className={`mt-6 max-w-[680px] font-[900] leading-[0.96] tracking-[-0.055em] text-slate-950 reveal delay-100 ${heroInView ? "in-view" : ""}`}
              style={{ fontSize: "clamp(48px, 7.2vw, 92px)" }}
            >
              Beating your{" "}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                month-end crunch.
              </span>
            </h1>

            <p className={`mt-6 max-w-[520px] text-[17px] leading-[1.8] text-slate-600 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              Give employees controlled access to earned salary before payday, backed by employer approval, transparent repayment, and a clean mobile experience.
            </p>

            <div className={`mt-8 flex flex-wrap items-center gap-3 reveal delay-300 ${heroInView ? "in-view" : ""}`}>
              <a
                href="#contact"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white shadow-[0_20px_48px_rgba(15,23,42,0.22)] transition-all hover:-translate-y-1 hover:bg-emerald-700"
              >
                Talk to us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-full border border-emerald-950/10 bg-white/80 px-6 text-[14px] font-[900] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-800"
              >
                See workflow
              </a>
            </div>

            <div className={`mt-9 grid max-w-[580px] grid-cols-3 gap-3 reveal delay-200 ${heroInView ? "in-view" : ""}`}>
              {[
                { value: "100%", label: "Employer backed" },
                { value: "24h", label: "Typical approval" },
                { value: "12x", label: "Advances yearly" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-emerald-100 bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                  <p className="text-[26px] font-[900] leading-none tracking-[-0.04em] text-slate-950">{item.value}</p>
                  <p className="mt-2 text-[12px] font-[700] leading-snug text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative flex items-center justify-center lg:justify-end reveal-scale delay-200 ${heroInView ? "in-view" : ""}`}>
            <div className="absolute right-8 top-4 hidden rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-[12px] font-[900] text-emerald-800 shadow-soft backdrop-blur-xl lg:block animate-float-soft">
              Employer controlled
            </div>
            <div className="absolute bottom-12 left-2 hidden rounded-[22px] border border-white bg-white/80 p-4 shadow-soft backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Clock3 size={19} />
                </div>
                <div>
                  <p className="text-[18px] font-[900] leading-none text-slate-950">Fast</p>
                  <p className="mt-1 text-[12px] font-[700] text-slate-500">approval cycle</p>
                </div>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative" style={{ perspective: "1400px" }}>
      <div
        className="animate-float-soft"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[48px] border border-emerald-950/10 bg-slate-950 p-3"
          style={{
            width: "min(350px, 82vw)",
            boxShadow: "0 70px 130px rgba(6, 78, 59, 0.28), 0 18px 42px rgba(15, 23, 42, 0.24)",
          }}
        >
          <div className="absolute left-1/2 top-3 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/18" />
          <div className="overflow-hidden rounded-[38px] bg-[#f8faf7]">
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 px-5 pb-6 pt-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14 text-[12px] font-[900]">
                    RK
                  </div>
                  <div>
                    <p className="text-[13px] font-[900] leading-none">Hi, Rahul</p>
                    <p className="mt-1 text-[10px] font-[700] text-emerald-100/70">Northstar Retail</p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className="mt-7 rounded-[28px] bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-[800] text-emerald-100/80">Available to withdraw</p>
                    <p className="mt-2 text-[38px] font-[900] leading-none tracking-[-0.05em]">₹5,400</p>
                    <p className="mt-2 text-[12px] font-[700] text-emerald-100/70">of ₹25,000 limit</p>
                  </div>
                  <span className="rounded-full bg-emerald-300/20 px-3 py-1.5 text-[11px] font-[900] text-emerald-100">
                    Member
                  </span>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/16">
                  <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-emerald-200 to-white" />
                </div>
              </div>
            </div>

            <div className="space-y-3 px-4 py-4">
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Salary", "₹54,000"],
                  ["Withdrawn", "₹5,000"],
                  ["Payday", "28 Jun"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[18px] border border-emerald-950/5 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                    <p className="text-[9px] font-[800] uppercase tracking-[0.1em] text-slate-400">{label}</p>
                    <p className="mt-1 text-[14px] font-[900] tracking-[-0.03em] text-slate-950">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-emerald-950/5 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[13px] font-[900] text-slate-950">Request journey</p>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-[900] text-emerald-700">Submitted</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["Request", "Employer", "Admin", "Paid"].map((step, index) => (
                    <div key={step} className="text-center">
                      <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${index === 0 ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}>
                        {index === 0 ? <WalletCards size={14} /> : <CheckCircle2 size={14} />}
                      </div>
                      <p className={`mt-2 text-[9px] font-[800] ${index === 0 ? "text-emerald-700" : "text-slate-400"}`}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-[20px] bg-slate-950 text-[13px] font-[900] text-white">
                Request advance <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
