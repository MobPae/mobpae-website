import { useState } from "react";
import {
  BadgeIndianRupee,
  Bell,
  Camera,
  Check,
  FileCheck2,
  Landmark,
  Send,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

const productStages = [
  {
    name: "Dashboard",
    eyebrow: "See the value",
    description: "Employees understand their available salary access, payroll date and live request status immediately.",
    icon: WalletCards,
    points: ["Available limit from backend", "Salary and payday context", "Setup status without blocking access"],
  },
  {
    name: "Advance",
    eyebrow: "Know before requesting",
    description: "The complete repayment picture is visible before an employee submits a salary advance request.",
    icon: BadgeIndianRupee,
    points: ["Amount and tenure", "Interest and total payment", "Scheduled payroll recovery date"],
  },
  {
    name: "Track",
    eyebrow: "No status anxiety",
    description: "Every approval step is visible, from employee submission through employer, admin and payout.",
    icon: Send,
    points: ["Live request status", "Human-readable timeline", "Clear payment schedule"],
  },
  {
    name: "Profile",
    eyebrow: "Trust in one place",
    description: "KYC, selfie, bank account and membership are managed from one calm profile experience.",
    icon: UserRound,
    points: ["KYC document status", "Selfie capture and review", "Verified bank and membership"],
  },
];

export function ProductScreensSection() {
  const [active, setActive] = useState(0);
  const [sectionRef, inView] = useInView(0.08);
  const selected = productStages[active];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="app-screens"
      className="relative overflow-hidden bg-[#F6F9F8] py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-emerald-200/50 blur-[120px]" />
        <div className="absolute -right-44 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-100/70 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-[900px] text-center">
          <p className={`reveal text-[11px] font-[700] uppercase tracking-[0.22em] text-emerald-700 ${inView ? "in-view" : ""}`}>
            Inside MobPae
          </p>
          <h2 className={`reveal delay-100 mt-4 text-[36px] font-[700] leading-[0.98] tracking-normal text-slate-950 lg:text-[48px] ${inView ? "in-view" : ""}`}>
            One calm journey from payday pressure to clarity.
          </h2>
          <p className={`reveal delay-200 mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.85] text-slate-600 ${inView ? "in-view" : ""}`}>
            Explore the employee experience screen by screen. Each step is designed to answer one question clearly, without making financial access feel complicated.
          </p>
        </div>

        <div className={`reveal-scale delay-150 overflow-hidden rounded-[46px] border border-white/10 bg-slate-950 shadow-[0_42px_110px_rgba(6,78,59,0.22)] ${inView ? "in-view" : ""}`}>
          <div className="relative grid lg:grid-cols-[0.8fr_1.02fr_0.88fr]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[30%] top-[-20%] h-[500px] w-[500px] rounded-full bg-emerald-400/16 blur-[110px]" />
              <div className="absolute bottom-[-24%] right-[-8%] h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-[110px]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
            </div>

            <div className="relative z-10 border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-[10px] font-[700] uppercase tracking-[0.2em] text-emerald-200/65">Product tour</p>
              <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-1">
                {productStages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isActive = active === index;
                  return (
                    <button
                      key={stage.name}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group flex min-h-[76px] items-center gap-3 rounded-[22px] border px-3 text-left transition-all sm:px-4 ${
                        isActive
                          ? "border-emerald-300/30 bg-emerald-300/14 text-white shadow-[0_16px_42px_rgba(0,0,0,0.16)]"
                          : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-2xl ${isActive ? "bg-emerald-300 text-emerald-950" : "bg-white/8 text-emerald-200"}`}>
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-[700] uppercase tracking-[0.12em] opacity-60">0{index + 1}</span>
                        <strong className="mt-1 block text-[14px] font-[700]">{stage.name}</strong>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 flex min-h-[650px] items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
              <div className="absolute h-[480px] w-[480px] rounded-full border border-emerald-200/10 bg-emerald-300/6" />
              <div className="absolute h-[380px] w-[380px] rounded-full border border-emerald-200/10" />
              <PhoneFrame>
                <ProductScreen active={active} />
              </PhoneFrame>
              <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-xl">
                {productStages.map((stage, index) => (
                  <button
                    key={stage.name}
                    type="button"
                    aria-label={`Show ${stage.name}`}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-emerald-300" : "w-2 bg-white/30"}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center border-t border-white/10 p-7 text-white lg:border-l lg:border-t-0 lg:p-9">
              <div key={selected.name} className="product-copy-enter">
                <p className="text-[10px] font-[700] uppercase tracking-[0.2em] text-emerald-200/65">{selected.eyebrow}</p>
                <h3 className="mt-4 text-[32px] font-[700] leading-[1.05] tracking-normal lg:text-[40px]">{selected.name}</h3>
                <p className="mt-5 text-[14px] leading-[1.8] text-white/62">{selected.description}</p>
                <div className="mt-7 grid gap-3">
                  {selected.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-3 py-3">
                      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-xl bg-emerald-300/14 text-emerald-200">
                        <Check size={14} />
                      </span>
                      <span className="text-[13px] font-[600] text-white/82">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-20 w-full max-w-[318px] rounded-[42px] border border-white/16 bg-[#080d17] p-2.5 shadow-[0_36px_100px_rgba(0,0,0,0.45)]">
      <div className="overflow-hidden rounded-[33px] bg-[#f4f8f5]">
        <div className="flex h-9 items-center justify-between px-6 text-[10px] font-[700] text-slate-950">
          <span>9:41</span>
          <span>•••  5G</span>
        </div>
        <div className="min-h-[515px] px-4 pb-5 pt-2">{children}</div>
      </div>
    </div>
  );
}

function ProductScreen({ active }: { active: number }) {
  if (active === 1) return <AdvanceScreen />;
  if (active === 2) return <TrackScreen />;
  if (active === 3) return <ProfileScreen />;
  return <HomeScreen />;
}

function ScreenHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-[9px] font-[700] uppercase tracking-[0.16em] text-emerald-700">{eyebrow}</p>
      <h4 className="mt-1 text-[24px] font-[700] leading-none tracking-normal text-slate-950">{title}</h4>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="product-screen-enter">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700"><UserRound size={18} /></div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[8px] font-[700] uppercase tracking-[0.14em] text-slate-400">Northstar Retail</p>
          <h4 className="text-[19px] font-[700] leading-none tracking-normal text-slate-950">Hi, Arjun</h4>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm"><Bell size={15} /></div>
      </div>
      <EmeraldCard label="Available to withdraw" amount="₹5,400" sub="of ₹5,400 limit" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[["Salary", "₹54K"], ["Withdrawn", "₹5K"], ["Payday", "28 Jun"]].map(([label, value]) => (
          <MiniMetric key={label} label={label} value={value} />
        ))}
      </div>
      <div className="mt-4 rounded-[22px] border border-emerald-100 bg-white p-4">
        <div className="flex items-center justify-between">
          <div><p className="text-[9px] font-[700] uppercase tracking-[0.14em] text-slate-400">Live request</p><p className="mt-1 text-[17px] font-[700] text-slate-950">Request journey</p></div>
          <span className="rounded-full bg-emerald-50 px-3 py-2 text-[10px] font-[700] text-emerald-700">Track</span>
        </div>
        <div className="mt-5 flex items-center gap-2">
          {[true, true, false, false].map((done, index) => <span key={index} className={`h-2 flex-1 rounded-full ${done ? "bg-emerald-500" : "bg-slate-200"}`} />)}
        </div>
      </div>
    </div>
  );
}

function AdvanceScreen() {
  return (
    <div className="product-screen-enter">
      <ScreenHeading eyebrow="Salary access" title="Request advance" />
      <EmeraldCard label="Available advance" amount="₹5,400" sub="Payroll recovery enabled" />
      <div className="mt-4 rounded-[22px] border border-emerald-100 bg-white p-4">
        <p className="text-[13px] font-[700] text-slate-950">Repayment preview</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <MiniMetric label="Amount" value="₹5,000" />
          <MiniMetric label="Tenure" value="11 days" />
        </div>
        <div className="mt-4 space-y-3 text-[11px] font-[600]">
          <DataRow label="Interest" value="₹407" />
          <DataRow label="Total payment" value="₹5,407" strong />
          <DataRow label="Payment date" value="28 Jun" />
        </div>
      </div>
    </div>
  );
}

function TrackScreen() {
  return (
    <div className="product-screen-enter">
      <ScreenHeading eyebrow="History" title="Transactions" />
      <div className="rounded-[26px] bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-800 p-5 text-white shadow-[0_20px_48px_rgba(5,150,105,0.24)]">
        <div className="flex items-start justify-between gap-2"><div><p className="text-[10px] font-[600] text-white/70">Live request · #DEMO</p><p className="mt-3 text-[34px] font-[700] leading-none tracking-normal">₹5,000</p></div><span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-[700] text-emerald-800">Pending</span></div>
        <div className="mt-6 flex justify-between text-[10px] font-[700] text-white/72"><span>Started 17 Jun</span><span>Pays 28 Jun</span></div>
      </div>
      <div className="mt-4 rounded-[22px] border border-emerald-100 bg-white p-4">
        <p className="text-[13px] font-[700] text-slate-950">Request journey</p>
        <div className="mt-5 space-y-4">
          {["Submitted", "Employer approval", "Admin review", "Payout"].map((label, index) => (
            <div key={label} className="flex items-center gap-3"><span className={`grid h-7 w-7 place-items-center rounded-full ${index < 2 ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-300"}`}><Check size={12} /></span><span className="text-[11px] font-[700] text-slate-700">{label}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="product-screen-enter">
      <ScreenHeading eyebrow="Profile" title="Your account" />
      <div className="flex items-center gap-3 rounded-[22px] border border-emerald-100 bg-white p-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-700"><UserRound size={20} /></div>
        <div><p className="text-[14px] font-[700] text-slate-950">Arjun Sharma</p><p className="mt-1 text-[10px] font-[700] text-slate-400">Northstar Retail</p></div>
      </div>
      <div className="mt-4 grid gap-3">
        <ProfileRow icon={<FileCheck2 size={16} />} label="KYC status" value="Verified" />
        <ProfileRow icon={<Camera size={16} />} label="Selfie" value="Reviewing" />
        <ProfileRow icon={<Landmark size={16} />} label="Bank account" value="Verified" />
        <ProfileRow icon={<ShieldCheck size={16} />} label="Membership" value="Active" />
      </div>
    </div>
  );
}

function EmeraldCard({ label, amount, sub }: { label: string; amount: string; sub: string }) {
  return (
    <div className="rounded-[26px] bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-800 p-5 text-white shadow-[0_20px_48px_rgba(5,150,105,0.24)]">
      <div className="flex items-start justify-between gap-2"><p className="text-[11px] font-[600] text-white/72">{label}</p><span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 text-[10px] font-[700] text-emerald-800"><ShieldCheck size={12} /> Member</span></div>
      <p className="mt-5 text-[38px] font-[700] leading-none tracking-normal">{amount}</p>
      <p className="mt-3 text-[12px] font-[600] text-white/70">{sub}</p>
      <div className="mt-5 h-2 rounded-full bg-white/22"><div className="h-full w-[86%] rounded-full bg-white" /></div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-[17px] border border-emerald-100 bg-white p-3"><p className="text-[9px] font-[600] text-slate-400">{label}</p><p className="mt-2 text-[12px] font-[700] text-slate-950">{value}</p></div>;
}

function DataRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return <div className="flex items-center justify-between gap-3"><span className="text-slate-500">{label}</span><strong className={strong ? "text-slate-950" : "text-slate-700"}>{value}</strong></div>;
}

function ProfileRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="flex items-center gap-3 rounded-[20px] border border-emerald-100 bg-white p-3"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">{icon}</span><span className="min-w-0 flex-1 text-[11px] font-[700] text-slate-950">{label}</span><span className="rounded-full bg-emerald-50 px-2 py-1.5 text-[9px] font-[700] text-emerald-700">{value}</span></div>;
}
