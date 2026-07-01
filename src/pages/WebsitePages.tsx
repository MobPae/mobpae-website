import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

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
        points: ["Request review", "Employee and salary context", "Payroll-aware recovery"],
      },
      {
        title: "Built for HR and finance teams",
        body: "The flow reduces manual salary advance requests while giving teams a cleaner operating layer for approvals and recoveries.",
        points: ["Less manual follow-up", "Clear status tracking", "Audit-friendly history"],
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
        points: ["More employee trust", "Reduced month-end stress", "A visible wellness benefit"],
      },
      {
        title: "Operational clarity",
        body: "Approvals, disbursals, recoveries and settlements remain traceable across the workflow.",
        points: ["Request status visibility", "Recovery reports", "Settlement tracking"],
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
    title: "Beating your month-end crunch.",
    description:
      "MobPae is building employer-backed salary access for modern workplaces, helping employees handle urgent needs with clarity and control.",
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
        points: ["Product engineering", "Frontend design systems", "Operations and support"],
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
        points: ["Earned wage access basics", "Employer wellness programs", "Payroll recovery design"],
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
];

export function EmployersPage() {
  return <StaticPage content={pageContent.employers} icon={<BriefcaseBusiness size={22} />} />;
}

export function EmployerBenefitsPage() {
  return <StaticPage content={pageContent.employerBenefits} icon={<BadgeCheck size={22} />} />;
}

export function EmployeesPage() {
  return <StaticPage content={pageContent.employees} icon={<Users size={22} />} />;
}

export function HowItWorksPage() {
  return <StaticPage content={pageContent.howItWorks} icon={<Sparkles size={22} />} />;
}

export function FaqsPage() {
  return <StaticPage content={pageContent.faqs} icon={<HelpCircle size={22} />} />;
}

export function AboutPage() {
  return <StaticPage content={pageContent.about} icon={<Building2 size={22} />} />;
}

export function CareersPage() {
  return <StaticPage content={pageContent.careers} icon={<Users size={22} />} />;
}

export function BlogPage() {
  return <StaticPage content={pageContent.blog} icon={<FileText size={22} />} />;
}

export function HelpCenterPage() {
  return <StaticPage content={pageContent.helpCenter} icon={<HelpCircle size={22} />} />;
}

export function ContactPage() {
  return (
    <StaticShell>
      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">Contact Us</p>
          <h1 className="mt-5 text-[42px] font-[900] leading-[1.04] tracking-[-0.045em] text-[#0B1026] lg:text-[64px]">
            Let us build a financially stronger workforce.
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] font-[500] leading-[1.85] text-[#5C647A]">
            Tell us about your team and we will help you understand how MobPae can fit your payroll cycle and employee wellness goals.
          </p>

          <div className="mt-10 grid gap-4">
            <ContactItem icon={<Mail size={18} />} label="Email" value="support@mobpae.com" />
            <ContactItem icon={<MapPin size={18} />} label="Address" value="Gujarat, Ahmedabad - 382470" />
          </div>
        </div>

        <div className="rounded-[30px] border border-[#E6E8F2] bg-white p-8 shadow-[0_28px_90px_rgba(91,60,227,0.13)]">
          <p className="text-[13px] font-[900] text-[#5B3CE3]">Book a Demo</p>
          <h2 className="mt-3 text-[28px] font-[900] tracking-[-0.03em] text-[#0B1026]">Use the enquiry form on the home page.</h2>
          <p className="mt-4 text-[14px] font-[500] leading-[1.75] text-[#667085]">
            MobPae keeps one connected enquiry form so every website lead enters the same backend flow.
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex h-[52px] items-center gap-3 rounded-xl bg-[#6C4CFF] px-7 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.32)]"
          >
            Open Enquiry Form <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </StaticShell>
  );
}

export function PrivacyPolicyPage() {
  return <StaticPage content={pageContent.privacy} icon={<ShieldCheck size={22} />} />;
}

export function TermsPage() {
  return <StaticPage content={pageContent.terms} icon={<FileText size={22} />} />;
}

function StaticPage({ content, icon }: { content: PageContent; icon: ReactNode }) {
  return (
    <StaticShell>
      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-[760px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#5B3CE3]">
            {icon}
          </div>
          <p className="mt-7 text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">{content.eyebrow}</p>
          <h1 className="mt-5 text-[42px] font-[900] leading-[1.04] tracking-[-0.045em] text-[#0B1026] lg:text-[64px]">
            {content.title}
          </h1>
          <p className="mt-6 text-[16px] font-[500] leading-[1.85] text-[#5C647A]">{content.description}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {content.sections.map((section) => (
            <article key={section.title} className="rounded-[26px] border border-[#E6E8F2] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.045)]">
              <h2 className="text-[20px] font-[900] tracking-[-0.02em] text-[#0B1026]">{section.title}</h2>
              <p className="mt-4 text-[14px] font-[500] leading-[1.8] text-[#667085]">{section.body}</p>
              {section.points && (
                <div className="mt-6 grid gap-3">
                  {section.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[13px] font-[800] text-[#252B42]">
                      <CheckCircle2 size={16} className="text-[#5B3CE3]" />
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
    <main className="min-h-screen bg-[#FBFCFF] text-[#0B1026]">
      <header className="border-b border-[#ECEEF6] bg-white/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" aria-label="MobPae home">
            <img
              src="/brand/mobpae-logo-horizontal.png"
              alt="MobPae - Beating Your Month-End Crunch"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {siteNavLinks.map(([label, href]) => (
              <Link key={label} to={href} className="text-[13px] font-[750] text-[#252B42] transition hover:text-[#5B3CE3]">
                {label}
              </Link>
            ))}
          </nav>
          <Link
            to="/#contact"
            className="hidden h-11 items-center justify-center rounded-xl bg-[#6C4CFF] px-6 text-[13px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.28)] sm:inline-flex"
          >
            Book a Demo
          </Link>
        </div>
      </header>
      {children}
      <StaticFooter />
    </main>
  );
}

function StaticFooter() {
  return (
    <footer className="bg-[#080B18] px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.2fr_repeat(4,0.72fr)]">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
            <img
              src="/brand/mobpae-logo-horizontal.png"
              alt="MobPae - Beating Your Month-End Crunch"
              className="h-8 w-auto object-contain"
            />
          </span>
          <p className="mt-5 max-w-[300px] text-[13px] font-[500] leading-[1.8] text-white/56">
            Employer-backed earned salary access for modern workplaces.
          </p>
        </div>
        {footerColumns.map(({ title, items }) => (
          <div key={title}>
            <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-white/48">{title}</p>
            <div className="mt-5 grid gap-3">
              {items.map(([label, href]) => (
                <Link key={label} to={href} className="text-[13px] font-[600] text-white/52 transition hover:text-white">
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

function ContactItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#E6E8F2] bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0EDFF] text-[#5B3CE3]">
        {icon}
      </span>
      <div>
        <p className="text-[12px] font-[900] uppercase tracking-[0.12em] text-[#8A90A3]">{label}</p>
        <p className="mt-1 text-[15px] font-[800] text-[#0B1026]">{value}</p>
      </div>
    </div>
  );
}
