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
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#5659D9]">Who this is for</p>
            <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-normal text-[#191A2E] lg:text-[48px]">
              Built for employers with real payroll pressure.
            </h2>
          </div>

          <div className="theme-card-grid grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[32px] border border-[#E4E4EF] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-[#ECEBFF] text-[#5659D9]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-[21px] font-[700] tracking-normal text-[#191A2E]">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-[#62657A]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#5659D9]">MVP onboarding</p>
              <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-normal text-[#191A2E] lg:text-[48px]">
                From enquiry to live salary access.
              </h2>
              <p className="mt-5 max-w-[420px] text-[15px] leading-[1.85] text-[#62657A]">
                MobPae is designed to get employers started with clear setup steps and enough control for real-world testing.
              </p>
            </div>

            <div className="rounded-[36px] border border-[#E4E4EF] bg-white p-5 shadow-soft">
              <div className="grid gap-3">
                {timeline.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-[24px] bg-[#F8F9FC] px-4 py-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#7679FF] text-[12px] font-[700] text-white">
                      {index + 1}
                    </span>
                    <p className="text-[15px] font-[700] text-[#191A2E]">{item}</p>
                    <CheckCircle2 size={18} className="ml-auto flex-shrink-0 text-[#7679FF]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="rounded-[38px] border border-[#D8D7FF] bg-[#ECEBFF] p-7 text-[#191A2E] shadow-[0_22px_60px_rgba(86,89,217,0.12)] lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[12px] font-[700] uppercase tracking-[0.16em] text-[#5659D9]">Trust positioning</p>
                <h2 className="mt-3 text-[34px] font-[700] leading-tight tracking-normal lg:text-[52px]">
                  Not a loan-first experience.
                </h2>
                <p className="mt-5 max-w-[560px] text-[15px] leading-[1.85] text-[#62657A]">
                  MobPae is employer-backed earned salary access with transparent deductions, policy limits, approval gates and payroll recovery visibility.
                </p>
                <a href="/contact" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[700] text-[#191A2E] transition hover:-translate-y-1 hover:bg-[#F0F0F8]">
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
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E9F6F6] text-[#5659D9]">{icon}</span>
      <p className="text-[14px] font-[700] text-[#303246]">{text}</p>
    </div>
  );
}
