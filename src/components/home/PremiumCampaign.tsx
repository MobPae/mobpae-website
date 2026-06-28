import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from "lucide-react";

const proofPoints = [
  ["10%", "guided access limit"],
  ["24h", "fast response target"],
  ["12x", "yearly flexibility"],
  ["₹499", "employee membership"],
];

const productCards = [
  {
    icon: <UserRound size={22} />,
    title: "Employee app",
    copy: "A calm mobile experience that makes salary access easy to understand and follow.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Employer portal",
    copy: "A clear workplace layer for teams to manage access, visibility and benefit adoption.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Control layer",
    copy: "A structured operating view for keeping salary access consistent, traceable and controlled.",
  },
];

const workflow = [
  "Employee gets a clear benefit experience",
  "Employer keeps policy-level confidence",
  "Teams stay aligned on every money movement",
  "Salary day remains predictable",
  "The cycle closes with clarity",
];

const trust = [
  "Clear limits make the benefit feel responsible",
  "Employees always understand what happens next",
  "Employers get a controlled workplace experience",
  "Records stay organized across the salary-access journey",
];

export function PremiumCampaign() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#fbfbfe]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-18%] top-[-28%] h-[680px] w-[680px] rounded-full bg-[#f0edff] blur-[120px]" />
          <div className="absolute right-[-18%] top-0 h-[620px] w-[620px] rounded-full bg-[#e9f6f6] blur-[130px]" />
          <div className="absolute bottom-[-28%] left-[35%] h-[540px] w-[540px] rounded-full bg-[#fdf6eb] blur-[130px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-16">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="brand-dark-card premium-rise min-h-[680px] rounded-[44px] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="premium-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-[700] uppercase tracking-[0.16em] text-white/75">
                  <Sparkles size={14} className="text-[#b8acff]" />
                  Built for salary moments
                </span>
                <span className="premium-chip inline-flex rounded-full bg-[#fdf6eb] px-4 py-2 text-[11px] font-[700] text-[#c7686b]">
                  Not a loan-first product
                </span>
              </div>

              <div className="premium-copy-enter mt-14 max-w-[780px]">
                <div className="hero-strapline inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fea1a2] shadow-[0_0_18px_rgba(254,161,162,0.8)]" />
                  <span className="text-[12px] font-[700] uppercase tracking-[0.18em] text-[#d8d2ff]">
                    Give salary access the calm it deserves
                  </span>
                </div>
                <h1 className="mt-5 text-[46px] font-[700] leading-[0.92] tracking-normal text-white sm:text-[68px] lg:text-[86px]">
                  Beating Your{" "}
                  <span className="hero-headline-accent">Month End</span>{" "}
                  Crunch
                </h1>
                <p className="mt-7 max-w-[650px] text-[16px] leading-[1.8] text-white/68">
                  A premium employee benefit for earned salary access, built to
                  feel calm for employees and controlled for employers.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="premium-button group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[700] text-[#5b3ce3] transition-all hover:-translate-y-1 hover:bg-[#f8f9fc]"
                >
                  Book a demo
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#workflow"
                  className="premium-button inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/10 px-6 text-[14px] font-[700] text-white transition-all hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore the idea
                </a>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-4">
                {proofPoints.map(([value, label]) => (
                  <div
                    key={label}
                    className="premium-stat rounded-[24px] border border-white/10 bg-white/10 p-4"
                  >
                    <p className="text-[26px] font-[700] leading-none tracking-normal text-white">
                      {value}
                    </p>
                    <p className="mt-2 text-[12px] font-[700] leading-snug text-white/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="salary-orbit premium-rise premium-rise-delay relative min-h-[410px] overflow-hidden rounded-[44px] border border-[#ded7ff] bg-[#f7f5ff] shadow-[0_26px_80px_rgba(17,24,39,0.08)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(91,60,227,0.22),transparent_32%),radial-gradient(circle_at_15%_15%,rgba(254,161,162,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(159,215,221,0.34),transparent_28%)]" />
                <div className="orbit-ring orbit-ring-one" />
                <div className="orbit-ring orbit-ring-two" />
                <div className="orbit-ring orbit-ring-three" />
                <div className="orbit-node orbit-node-one">
                  <BadgeIndianRupee size={18} />
                </div>
                <div className="orbit-node orbit-node-two">
                  <ShieldCheck size={18} />
                </div>
                <div className="orbit-node orbit-node-three">
                  <Sparkles size={18} />
                </div>
                <div className="orbit-core absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-white/70 bg-white/80 p-6 text-center shadow-[0_28px_80px_rgba(91,60,227,0.18)] backdrop-blur-2xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#5b3ce3] text-white">
                    <WalletCards size={25} />
                  </div>
                  <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.18em] text-[#8d90a3]">
                    Salary access
                  </p>
                  <p className="mt-2 text-[36px] font-[700] leading-none tracking-normal text-[#111827]">
                    Calm
                  </p>
                  <p className="mt-3 text-[13px] font-[600] leading-relaxed text-[#6b7280]">
                    A premium benefit employees understand instantly.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="premium-float-card rounded-[34px] border border-[#ded7ff] bg-white p-5 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0edff] text-[#5b3ce3]">
                    <WalletCards size={21} />
                  </div>
                  <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#8d90a3]">
                    Employee feels
                  </p>
                  <p className="mt-2 text-[30px] font-[700] leading-none tracking-normal text-[#111827]">
                    ₹5,400
                  </p>
                  <p className="mt-2 text-[13px] font-[600] text-[#6b7280]">
                    clear available access
                  </p>
                </div>
                <div className="premium-float-card rounded-[34px] border border-[#f8e3d8] bg-[#fdf6eb] p-5 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#c7686b]">
                    <Landmark size={21} />
                  </div>
                  <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#8d90a3]">
                    Employer gets
                  </p>
                  <p className="mt-2 text-[30px] font-[700] leading-none tracking-normal text-[#111827]">
                    Control
                  </p>
                  <p className="mt-2 text-[13px] font-[600] text-[#6b7280]">
                    without workplace friction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="text-[40px] font-[700] leading-none tracking-normal text-[#111827] lg:text-[48px]">
                Product ecosystem
              </h2>
              <p className="mt-5 text-[26px] font-[700] leading-[1.08] tracking-normal text-[#111827] lg:text-[34px]">
                One premium experience across every salary-access moment.
              </p>
            </div>
            <p className="max-w-[620px] text-[15px] leading-[1.85] text-[#6b7280]">
              MobPae is designed as a connected salary-access brand experience.
              Employees get confidence before payday, while workplace teams get
              a clean, controlled way to offer the benefit.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {productCards.map((card, index) => (
              <article
                key={card.title}
                className={`premium-product-card rounded-[36px] border p-7 shadow-soft ${
                  index === 1
                    ? "brand-dark-card border-transparent text-white"
                    : index === 2
                    ? "border-[#f8e3d8] bg-[#fdf6eb]"
                    : "border-[#d8f0f2] bg-[#e9f6f6]"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-3xl ${
                    index === 1
                      ? "bg-white text-[#5b3ce3]"
                      : "bg-white text-[#5b3ce3]"
                  }`}
                >
                  {card.icon}
                </div>
                <h3
                  className={`mt-7 text-[24px] font-[700] tracking-normal ${
                    index === 1 ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.85] ${
                    index === 1 ? "text-white/65" : "text-[#6b7280]"
                  }`}
                >
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="relative overflow-hidden bg-[#fbfbfe] py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute left-[-12%] top-0 h-[520px] w-[520px] rounded-full bg-[#f0edff] blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8">
            <h2 className="text-[40px] font-[700] leading-none tracking-normal text-[#111827] lg:text-[48px]">
              Built for confidence
            </h2>
          </div>
          <div className="rounded-[44px] bg-white p-5 shadow-[0_26px_90px_rgba(17,24,39,0.08)] lg:p-7">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="brand-dark-card rounded-[36px] p-7 lg:p-9">
                <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#b8acff]">
                  MobPae experience
                </p>
                <h2 className="mt-5 text-[28px] font-[700] leading-[1.08] tracking-normal text-white lg:text-[38px]">
                  A benefit journey people can trust.
                </h2>
                <p className="mt-6 text-[15px] leading-[1.85] text-white/65">
                  MobPae keeps the experience understandable for employees and
                  organized for employers, without making salary access feel
                  complicated.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <MiniProof value="5" label="clear journey moments" />
                  <MiniProof value="0" label="confusing guesswork" />
                </div>
              </div>

              <div className="grid gap-3">
                {workflow.map((item, index) => (
                  <div
                    key={item}
                    className="premium-step flex items-center gap-4 rounded-[26px] border border-[#e5e7eb] bg-[#f8f9fc] p-4"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[13px] font-[700] text-[#5b3ce3] shadow-soft">
                      0{index + 1}
                    </span>
                    <p className="text-[16px] font-[700] text-[#111827]">
                      {item}
                    </p>
                    {index < 4 && (
                      <ArrowRight
                        size={17}
                        className="ml-auto hidden text-[#b7b9c7] sm:block"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-mobpae" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-[40px] font-[700] leading-none tracking-normal text-[#111827] lg:text-[48px]">
                Why it matters
              </h2>
              <p className="mt-5 text-[26px] font-[700] leading-[1.08] tracking-normal text-[#111827] lg:text-[34px]">
                Employees need relief. Employers need discipline.
              </p>
              <p className="mt-5 max-w-[620px] text-[15px] leading-[1.85] text-[#6b7280]">
                MobPae turns salary access into a designed benefit instead of an
                informal month-end workaround. Employees get a calm experience.
                Employers keep the benefit clear, controlled and easy to manage.
              </p>
            </div>

            <div className="grid gap-3">
              {trust.map((item) => (
                <div
                  key={item}
                  className="premium-trust-row flex items-center gap-3 rounded-[24px] border border-[#e5e7eb] bg-[#fbfbfe] p-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f0edff] text-[#5b3ce3]">
                    <CheckCircle2 size={18} />
                  </span>
                  <p className="text-[14px] font-[700] leading-snug text-[#111827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#fbfbfe] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="premium-float-card rounded-[42px] border border-[#ded7ff] bg-[#f0edff] p-7 lg:p-9">
              <h2 className="text-[40px] font-[700] leading-none tracking-normal text-[#111827] lg:text-[48px]">
                Employee membership
              </h2>
              <p className="mt-5 text-[26px] font-[700] leading-[1.08] tracking-normal text-[#111827] lg:text-[34px]">
                Simple enough to explain in one line.
              </p>
              <p className="mt-5 text-[15px] leading-[1.85] text-[#6b7280]">
                One annual membership for employees to access MobPae. Employer
                platform pricing can be discussed during onboarding.
              </p>
            </div>

            <div className="brand-dark-card premium-rise rounded-[42px] p-7 lg:p-9">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#b8acff]">
                    Annual fee
                  </p>
                  <p className="mt-4 text-[72px] font-[700] leading-none tracking-normal text-white">
                    ₹499
                  </p>
                  <p className="mt-3 text-[14px] font-[600] text-white/58">
                    per employee membership
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[14px] font-[700] text-[#5b3ce3]"
                >
                  Start enquiry
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Simple membership",
                  "Clear payment step",
                  "Team-ready support",
                ].map((item) => (
                  <div
                    key={item}
                    className="premium-stat rounded-[22px] border border-white/10 bg-white/10 p-4"
                  >
                    <LockKeyhole size={17} className="text-[#b8acff]" />
                    <p className="mt-3 text-[12px] font-[700] leading-snug text-white/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MiniProof({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/10 p-4">
      <p className="text-[28px] font-[700] leading-none tracking-normal text-white">
        {value}
      </p>
      <p className="mt-2 text-[12px] font-[700] text-white/50">{label}</p>
    </div>
  );
}
