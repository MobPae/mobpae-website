import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
    points?: string[];
  }>;
};

const pageContent: Record<string, PageContent> = {
  employerBenefits: {
    eyebrow: "Employer Benefits",
    title: "A practical benefit employees actually use.",
    description:
      "MobPae supports retention, productivity and financial wellness without asking employers to become lenders.",
    sections: [
      {
        title: "Retention and wellbeing",
        body: "Financial pressure affects focus and loyalty. Salary access helps employees handle urgent needs without informal borrowing.",
        points: [
          "More employee trust",
          "Reduced month-end stress",
          "A visible wellness benefit",
        ],
      },
      {
        title: "Operational clarity",
        body: "Approvals, disbursals, recoveries and settlements remain traceable across the workflow.",
        points: [
          "Request status visibility",
          "Recovery reports",
          "Settlement tracking",
        ],
      },
    ],
  },
  employees: {
    eyebrow: "For Employees",
    title: "Access earned salary with a calmer experience.",
    description:
      "Employees get a simple mobile-first flow to complete setup, request advances, track repayment and stay informed.",
    sections: [
      {
        title: "Clear before payday access",
        body: "Employees can see their available access amount, request an advance and track what happens next.",
        points: ["Available access", "Request tracking", "Repayment schedule"],
      },
      {
        title: "Simple setup journey",
        body: "KYC, bank account and membership steps are presented clearly so employees know what is pending and what is complete.",
        points: ["KYC status", "Bank status", "Membership status"],
      },
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Everything you need to know.",
    description:
      "A quick overview of MobPae, earned wage access, employer approvals, payroll recovery and data protection.",
    sections: [
      {
        title: "Is MobPae a loan?",
        body: "No. MobPae is employer-backed earned salary access. It is not positioned as a loan or open-ended credit product.",
      },
      {
        title: "Who approves requests?",
        body: "The employer reviews salary access requests first. Admin operations handle verification, disbursal and settlement visibility.",
      },
      {
        title: "Does it affect payroll?",
        body: "MobPae is designed around payroll date and cutoff logic so recoveries can align with the correct salary cycle.",
      },
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "Build financial wellness for the modern workforce.",
    description:
      "We are early, focused and product-led. If you care about fintech, design and responsible salary access, MobPae is the kind of problem worth building.",
    sections: [
      {
        title: "Current openings",
        body: "We are not listing public roles at the moment, but we are always open to exceptional product, engineering, design and operations talent.",
        points: [
          "Product engineering",
          "Frontend design systems",
          "Operations and support",
        ],
      },
      {
        title: "Reach out",
        body: "Send your profile to support@mobpae.com with the area where you can create the most impact.",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Notes on salary access, payroll and employee wellness.",
    description:
      "Longer-form MobPae articles will live here. For now, this page introduces the topics we will publish around.",
    sections: [
      {
        title: "Upcoming topics",
        body: "We will write about employee financial stress, payroll-aware benefits, responsible earned wage access and operational best practices.",
        points: [
          "Earned wage access basics",
          "Employer wellness programs",
          "Payroll recovery design",
        ],
      },
    ],
  },
  helpCenter: {
    eyebrow: "Help Center",
    title: "Support for employers and employees.",
    description:
      "Find quick guidance on onboarding, employee setup, salary requests, repayments and account questions.",
    sections: [
      {
        title: "For employees",
        body: "Complete KYC, add bank account details, activate membership and track salary advance requests from the employee app.",
      },
      {
        title: "For employers",
        body: "Review employee requests, approve eligible advances and coordinate recoveries with your payroll cycle.",
      },
      {
        title: "Need help?",
        body: "Email support@mobpae.com and our team will respond.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy Policy",
    title: "How MobPae handles your information.",
    description:
      "This policy explains how information submitted through the website and enquiry forms may be collected, used and protected.",
    sections: [
      {
        title: "Information we collect",
        body: "We may collect company name, contact name, email address, phone number, employee count and message details when you submit an enquiry.",
      },
      {
        title: "How we use information",
        body: "We use submitted information to contact you, understand your requirements, provide product information and improve our services.",
      },
      {
        title: "Data protection",
        body: "We take reasonable steps to protect submitted information from unauthorized access, misuse or disclosure.",
      },
      {
        title: "Contact",
        body: "For privacy-related questions, contact us at support@mobpae.com.",
      },
    ],
  },
  terms: {
    eyebrow: "Terms & Conditions",
    title: "Terms for using the MobPae website.",
    description:
      "These terms govern use of the MobPae website and public enquiry experience.",
    sections: [
      {
        title: "Website use",
        body: "The content on this website is provided for general product information and may be updated without prior notice.",
      },
      {
        title: "Enquiries",
        body: "Submitting an enquiry does not create a contract or guarantee service availability. Our team may contact you to understand your requirements.",
      },
      {
        title: "Limitation",
        body: "MobPae is not liable for losses arising from website misuse, temporary unavailability or reliance on general website content.",
      },
      {
        title: "Contact",
        body: "For terms-related questions, contact us at support@mobpae.com.",
      },
    ],
  },
};

export function EmployerBenefitsPage() {
  return (
    <StaticPage
      content={pageContent.employerBenefits}
      icon={<BadgeCheck size={22} />}
    />
  );
}

export function EmployeesPage() {
  const steps = [
    ["Complete setup", "See KYC, bank and membership status in one place."],
    ["View available access", "Understand what is available before making a request."],
    ["Track every status", "Follow approval, transfer and repayment without guessing."],
  ];

  return (
    <StaticShell>
      <section className="bg-[linear-gradient(155deg,#f4f7ff_0%,#fff_62%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff] text-[#315eff]">
              <Users size={22} aria-hidden="true" />
            </span>
            <p className="mt-7 text-[12px] font-[900] uppercase tracking-[0.2em] text-[#315eff]">
              For Employees
            </p>
            <h1 className="mt-5 max-w-[720px] text-[42px] font-[900] leading-[1.03] tracking-[-0.045em] text-[#0B1026] lg:text-[64px]">
              Access earned salary with a calmer experience.
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] font-[500] leading-[1.8] text-[#5C647A]">
              A mobile-first journey for setup, requests, status tracking and repayment visibility—without hidden steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/#enquiry" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#315eff] px-6 text-[14px] font-[800] text-white no-underline">
                Bring MobPae to your workplace <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/how-it-works" className="inline-flex min-h-12 items-center rounded-lg border border-[#d8def0] bg-white px-6 text-[14px] font-[800] text-[#21185F] no-underline">
                See how it works
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[280px]">
            <p className="m-0 mb-3 text-center text-[11px] font-[800] uppercase tracking-[0.14em] text-[#8A90A3]">
              The real MobPae employee app
            </p>
            <div className="overflow-hidden rounded-[20px] border border-[#dce5ff] shadow-[0_30px_90px_rgba(49,94,255,0.2)]">
              <img
                src="/product-shots/dashboard.png"
                alt="MobPae employee app dashboard showing available salary advance, limit, and recent activity"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="employee-journey-title" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[700px]">
            <p className="text-[12px] font-[900] uppercase tracking-[0.2em] text-[#315eff]">The employee journey</p>
            <h2 id="employee-journey-title" className="mt-3 text-[34px] font-[900] tracking-[-0.035em] text-[#0B1026] lg:text-[46px]">Clear at every step.</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {steps.map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-[#E6E8F2] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.045)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ff] text-[13px] font-[900] text-[#315eff]">0{index + 1}</span>
                <h3 className="mt-8 text-[21px] font-[900] text-[#0B1026]">{title}</h3>
                <p className="mt-3 text-[14px] font-[500] leading-[1.75] text-[#5C647A]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F7F9] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#E6E8F2] bg-white p-7">
            <ShieldCheck size={24} className="text-[#315eff]" aria-hidden="true" />
            <h2 className="mt-5 text-[25px] font-[900] text-[#0B1026]">Know what happens next.</h2>
            <p className="mt-3 text-[14px] leading-[1.75] text-[#5C647A]">Request tracking and repayment visibility keep the experience understandable from start to finish.</p>
          </article>
          <article className="rounded-2xl border border-[#E6E8F2] bg-white p-7">
            <HelpCircle size={24} className="text-[#315eff]" aria-hidden="true" />
            <h2 className="mt-5 text-[25px] font-[900] text-[#0B1026]">Need help?</h2>
            <p className="mt-3 text-[14px] leading-[1.75] text-[#5C647A]">Visit the FAQs or contact support for onboarding, account and request questions.</p>
            <div className="mt-5 flex flex-wrap gap-4"><Link to="/faqs" className="font-[800] text-[#315eff]">Read FAQs →</Link><a href="mailto:support@mobpae.com" className="font-[800] text-[#315eff]">Email support →</a></div>
          </article>
        </div>
      </section>
    </StaticShell>
  );
}

export function FaqsPage() {
  return (
    <StaticPage content={pageContent.faqs} icon={<HelpCircle size={22} />} />
  );
}

export function CareersPage() {
  return (
    <StaticPage content={pageContent.careers} icon={<Users size={22} />} />
  );
}

export function BlogPage() {
  return (
    <StaticPage content={pageContent.blog} icon={<FileText size={22} />} />
  );
}

export function HelpCenterPage() {
  return (
    <StaticPage
      content={pageContent.helpCenter}
      icon={<HelpCircle size={22} />}
    />
  );
}

export function ContactPage() {
  return (
    <StaticShell>
      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
            Contact Us
          </p>
          <h1 className="mt-5 text-[42px] font-[900] leading-[1.04] tracking-[-0.045em] text-[#0B1026] lg:text-[64px]">
            Let us build a financially stronger workforce.
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] font-[500] leading-[1.85] text-[#5C647A]">
            Tell us about your team and we will help you understand how MobPae
            can fit your payroll cycle and employee wellness goals.
          </p>

          <div className="mt-10 grid gap-4">
            <ContactItem
              icon={<Mail size={18} />}
              label="Email"
              value="support@mobpae.com"
            />
            <ContactItem
              icon={<MapPin size={18} />}
              label="Address"
              value="Gujarat, Ahmedabad - 382470"
            />
          </div>
        </div>

        <div className="rounded-[30px] border border-[#E6E8F2] bg-white p-8 shadow-[0_28px_90px_rgba(49,94,255,0.13)]">
          <p className="text-[13px] font-[900] text-[#315eff]">Book a Demo</p>
          <h2 className="mt-3 text-[28px] font-[900] tracking-[-0.03em] text-[#0B1026]">
            Use the enquiry form on the home page.
          </h2>
          <p className="mt-4 text-[14px] font-[500] leading-[1.75] text-[#667085]">
            MobPae keeps one connected enquiry form so every website lead enters
            the same backend flow.
          </p>
          <Link
            to="/#enquiry"
            className="mt-8 inline-flex h-[52px] items-center gap-3 rounded-xl bg-[#315eff] px-7 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(49,94,255,0.32)]"
          >
            Open Enquiry Form <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </StaticShell>
  );
}

export function PrivacyPolicyPage() {
  return (
    <StaticPage
      content={pageContent.privacy}
      icon={<ShieldCheck size={22} />}
    />
  );
}

export function TermsPage() {
  return (
    <StaticPage content={pageContent.terms} icon={<FileText size={22} />} />
  );
}

function StaticPage({
  content,
  icon,
}: {
  content: PageContent;
  icon: ReactNode;
}) {
  return (
    <StaticShell>
      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-[760px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f5ff] text-[#315eff]">
            {icon}
          </div>
          <p className="mt-7 text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-[42px] font-[900] leading-[1.04] tracking-[-0.045em] text-[#0B1026] lg:text-[64px]">
            {content.title}
          </h1>
          <p className="mt-6 text-[16px] font-[500] leading-[1.85] text-[#5C647A]">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[26px] border border-[#E6E8F2] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.045)]"
            >
              <h2 className="text-[20px] font-[900] tracking-[-0.02em] text-[#0B1026]">
                {section.title}
              </h2>
              <p className="mt-4 text-[14px] font-[500] leading-[1.8] text-[#667085]">
                {section.body}
              </p>
              {section.points && (
                <div className="mt-6 grid gap-3">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-[13px] font-[800] text-[#252B42]"
                    >
                      <CheckCircle2 size={16} className="text-[#315eff]" />
                      {point}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </StaticShell>
  );
}

function StaticShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Manrope, ui-sans-serif, sans-serif",
        color: "#0B0D12",
        background: "#fff",
      }}
    >
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#E6E8F2] bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f5ff] text-[#315eff]">
        {icon}
      </span>
      <div>
        <p className="text-[12px] font-[900] uppercase tracking-[0.12em] text-[#8A90A3]">
          {label}
        </p>
        <p className="mt-1 text-[15px] font-[800] text-[#0B1026]">{value}</p>
      </div>
    </div>
  );
}
