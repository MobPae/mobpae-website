import { AlertTriangle, BadgeCheck, Building2, FileText, Landmark, LockKeyhole, Scale, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

const termSections = [
  {
    num: "01",
    icon: <BadgeCheck size={22} />,
    title: "Acceptance",
    body: "By accessing or using MobPae, you confirm that you have read, understood and agree to these Terms, our Privacy Policy and any notices that apply to your role as employee, employer or administrator.",
  },
  {
    num: "02",
    icon: <UserRoundCheck size={22} />,
    title: "User responsibilities",
    body: "You must provide accurate information, protect your account credentials and use MobPae only for lawful salary access, verification, approval, repayment and settlement activities.",
  },
  {
    num: "03",
    icon: <Building2 size={22} />,
    title: "Employer-backed access",
    body: "Salary advance access depends on employer configuration, employee eligibility, KYC, bank verification, membership status and approval workflow. MobPae is not a traditional loan product.",
  },
  {
    num: "04",
    icon: <AlertTriangle size={22} />,
    title: "Service limitations",
    body: "MobPae is provided on an as-is and as-available basis. We work to keep services reliable, but availability can depend on banking partners, employer actions, payroll schedules and operational checks.",
  },
  {
    num: "05",
    icon: <Scale size={22} />,
    title: "Governing law",
    body: "These Terms are governed by the laws of India. Disputes will be handled in the appropriate courts with competent jurisdiction.",
  },
];

const flow = ["Employee request", "Employer approval", "Admin review", "Disbursal", "Payroll recovery"];

export function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <SEO
        title="Terms of Service"
        description="Review the terms for using MobPae across employee salary access requests, employer approvals, admin operations, disbursal and payroll recovery."
        path="/terms"
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#E5E7EB]">
        <div className="pointer-events-none absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#F0EDFF]/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-20 h-[430px] w-[430px] rounded-full bg-[#E9F6F6] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <FileText size={14} className="text-[#4E32CA]" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#111827]">Terms of service</span>
              </div>
              <h1 className="mt-6 max-w-[650px] text-[42px] font-[700] leading-[0.96] tracking-normal text-[#111827] sm:text-[60px]">
                Clear rules for salary access.
              </h1>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.85] text-[#6B7280]">
                These terms define how MobPae should be used across employee requests, employer approvals, admin operations, disbursal and payroll recovery.
              </p>
              <p className="mt-5 text-[12px] font-[600] uppercase tracking-[0.14em] text-[#B7B9C7]">Last updated: January 2026</p>
            </div>

            <div className="rounded-[38px] border border-white bg-white/82 p-5 shadow-soft backdrop-blur-xl">
              <div className="light-feature-panel rounded-[30px] p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-[700] uppercase tracking-[0.14em] text-white/60">MobPae workflow</p>
                    <h2 className="mt-3 text-[30px] font-[700] leading-tight tracking-normal">Structured access, not informal borrowing.</h2>
                  </div>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-white/10 text-white/80">
                    <ShieldCheck size={27} />
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  {flow.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-[700] text-white/80">
                        {index + 1}
                      </span>
                      <p className="text-[13px] font-[600] text-white/78">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5">
          {termSections.map((section) => (
            <article key={section.num} className="rounded-[32px] border border-[#E5E7EB] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.045)]">
              <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5B3CE3] text-[13px] font-[700] text-white">{section.num}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#4E32CA]">{section.icon}</span>
                </div>
                <div>
                  <h2 className="text-[24px] font-[700] tracking-normal text-[#111827]">{section.title}</h2>
                  <p className="mt-3 text-[14px] leading-[1.85] text-[#6B7280]">{section.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[34px] border border-[#E5E7EB] bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#4E32CA]">
              <LockKeyhole size={21} />
            </div>
            <h2 className="mt-5 text-[24px] font-[700] tracking-normal text-[#111827]">Account safety</h2>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6B7280]">
              Keep login details private and report unusual activity. Sessions, approvals and sensitive actions may be monitored for platform safety.
            </p>
          </div>
          <div className="rounded-[34px] border border-[#E5E7EB] bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#4E32CA]">
              <Landmark size={21} />
            </div>
            <h2 className="mt-5 text-[24px] font-[700] tracking-normal text-[#111827]">Repayment clarity</h2>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6B7280]">
              Approved advances are expected to be recovered as payroll deductions or through the configured recovery process shown in MobPae.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
