import { Database, Eye, FileCheck2, LockKeyhole, Mail, ShieldCheck, UserCheck } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

const privacySections = [
  {
    icon: <Database size={22} />,
    title: "What we collect",
    body: "We collect the information needed to run MobPae securely: employee profile details, employer and payroll context, KYC and bank verification data, salary advance requests, repayment activity, device information and support communication.",
  },
  {
    icon: <Eye size={22} />,
    title: "How we use data",
    body: "We use this data to verify identity, calculate eligibility, process salary advance requests, support employer approvals, manage repayments, prevent fraud, operate notifications and improve the platform experience.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "How we protect it",
    body: "MobPae uses access controls, audit logs, encrypted communication, secure authentication and operational safeguards so sensitive financial data is handled carefully across employee, employer and admin workflows.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Your rights",
    body: "You may request access, correction or deletion of your personal data where permitted by law and business obligations. We do not sell personal information.",
  },
];

const trustPoints = ["KYC and bank data are handled with role-based access", "Salary requests are logged through auditable workflow events", "Employer and admin access is limited to required operational use"];

export function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <SEO
        title="Privacy Policy"
        description="Learn how MobPae collects, uses and protects employee, employer, salary access, KYC and bank verification data."
        path="/privacy-policy"
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-emerald-100">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[460px] w-[460px] rounded-full bg-emerald-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-100/70 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <LockKeyhole size={14} className="text-emerald-700" />
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">Privacy first</span>
              </div>
              <h1 className="mt-6 max-w-[640px] text-[48px] font-[900] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[72px]">
                Your financial data should feel protected.
              </h1>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.85] text-slate-600">
                MobPae handles sensitive workplace and salary access information. This policy explains what we collect, why we use it, and how we keep the experience transparent.
              </p>
              <p className="mt-5 text-[12px] font-[800] uppercase tracking-[0.14em] text-slate-400">Last updated: January 2026</p>
            </div>

            <div className="rounded-[38px] border border-white bg-white/82 p-5 shadow-soft backdrop-blur-xl">
              <div className="rounded-[30px] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-[900] uppercase tracking-[0.14em] text-emerald-100/60">MobPae trust layer</p>
                    <h2 className="mt-3 text-[30px] font-[900] leading-tight tracking-[-0.04em]">Built around controlled access.</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-400/15 text-emerald-200">
                    <ShieldCheck size={27} />
                  </div>
                </div>
                <div className="mt-7 grid gap-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-3">
                      <FileCheck2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-300" />
                      <p className="text-[13px] font-[700] leading-relaxed text-white/74">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {privacySections.map((section) => (
            <article key={section.title} className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.045)]">
              <div className="flex items-start gap-4">
                <div className="flex h-13 w-13 h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-[21px] font-[900] tracking-[-0.04em] text-slate-950">{section.title}</h2>
                  <p className="mt-3 text-[14px] leading-[1.85] text-slate-600">{section.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[34px] border border-emerald-100 bg-white p-6 shadow-soft lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[26px] font-[900] tracking-[-0.05em] text-slate-950">Need help with privacy?</h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-[1.8] text-slate-600">
                For data access, correction or privacy questions, contact our team. We will route your request to the right operational owner.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:privacy@mobpae.com" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-[13px] font-[900] text-white transition hover:bg-emerald-700">
                <Mail size={15} /> privacy@mobpae.com
              </a>
              <a href="tel:+919227012145" className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 text-[13px] font-[900] text-emerald-800 transition hover:bg-emerald-100">
                +91 92270 12145
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
