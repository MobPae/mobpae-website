import { ArrowRight, BadgeIndianRupee, BriefcaseBusiness, CheckCircle2, Factory, Landmark, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

const audiences = [
  {
    icon: <ShoppingBag size={22} />,
    title: "Retail teams",
    body: "Support frontline employees with transparent access before payday.",
  },
  {
    icon: <Truck size={22} />,
    title: "Logistics workforces",
    body: "Give distributed teams a controlled way to handle urgent expenses.",
  },
  {
    icon: <Factory size={22} />,
    title: "Manufacturing units",
    body: "Reduce informal borrowing pressure across shift-based teams.",
  },
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Service businesses",
    body: "Add a practical financial wellness benefit without payroll chaos.",
  },
];

const timeline = ["Employer enquiry", "Admin setup", "Employees invited", "KYC and bank verification", "Salary access live"];

export function LaunchReadySections() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-emerald-700">Who this is for</p>
            <h2 className="mt-4 text-[40px] font-[900] leading-[1] tracking-[-0.05em] text-slate-950 lg:text-[62px]">
              Built for employers with real payroll pressure.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[32px] border border-emerald-100 bg-[#f8faf7] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-[21px] font-[900] tracking-[-0.04em] text-slate-950">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf7] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-emerald-700">MVP onboarding</p>
              <h2 className="mt-4 text-[40px] font-[900] leading-[1] tracking-[-0.05em] text-slate-950 lg:text-[62px]">
                From enquiry to live salary access.
              </h2>
              <p className="mt-5 max-w-[420px] text-[15px] leading-[1.85] text-slate-600">
                MobPae is designed to get employers started with clear setup steps and enough control for real-world testing.
              </p>
            </div>

            <div className="rounded-[36px] border border-emerald-100 bg-white p-5 shadow-soft">
              <div className="grid gap-3">
                {timeline.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-[24px] bg-[#f8faf7] px-4 py-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-[12px] font-[900] text-white">
                      {index + 1}
                    </span>
                    <p className="text-[15px] font-[900] text-slate-950">{item}</p>
                    <CheckCircle2 size={18} className="ml-auto flex-shrink-0 text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="rounded-[38px] border border-emerald-100 bg-slate-950 p-7 text-white shadow-[0_28px_80px_rgba(6,78,59,0.18)] lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[12px] font-[900] uppercase tracking-[0.16em] text-emerald-200/70">Trust positioning</p>
                <h2 className="mt-3 text-[34px] font-[900] leading-tight tracking-[-0.05em] lg:text-[52px]">
                  Not a loan-first experience.
                </h2>
                <p className="mt-5 max-w-[560px] text-[15px] leading-[1.85] text-white/66">
                  MobPae is employer-backed earned salary access with transparent deductions, policy limits, approval gates and payroll recovery visibility.
                </p>
                <a href="/contact" className="mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[900] text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-50">
                  Book a demo <ArrowRight size={16} />
                </a>
              </div>
              <div className="grid gap-3">
                <TrustRow icon={<ShieldCheck size={18} />} text="Employer-backed approval flow" />
                <TrustRow icon={<BadgeIndianRupee size={18} />} text="Transparent salary deduction" />
                <TrustRow icon={<Landmark size={18} />} text="Payroll recovery and settlement tracking" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-300/16 text-emerald-200">{icon}</span>
      <p className="text-[14px] font-[900] text-white/82">{text}</p>
    </div>
  );
}
