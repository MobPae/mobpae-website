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
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">Who this is for</p>
            <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-tighter text-[#111827] lg:text-[48px]">
              Built for employers with real payroll pressure.
            </h2>
          </div>

          <div className="theme-card-grid grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[32px] border border-[#E5E7EB] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-[#F0EDFF] text-[#4E32CA]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-[21px] font-[700] tracking-tighter text-[#111827]">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-[#6B7280]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">MVP onboarding</p>
              <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-tighter text-[#111827] lg:text-[48px]">
                From enquiry to live salary access.
              </h2>
              <p className="mt-5 max-w-[420px] text-[15px] leading-[1.85] text-[#6B7280]">
                MobPae is designed to get employers started with clear setup steps and enough control for real-world testing.
              </p>
            </div>

            <div className="rounded-[36px] border border-[#E5E7EB] bg-white p-5 shadow-soft">
              <div className="grid gap-3">
                {timeline.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-[24px] bg-[#F8F9FC] px-4 py-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#5B3CE3] text-[12px] font-[700] text-white">
                      {index + 1}
                    </span>
                    <p className="text-[15px] font-[700] text-[#111827]">{item}</p>
                    <CheckCircle2 size={18} className="ml-auto flex-shrink-0 text-[#5B3CE3]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="rounded-[38px] border border-[#DED7FF] bg-[#F0EDFF] p-7 text-[#111827] shadow-[0_22px_60px_rgba(91,60,227,0.12)] lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[12px] font-[700] uppercase tracking-[0.16em] text-[#4E32CA]">Trust positioning</p>
                <h2 className="mt-3 text-[34px] font-[700] leading-tight tracking-tighter lg:text-[52px]">
                  Not a loan-first experience.
                </h2>
                <p className="mt-5 max-w-[560px] text-[15px] leading-[1.85] text-[#6B7280]">
                  MobPae is employer-backed earned salary access with transparent deductions, policy limits, approval gates and payroll recovery visibility.
                </p>
                <a href="/contact" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[700] text-[#111827] transition hover:-translate-y-1 hover:bg-[#F8F9FC]">
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
    <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/72 px-4 py-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E9F6F6] text-[#4E32CA]">{icon}</span>
      <p className="text-[14px] font-[700] text-[#303246]">{text}</p>
    </div>
  );
}
