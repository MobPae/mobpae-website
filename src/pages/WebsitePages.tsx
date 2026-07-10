import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileText,
  HelpCircle,
  Landmark,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
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
  employers: {
    eyebrow: "For Employers",
    title: "Offer salary access without disrupting payroll.",
    description:
      "MobPae gives employers a controlled way to support teams before payday, with approval visibility and payroll-aware recoveries.",
    sections: [
      {
        title: "Employer-controlled access",
        body: "Employees can request access to earned salary, but the employer stays in control of approvals, policy context and salary-cycle visibility.",
        points: [
          "Request review",
          "Employee and salary context",
          "Payroll-aware recovery",
        ],
      },
      {
        title: "Built for HR and finance teams",
        body: "The flow reduces manual salary advance requests while giving teams a cleaner operating layer for approvals and recoveries.",
        points: [
          "Less manual follow-up",
          "Clear status tracking",
          "Audit-friendly history",
        ],
      },
    ],
  },
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
  howItWorks: {
    eyebrow: "How It Works",
    title: "Simple for everyone. Powerful for all.",
    description:
      "MobPae coordinates employee requests, employer approvals, disbursal visibility and payroll-cycle recovery in one flow.",
    sections: [
      {
        title: "1. Employee requests an advance",
        body: "An eligible employee requests access to a controlled portion of earned salary.",
      },
      {
        title: "2. Employer approves",
        body: "The employer reviews the request with policy, salary and history context.",
      },
      {
        title: "3. MobPae disburses",
        body: "Once approved by operations, the amount is transferred to the employee account.",
      },
      {
        title: "4. Recovery aligns with payroll",
        body: "Recovery is scheduled around the employer payroll cycle and tracked through settlement.",
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
  about: {
    eyebrow: "About MobPae",
    title: "Your Trusted Financial Partner",
    description:
      "MobPae is a fintech platform that enables salaried employees to access their earned wages before payday through employer-backed approvals. Our payroll-linked financial wellness ecosystem bridges the gap between payday and unexpected financial needs without encouraging debt dependency. The platform creates a win-win model for all stakeholders — employees receive timely liquidity, employers improve retention and productivity through enhanced financial well-being, and capital partners benefit from better portfolio quality through employer-assisted verification and automated salary deductions. Our vision is to build India's most trusted employer-powered financial wellness ecosystem, enabling responsible financial access while fostering sustainable and inclusive growth.",
    sections: [
      {
        title: "Why we exist",
        body: "Month-end pressure is real. MobPae gives companies a structured way to support people without informal advances or opaque credit.",
      },
      {
        title: "Our approach",
        body: "We focus on employer policy, transparent workflows, role-based access and payroll-aware recovery.",
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

const aboutStakeholders = [
  {
    title: "Employees",
    copy: "Timely earned-wage liquidity for real needs, without encouraging debt dependency.",
    icon: Users,
    tone: "bg-[#f5f7ff] text-[#315eff]",
  },
  {
    title: "Employers",
    copy: "A practical wellness benefit that can improve retention, productivity and trust.",
    icon: BriefcaseBusiness,
    tone: "bg-[#E9F6F6] text-[#0F766E]",
  },
  {
    title: "Capital Partners",
    copy: "Employer-assisted verification and automated salary deductions to support stronger portfolio quality.",
    icon: Landmark,
    tone: "bg-[#FDF6EB] text-[#B45309]",
  },
];

const founderProfiles = [
  {
    name: "Luhit Parajuli",
    role: "Co-Founder & Business Strategy Lead",
    initials: "LP",
    accent: "#315eff",
    intro:
      "Luhit Parajuli brings over 13 years of corporate experience across banking, business consulting, MSME advisory, and strategic growth initiatives.",
    bio: [
      "He has worked with a leading Public Sector Bank, gaining extensive experience in both Liabilities and Asset businesses, while developing deep expertise in financial services and credit assessment.",
      "Over the years, he has advised numerous MSMEs and startups on business growth, fundraising strategies, government schemes, startup ecosystem opportunities, financial structuring, and organizational development.",
      "His strong understanding of the financial ecosystem, combined with extensive industry relationships, plays a key role in driving MobPae's vision of improving employee financial wellness through employer-backed solutions.",
    ],
  },
  {
    name: "Bharati Bhattarai",
    role: "Co-Founder & Technology Lead",
    initials: "BB",
    accent: "#0F766E",
    intro:
      "Bharati Bhattarai is a seasoned technology professional with over 8 years of experience in software engineering, product development, platform architecture, and enterprise solutions.",
    bio: [
      "Throughout his career, he has worked with leading organizations in the IT industry, building and delivering scalable, secure, and high-performance applications across diverse business domains.",
      "His expertise spans full-stack development, mobile and web platforms, API ecosystems, and large-scale enterprise systems.",
      "He leads the platform architecture, security framework, infrastructure, and engineering roadmap, ensuring MobPae remains innovative, scalable, and capable of supporting rapid growth while delivering a seamless experience to employers, employees, and lending partners.",
    ],
  },
];

const footerColumns = [
  {
    title: "For Employers",
    items: [
      ["Overview", "/employers"],
      ["Benefits", "/employers/benefits"],
      ["Book a Demo", "/#contact"],
    ],
  },
  {
    title: "For Employees",
    items: [
      ["Overview", "/employees"],
      ["How It Works", "/how-it-works"],
      ["FAQs", "/faqs"],
    ],
  },
  {
    title: "Company",
    items: [
      ["About Us", "/about"],
      ["Team", "/team"],
      ["Careers", "/careers"],
      ["Blog", "/blog"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Resources",
    items: [
      ["Help Center", "/help-center"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
    ],
  },
];

const siteNavLinks = [
  ["For Employers", "/employers"],
  ["For Employees", "/employees"],
  ["How It Works", "/how-it-works"],
  ["Resources", "/help-center"],
  ["About Us", "/about"],
  ["Team", "/team"],
];

export function EmployersPage() {
  return (
    <StaticPage
      content={pageContent.employers}
      icon={<BriefcaseBusiness size={22} />}
    />
  );
}

export function EmployerBenefitsPage() {
  return (
    <StaticPage
      content={pageContent.employerBenefits}
      icon={<BadgeCheck size={22} />}
    />
  );
}

export function EmployeesPage() {
  return (
    <StaticPage content={pageContent.employees} icon={<Users size={22} />} />
  );
}

export function HowItWorksPage() {
  return (
    <StaticPage
      content={pageContent.howItWorks}
      icon={<Sparkles size={22} />}
    />
  );
}

export function FaqsPage() {
  return (
    <StaticPage content={pageContent.faqs} icon={<HelpCircle size={22} />} />
  );
}

export function AboutPage() {
  const content = pageContent.about;

  return (
    <StaticShell>
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-[0.35]" style={{
          backgroundImage:
            "linear-gradient(rgba(49,94,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(49,94,255,0.07) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }} />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
                {content.eyebrow}
              </p>
              <h1 className="mt-5 max-w-[820px] text-[42px] font-[900] leading-[1.02] tracking-[-0.05em] text-[#0B1026] lg:text-[68px]">
              {content.title}
            </h1>
            </div>

            <div className="border-y border-[#dce5ff] bg-white/84 py-6">
              <p className="text-[15px] font-[650] leading-[1.9] text-[#5C647A]">
                  Our payroll-linked financial wellness ecosystem bridges the
                  gap between payday and unexpected financial needs without
                  encouraging debt dependency.
                </p>
            </div>
          </div>

          <div className="mt-14 grid border-y border-[#dce5ff] bg-white lg:grid-cols-[0.34fr_0.66fr]">
            <div className="border-b border-[#dce5ff] p-7 lg:border-b-0 lg:border-r lg:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#315eff] text-white">
                <Building2 size={22} />
              </span>
              <h2 className="mt-8 text-[32px] font-[950] leading-[1.05] text-[#21185F]">
                A salary-access layer built around trust.
              </h2>
              <p className="mt-5 text-[14px] font-[600] leading-[1.8] text-[#667085]">
                We are not building another casual credit button. MobPae is
                designed around employer context, transparent status and
                payroll-linked recovery.
                </p>
              </div>

            <div className="grid md:grid-cols-3">
              {aboutStakeholders.map(({ title, copy, icon: Icon, tone }) => (
                <div
                  key={title}
                  className="min-h-[280px] border-b border-[#e2e9ff] p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${tone}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-20 text-[20px] font-[950] text-[#0B1026]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[13px] font-[600] leading-[1.75] text-[#667085]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
              Operating Belief
            </p>
            <p className="max-w-[880px] text-[24px] font-[850] leading-[1.45] tracking-[-0.025em] text-[#111827] lg:text-[34px]">
              Responsible salary access should feel calm: clear eligibility,
              visible approvals, traceable disbursal and recovery that respects
              payroll rhythm.
            </p>
          </div>
        </div>
      </section>
    </StaticShell>
  );
}

export function TeamPage() {
  return (
    <StaticShell>
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-[#dce5ff] pb-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-end">
            <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
              Our Team
            </p>
              <h1 className="mt-5 max-w-[680px] text-[42px] font-[900] leading-[1.02] tracking-[-0.05em] text-[#0B1026] lg:text-[68px]">
              The people building MobPae.
            </h1>
            </div>
            <p className="max-w-[520px] text-[16px] font-[600] leading-[1.85] text-[#667085] lg:text-[18px]">
              A focused team combining financial services experience,
              engineering depth and product operations to build responsible
              salary access for Indian workplaces.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {founderProfiles.map(({ name, role, initials, accent, intro, bio }, index) => (
              <article
                key={name}
                className="grid border-y border-[#dce5ff] bg-white lg:grid-cols-[170px_1fr]"
              >
                <div className="relative min-h-[230px] overflow-hidden border-b border-[#dce5ff] p-6 lg:border-b-0 lg:border-r">
                  <div
                    className="absolute inset-0 opacity-[0.16]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(49,94,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(49,94,255,0.35) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col gap-8">
                    <span className="text-[12px] font-[950] uppercase tracking-[0.2em] text-[#8A90A3]">
                      Founder 0{index + 1}
                    </span>
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-lg text-[32px] font-[950] text-white shadow-[0_20px_54px_rgba(49,94,255,0.18)]"
                      style={{ backgroundColor: accent }}
                    >
                      {initials}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-[28px] font-[950] tracking-[-0.035em] text-[#0B1026]">
                    {name}
                  </h2>
                  <p className="mt-2 text-[14px] font-[900] uppercase tracking-[0.12em] text-[#315eff]">
                    {role}
                  </p>
                  <p className="mt-6 text-[14px] font-[650] leading-[1.85] text-[#667085]">
                    {intro}
                  </p>
                  <div className="mt-6 grid gap-3 border-t border-[#eef3ff] pt-5">
                      {bio.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[13px] font-[600] leading-[1.8] text-[#667085]"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-5 border-y border-[#dce5ff] py-6 md:grid-cols-3">
            {[
              ["Finance depth", "Banking, MSME advisory and partner strategy."],
              ["Engineering depth", "Secure, scalable product architecture."],
              ["Operating focus", "Employer, employee and lending workflows aligned."],
            ].map(([title, copy]) => (
              <div key={title} className="border-l-2 border-[#315eff] pl-4">
                <p className="text-[15px] font-[950] text-[#21185F]">{title}</p>
                <p className="mt-2 text-[13px] font-[600] leading-[1.7] text-[#667085]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </StaticShell>
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
            to="/#contact"
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
    <div style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: "#0B0D12", background: "#fff" }}>
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

function StaticFooter() {
  return (
    <footer className="border-t border-[#e2e9ff] bg-white px-5 py-14 text-[#21185F] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.2fr_repeat(4,0.72fr)]">
        <div>
          <span className="inline-flex items-center">
            <img
              src="/brand/mobpae-logo-horizontal.png"
              alt="MobPae -  Your Trusted Financial Partner"
              className="h-8 w-auto object-contain"
            />
          </span>
          <p className="mt-5 max-w-[300px] text-[13px] font-[500] leading-[1.8] text-[#667085]">
            Employer-backed earned salary access for modern workplaces.
          </p>
        </div>
        {footerColumns.map(({ title, items }) => (
          <div key={title}>
            <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-[#315eff]">
              {title}
            </p>
            <div className="mt-5 grid gap-3">
              {items.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="text-[13px] font-[600] text-[#667085] transition hover:text-[#315eff]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
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
