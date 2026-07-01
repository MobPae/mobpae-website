import { ArrowRight, BadgeIndianRupee, Code2, Compass, Headphones, Palette, Rocket, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import careersTeamHero from "../assets/careers-team-hero.png";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

const roles = [
  {
    icon: <Code2 size={22} />,
    name: "Engineering",
    desc: "Build secure, reliable product systems for salary access, approvals, sessions, notifications and settlements.",
  },
  {
    icon: <Palette size={22} />,
    name: "Product & Design",
    desc: "Create calm, simple experiences for employees, employers and admins working with sensitive financial workflows.",
  },
  {
    icon: <Headphones size={22} />,
    name: "Operations",
    desc: "Keep onboarding, verification, disbursal, recovery and employer support moving with clarity.",
  },
];

const benefits = [
  {
    icon: <Compass size={20} />,
    title: "Purpose-led work",
    desc: "Help employees get breathing room before payday without pushing them into confusing credit products.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trust by default",
    desc: "We build carefully around payroll data, KYC, bank verification and employer-controlled workflows.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Fast MVP energy",
    desc: "Small team, high ownership, quick iteration and practical decisions that move the product forward.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Room to grow",
    desc: "Own meaningful product areas early and shape how MobPae scales across employers.",
  },
];

const principles = ["Human before financial", "Simple beats clever", "Trust is a product feature"];

export function CareersPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <SEO
        title="Careers"
        description="Join MobPae to build employer-backed salary access technology that helps employees feel financially calmer before payday."
        path="/careers"
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#E5E7EB]">

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <Sparkles size={14} className="text-[#4E32CA]" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#111827]">Careers at MobPae</span>
              </div>

              <h1 className="mt-6 max-w-[680px] text-[42px] font-[700] leading-[0.96] tracking-normal text-[#111827] sm:text-[64px]">
                Build technology that makes payday less stressful.
              </h1>

              <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-[#6B7280]">
                We are building employer-backed salary access for modern Indian workplaces. Join a small team turning financial wellness into a product people can trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#roles"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#5B3CE3] px-6 text-[14px] font-[700] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)] transition-all hover:-translate-y-1 hover:bg-[#4E32CA]"
                >
                  Explore roles
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:careers@mobpae.com"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/86 px-6 text-[14px] font-[700] text-[#111827] shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-[#111827]"
                >
                  careers@mobpae.com
                </a>
              </div>
            </div>

            <div className="relative min-h-[500px]">
              <div className="absolute inset-x-0 bottom-4 top-8 rounded-[44px] bg-gradient-to-br from-[#F0EDFF] via-[#E9F6F6] to-[#FDF6EB] shadow-[0_40px_100px_rgba(91,60,227,0.14)]" />
              <div className="absolute inset-x-3 bottom-8 top-0 overflow-hidden rounded-[40px] border border-white/40 bg-white shadow-[0_34px_90px_rgba(15,23,42,0.18)] lg:inset-x-8">
                <img
                  src={careersTeamHero}
                  alt="MobPae product team collaborating in a modern office"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0EDFF]/35 via-transparent to-white/10" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/30 bg-white/88 p-5 shadow-soft backdrop-blur-xl">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <HeroMetric value="Small" label="focused team" />
                    <HeroMetric value="High" label="ownership" />
                    <HeroMetric value="Real" label="impact" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-14 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[12px] font-[700] text-[#111827] shadow-soft backdrop-blur-xl">
                <BadgeIndianRupee size={14} className="mr-1 inline" /> salary wellness
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="rounded-[30px] border border-[#E5E7EB] bg-[#F8F9FC] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#4E32CA]">
                  <Users size={21} />
                </div>
                <p className="mt-5 text-[24px] font-[700] leading-tight tracking-normal text-[#111827]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="bg-[#F8F9FC] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">Open tracks</p>
              <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-normal text-[#111827] lg:text-[48px]">
                Where you can build.
              </h2>
            </div>
            <p className="max-w-[420px] text-[14px] leading-[1.8] text-[#6B7280]">
              We are hiring around product depth and operational excellence. Even if a role is not listed, thoughtful builders can still reach out.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <article key={role.name} className="group rounded-[34px] border border-[#E5E7EB] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.045)] transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F0EDFF] text-[#4E32CA]">
                  {role.icon}
                </div>
                <h3 className="mt-6 text-[24px] font-[700] tracking-normal text-[#111827]">{role.name}</h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-[#6B7280]">{role.desc}</p>
                <a href="mailto:careers@mobpae.com" className="mt-6 inline-flex items-center gap-2 text-[13px] font-[700] text-[#4E32CA] transition-all group-hover:gap-3">
                  Share your profile <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">Why MobPae</p>
              <h2 className="mt-4 text-[36px] font-[700] leading-[1] tracking-normal text-[#111827] lg:text-[48px]">
                The work has a human edge.
              </h2>
              <p className="mt-5 max-w-[420px] text-[15px] leading-[1.85] text-[#6B7280]">
                MobPae sits at the intersection of salary, trust, employer policy and day-to-day financial stress. That makes the details matter.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[32px] border border-[#E5E7EB] bg-[#F8F9FC] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5B3CE3] text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-5 text-[20px] font-[700] tracking-normal text-[#111827]">{benefit.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-[1.75] text-[#6B7280]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="light-feature-panel mt-14 rounded-[36px] p-7 lg:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-[700] uppercase tracking-[0.16em] text-white/80/70">Join the build</p>
                <h2 className="mt-3 text-[32px] font-[700] leading-tight tracking-normal lg:text-[44px]">
                  Help make salary access feel safe, simple and dignified.
                </h2>
              </div>
              <a
                href="mailto:careers@mobpae.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-[700] text-[#111827] transition hover:-translate-y-1 hover:bg-[#F8F9FC]"
              >
                Send your profile <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/72 px-4 py-3">
      <p className="text-[20px] font-[700] leading-none tracking-normal text-[#111827]">{value}</p>
      <p className="mt-1 text-[11px] font-[600] text-[#8D90A3]">{label}</p>
    </div>
  );
}
