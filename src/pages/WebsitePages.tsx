import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileCheck,
  FileText,
  HelpCircle,
  Landmark,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { AppPreview } from "../components/AppPreview";
import { HeroPanel, PageHero } from "../components/PageHero";

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
    title: "Answers for employees, employers, and partners.",
    description:
      "Use this guide for setup, requests, approvals, payroll recovery, and how to reach MobPae support. Product behaviour can vary by employer policy.",
    sections: [
      {
        title: "For employees",
        body: "The MobPae app shows what you can request from wages already earned in the current cycle, then tracks employer approval, disbursal, and payday recovery.",
        points: [
          "Complete KYC and add a verified bank account before the first request",
          "Review the eligible amount, payable amount, and repayment date",
          "Submit a request only after you understand the terms shown in the app",
          "Follow status: pending, approved, disbursed, or recovered on payday",
        ],
      },
      {
        title: "For employers",
        body: "Employers stay in control. Requests are reviewed against salary context and your policy before funds move. Recovery follows the payroll date and cutoff you configure.",
        points: [
          "Onboard company details, payroll date, cutoff, and approvers",
          "Review pending requests with employee and amount context",
          "Approve or decline before MobPae verifies and disburses",
          "Reconcile recoveries with the salary cycle, not ad-hoc collections",
        ],
      },
      {
        title: "Approvals, disbursal, and payday",
        body: "Nothing is paid out on a request alone. Employer approval comes first. MobPae then verifies readiness and sends funds to the employee’s verified account. Recovery is designed to happen on payday through payroll-linked settlement.",
        points: [
          "Employer approval is required",
          "Disbursal is to a verified bank account",
          "Recovery follows the configured payroll cycle",
        ],
      },
      {
        title: "Need help?",
        body: "Email support@mobpae.com. Include your company name and, if you are an employee, your employee code or request ID. For a product walkthrough, use Contact or Request Demo.",
        points: [
          "support@mobpae.com",
          "Share screenshots only when they help explain the issue",
          "Do not send passwords or full card numbers over email",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy Policy",
    title: "How MobPae collects, uses, and protects information.",
    description:
      "This draft policy covers the MobPae website, enquiry forms, and — once you are onboarded — the employee app, employer dashboard, and admin operations. Last updated 15 August 2026. You can ask us to revise any clause.",
    sections: [
      {
        title: "Who we are",
        body: "MobPae provides employer-powered earned wage access: employees may request a portion of wages already earned, employers approve requests, and recovery is designed to follow the payroll cycle. We operate from Gujarat, Ahmedabad — 382470, India. Privacy questions: support@mobpae.com.",
      },
      {
        title: "What this policy covers",
        body: "It applies to visitors of this website, people who submit employer enquiries, and authorised users of MobPae products. It does not replace a customer contract. If a signed agreement says something different about data processing, that agreement controls for that relationship.",
        points: [
          "Website browsing and enquiry forms",
          "Employee app, employer dashboard, and admin tools after onboarding",
          "Support emails sent to support@mobpae.com",
        ],
      },
      {
        title: "Information we collect",
        body: "Website enquiries may include company name, contact name, email, phone, employee count, and your message. If you become a customer, we may process employment and payroll context needed to run salary access, including employee identifiers, eligibility, request amounts, approval decisions, bank details for disbursal, KYC references, and recovery status.",
        points: [
          "Enquiry and contact details you type into forms",
          "Account and role information for employer and admin users",
          "Request, approval, disbursal, and payday recovery records",
          "Technical logs needed for security",
        ],
      },
      {
        title: "How we use information",
        body: "We use information to respond to demos and onboarding, operate earned wage access with employer control, disburse to verified accounts, settle on the payroll cycle, keep an audit trail, improve the product, and meet legal duties. We do not sell enquiry or employee data as a marketing list.",
        points: [
          "Answer employer enquiries and schedule demos",
          "Run approvals, verification, disbursal, and recovery",
          "Secure accounts and investigate misuse",
          "Send service messages about requests or payroll cutoffs",
        ],
      },
      {
        title: "Who we share with",
        body: "We share only what is needed. Employers see requests for their workforce. Partner lenders or capital partners may receive information required to fund or settle an approved request. Banks receive details needed to pay an employee. Vendors such as hosting or KYC process data on our instructions. We may disclose information if required by law.",
        points: [
          "Your employer, for workforce requests they must approve",
          "Funding, banking, and KYC partners involved in a transaction",
          "Infrastructure and support vendors under contract",
          "Regulators or courts when legally required",
        ],
      },
      {
        title: "Retention and security",
        body: "We keep enquiry records long enough to handle the conversation. Product records are kept for the employer relationship and a reasonable period afterwards for audit, dispute, and legal retention. We use access controls, encryption where designed into the platform, and role-based employer permissions.",
      },
      {
        title: "Your choices and rights",
        body: "You may ask us to access, correct, or delete personal information we hold, subject to law and records we must keep for payroll, fraud, or accounting. Employees should also use their employer’s HR channel for workplace data the employer controls. Email support@mobpae.com with enough detail for us to identify you.",
      },
      {
        title: "Cookies and this website",
        body: "The marketing site may use cookies needed for the site to function. We do not run a separate advertising cookie program on these pages. You can control cookies in your browser; blocking some cookies may affect site features.",
      },
      {
        title: "Children",
        body: "MobPae is built for salaried employees through employers. It is not directed at children. We do not knowingly collect personal information from children through this website.",
      },
      {
        title: "Changes and contact",
        body: "We may update this policy as the product and the law change. For privacy requests: support@mobpae.com, MobPae, Gujarat, Ahmedabad — 382470, India.",
      },
    ],
  },
  terms: {
    eyebrow: "Terms & Conditions",
    title: "Terms for the MobPae website and public product information.",
    description:
      "These draft terms govern use of this website and information we publish about earned wage access. They are not a customer master agreement. Last updated 15 August 2026. Please review and tell us what to change.",
    sections: [
      {
        title: "Agreement",
        body: "By using this website you agree to these terms and to our Privacy Policy. If you do not agree, do not use the site. Live app or dashboard use is also governed by onboarding documents, employer policy, and any partner terms that apply to disbursal.",
      },
      {
        title: "What MobPae is",
        body: "MobPae is employer-powered access to a portion of wages already earned, subject to employer approval, eligibility, and payroll-linked recovery. It is not an open-ended personal loan or credit card. Nothing on this website is an offer of credit to the public or a guarantee that any company or employee will be onboarded.",
        points: [
          "Employees request; employers approve",
          "Funds, when paid, go to a verified employee account",
          "Recovery is designed around the salary cycle",
        ],
      },
      {
        title: "Website content",
        body: "Copy, metrics, dummy dashboards, and sample rupee amounts are for illustration. Features and partner arrangements can change. Do not treat website text as a binding service description until it is confirmed in a written onboarding or commercial document.",
      },
      {
        title: "Enquiries and demos",
        body: "Submitting the enquiry form is a request for contact. It does not create a contract or obligation to provide salary access. We may decline or delay a conversation where the employer is not a fit or information is incomplete.",
        points: [
          "Use accurate company and contact details",
          "Do not submit other people’s personal data unless you are authorised",
          "Pilot scope and commercial terms are agreed separately",
        ],
      },
      {
        title: "Acceptable use",
        body: "You must not misuse the website or forms, attempt to access other accounts, or use MobPae information to process salary access outside an authorised employer relationship.",
      },
      {
        title: "Intellectual property",
        body: "The MobPae name, logo, website design, and product UI shown in mockups are owned by MobPae or its licensors. You may link to public pages in a fair, non-misleading way.",
      },
      {
        title: "Disclaimers and liability",
        body: "The website is provided as-is for information. To the fullest extent permitted by Indian law, MobPae is not liable for indirect loss arising from website use or from relying on general marketing content. Paying customers are covered by their signed contract, not these website terms.",
      },
      {
        title: "Governing law",
        body: "These website terms are governed by the laws of India. Courts in Ahmedabad, Gujarat shall have exclusive jurisdiction over disputes arising from this website, subject to any mandatory protections that apply to you.",
      },
      {
        title: "Changes and contact",
        body: "We may revise these terms. Continued use of the website after an update means you accept the new terms. Questions: support@mobpae.com, MobPae, Gujarat, Ahmedabad — 382470, India.",
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
    {
      icon: <Smartphone size={20} aria-hidden="true" />,
      title: "Complete setup",
      body: "See KYC, bank and platform fee status in one place before you request anything.",
    },
    {
      icon: <Wallet size={20} aria-hidden="true" />,
      title: "View available access",
      body: "Understand exactly what you can request before you commit to it.",
    },
    {
      icon: <Clock size={20} aria-hidden="true" />,
      title: "Track every status",
      body: "Follow approval, transfer and repayment without guessing where things stand.",
    },
  ];

  const trust = [
    {
      icon: <FileCheck size={20} aria-hidden="true" />,
      title: "KYC verification",
      body: "Aadhaar and PAN checks keep your identity verified and your account secure.",
      tag: "Verified",
    },
    {
      icon: <Landmark size={20} aria-hidden="true" />,
      title: "Bank-linked transfers",
      body: "Approved funds move straight to your linked account — no manual steps.",
      tag: "Direct",
    },
    {
      icon: <ShieldCheck size={20} aria-hidden="true" />,
      title: "Employer-approved",
      body: "Every request passes through your employer before funds are released.",
      tag: "Controlled",
    },
  ];

  return (
    <StaticShell>
      <PageHero
        eyebrow="For employees"
        title="One app for setup, access and repayment clarity."
        description="Employees get a focused mobile experience for KYC, bank readiness, advance requests, platform fee status, repayment visibility and every approval update."
        actions={
          <>
            <Link to="/#enquiry" className="premium-button">
              Bring MobPae to your workplace{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              to="/how-it-works"
              className="premium-button premium-button--ghost"
            >
              See how it works
            </Link>
          </>
        }
      >
        <HeroPanel>
          <div className="employee-app-showcase employee-app-showcase--hero">
            <div className="employee-app-showcase__header">
              <p className="eyebrow">The MobPae employee app</p>
              <p>
                A clear view of eligibility, request status and salary-cycle
                repayment.
              </p>
            </div>
            <div className="employee-app-showcase__stage">
              <div className="employee-app-showcase__frame">
                <div className="employee-app-showcase__chip employee-app-showcase__chip--left">
                  <span>01</span>
                  Setup ready
                </div>
                <AppPreview className="employee-app-showcase__device" priority />
                <div className="employee-app-showcase__chip employee-app-showcase__chip--right">
                  <span>02</span>
                  Payday aware
                </div>
              </div>
            </div>
            <div className="employee-app-showcase__metrics">
              <div>
                <span>Request</span>
                <strong>Trackable</strong>
              </div>
              <div>
                <span>Recovery</span>
                <strong>Payroll-linked</strong>
              </div>
            </div>
            <span className="sr-only">
              MobPae employee app dashboard showing available salary advance,
              limit, and recent activity
            </span>
          </div>
        </HeroPanel>
      </PageHero>

      {/* The employee journey */}
      <section
        aria-labelledby="employee-journey-title"
        className="section-shell section-shell--soft"
      >
        <div className="site-rail">
          <div className="section-heading">
            <p className="eyebrow">The employee journey</p>
            <h2 id="employee-journey-title">Clear at every step.</h2>
          </div>
          <div className="process-rail">
            {steps.map((step, index) => (
              <div className="process-rail__step" key={step.title}>
                <span className="process-rail__node">{step.icon}</span>
                <div>
                  <small>0{index + 1}</small>
                  <p className="process-rail__step-title">{step.title}</p>
                  <p className="process-rail__step-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built around trust */}
      <section
        aria-labelledby="employee-trust-title"
        className="section-shell section-shell--white"
      >
        <div className="site-rail">
          <div className="section-heading">
            <p className="eyebrow">Built around trust</p>
            <h2 id="employee-trust-title">
              Nothing happens without visibility.
            </h2>
          </div>
          <div className="mt-9 trust-ledger">
            {trust.map((item) => (
              <div className="trust-ledger__row" key={item.title}>
                <span className="icon-bubble">{item.icon}</span>
                <div className="trust-ledger__content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span className="trust-ledger__tag">
                  <span aria-hidden="true" />
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support callout */}
      <section
        className="section-shell section-shell--soft"
        style={{ paddingTop: 0 }}
      >
        <div className="site-rail grid gap-6 lg:grid-cols-2">
          <article className="premium-card">
            <ShieldCheck
              size={24}
              style={{ color: "var(--mp-blue)" }}
              aria-hidden="true"
            />
            <h2 style={{ fontSize: 25, marginTop: 20 }}>
              Know what happens next.
            </h2>
            <p>
              Request tracking and repayment visibility keep the experience
              understandable from start to finish.
            </p>
          </article>
          <article className="premium-card">
            <HelpCircle
              size={24}
              style={{ color: "var(--mp-blue)" }}
              aria-hidden="true"
            />
            <h2 style={{ fontSize: 25, marginTop: 20 }}>Need help?</h2>
            <p>
              Visit the FAQs or contact support for onboarding, account and
              request questions.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link to="/faqs" className="text-link">
                Read FAQs →
              </Link>
              <a href="mailto:support@mobpae.com" className="text-link">
                Email support →
              </a>
            </div>
          </article>
        </div>
      </section>
    </StaticShell>
  );
}

function FaqAccordionItem({
  title,
  body,
  defaultOpen = false,
}: {
  title: string;
  body: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`faq-accordion__item ${
        open ? "faq-accordion__item--open" : ""
      }`}
    >
      <button
        type="button"
        className="faq-accordion__trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      <div className="faq-accordion__panel">
        <div>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqsPage() {
  const content = pageContent.faqs;
  return (
    <StaticShell>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <HeroPanel>
          <div className="icon-bubble">
            <HelpCircle size={22} />
          </div>
          <div className="static-hero-preview">
            {content.sections.slice(0, 2).map((section) => (
              <div key={section.title} className="static-hero-preview__item">
                <p className="static-hero-preview__title">{section.title}</p>
                <p className="static-hero-preview__body">{section.body}</p>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      <section className="section-shell section-shell--white static-content-section">
        <div className="site-rail">
          <div className="faq-accordion">
            {content.sections.map((section, index) => (
              <FaqAccordionItem
                key={section.title}
                title={section.title}
                body={section.body}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </StaticShell>
  );
}

export function CareersPage() {
  const focusAreas = [
    {
      area: "Product Engineering",
      title: "Frontend and platform engineers",
      location: "Ahmedabad / remote-friendly",
      type: "Exploratory",
      body: "Build secure, responsive product surfaces across employee, employer and admin workflows.",
    },
    {
      area: "Design Systems",
      title: "Product designers and UI engineers",
      location: "Remote-friendly",
      type: "Exploratory",
      body: "Shape a premium fintech experience with clear interaction patterns, accessibility and motion craft.",
    },
    {
      area: "Operations",
      title: "Employer success and support",
      location: "India",
      type: "Exploratory",
      body: "Help employers onboard, coordinate payroll-linked recoveries and support employee financial wellness.",
    },
    {
      area: "Risk and Finance",
      title: "Credit operations and partnerships",
      location: "India",
      type: "Exploratory",
      body: "Work on employer-backed verification, partner reporting and responsible access controls.",
    },
    {
      area: "Growth",
      title: "Founding go-to-market generalist",
      location: "India",
      type: "Exploratory",
      body: "Turn employer conversations into pilots with thoughtful positioning, documentation and follow-through.",
    },
    {
      area: "Partnerships",
      title: "Capital partner and payroll partnerships",
      location: "India",
      type: "Exploratory",
      body: "Build trusted partner relationships across lending, payroll and employer financial wellness programs.",
    },
  ];

  return (
    <StaticShell>
      <section className="careers-hero">
        <div className="site-rail careers-hero__content">
          <h1>Work at MobPae</h1>
          <p>
            Help build employer-powered salary access for the modern Indian
            workforce. We are looking for people who care about trust, speed and
            responsible fintech.
          </p>
        </div>
      </section>

      <section className="careers-section">
        <div className="site-rail">
          <div className="career-card-grid">
            {focusAreas.map((role) => (
              <a
                key={role.title}
                className="career-card"
                href={`mailto:support@mobpae.com?subject=${encodeURIComponent(
                  role.title
                )}`}
              >
                <span className="career-card__tag">{role.area}</span>
                <h2>{role.title}</h2>
                <p className="career-card__meta">
                  {role.location} · {role.type}
                </p>
                <p>{role.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </StaticShell>
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
      extra={
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="premium-button">
            Contact MobPae <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/#faq" className="premium-button premium-button--ghost">
            Homepage FAQ
          </Link>
        </div>
      }
    />
  );
}

export function ContactPage() {
  return (
    <StaticShell>
      <PageHero
        eyebrow="Contact Us"
        title="Let us build a financially stronger workforce."
        description="Tell us about your team and we will help you understand how MobPae can fit your payroll cycle and employee wellness goals."
      >
        <HeroPanel>
          <div className="grid gap-4">
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
        </HeroPanel>
      </PageHero>

      <section className="section-shell section-shell--white">
        <div className="site-rail grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Employer enquiry</p>
            <h2 style={{ fontSize: "clamp(25px, 2.25vw, 34px)" }}>
              One connected enquiry flow for every employer conversation.
            </h2>
            <p
              className="mt-6 max-w-[560px]"
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "var(--mp-muted)",
              }}
            >
              Share a few details on the home enquiry form. Our team will review
              your payroll cycle, approval process and pilot fit before
              onboarding.
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

          <div className="premium-card contact-enquiry-card">
            <p className="eyebrow" style={{ marginBottom: 4 }}>
              Book a Demo
            </p>
            <h2 style={{ fontSize: 28 }}>
              Use the enquiry form on the home page.
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "var(--mp-muted)",
              }}
            >
              MobPae keeps one connected enquiry form so every website lead
              enters the same backend flow.
            </p>

            <div className="contact-enquiry-card__steps" aria-label="What happens after enquiry">
              {[
                "We review your payroll cycle",
                "We map the approval flow",
                "We suggest a pilot-ready next step",
              ].map((step) => (
                <div key={step}>
                  <CheckCircle2 size={17} />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <Link to="/#enquiry" className="premium-button mt-7">
              Open Enquiry Form <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </StaticShell>
  );
}

function CompliancePage({
  content,
  icon,
}: {
  content: PageContent;
  icon: ReactNode;
}) {
  return (
    <StaticShell>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <HeroPanel>
          <div className="icon-bubble">{icon}</div>
          <div className="static-hero-preview">
            {content.sections.slice(0, 2).map((section) => (
              <div key={section.title} className="static-hero-preview__item">
                <p className="static-hero-preview__title">{section.title}</p>
                <p className="static-hero-preview__body">{section.body}</p>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      <section className="section-shell section-shell--white static-content-section">
        <div className="site-rail">
          <div className="doc-sections">
            {content.sections.map((section, index) => (
              <article key={section.title} className="doc-section">
                <span className="doc-section__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points && (
                  <div className="doc-section__points">
                    {section.points.map((point) => (
                      <div key={point} className="doc-section__point">
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {point}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </StaticShell>
  );
}

export function PrivacyPolicyPage() {
  return (
    <CompliancePage
      content={pageContent.privacy}
      icon={<ShieldCheck size={22} />}
    />
  );
}

export function TermsPage() {
  return (
    <CompliancePage content={pageContent.terms} icon={<FileText size={22} />} />
  );
}

function StaticPage({
  content,
  icon,
  extra,
}: {
  content: PageContent;
  icon: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <StaticShell>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <HeroPanel>
          <div className="icon-bubble">{icon}</div>
          <div className="static-hero-preview">
            {content.sections.slice(0, 2).map((section) => (
              <div key={section.title} className="static-hero-preview__item">
                <p className="static-hero-preview__title">{section.title}</p>
                <p className="static-hero-preview__body">{section.body}</p>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      <section className="section-shell section-shell--white static-content-section">
        <div className="site-rail">
          <div className="static-content-grid">
            {content.sections.map((section) => (
              <article key={section.title} className="static-content-card">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points && (
                  <div className="static-content-card__points">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="static-content-card__point"
                      >
                        <CheckCircle2 size={16} />
                        {point}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          {extra}
        </div>
      </section>
    </StaticShell>
  );
}

function StaticShell({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-site">
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
    <div
      className="flex gap-4 rounded-2xl p-5"
      style={{ border: "1px solid var(--mp-border)", background: "#fff" }}
    >
      <span
        className="icon-bubble"
        style={{ width: 44, height: 44, flexShrink: 0 }}
      >
        {icon}
      </span>
      <div>
        <p
          className="m-0"
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--mp-muted)",
          }}
        >
          {label}
        </p>
        <p className="mt-1" style={{ fontSize: 15, color: "var(--mp-ink)" }}>
          {value}
        </p>
      </div>
    </div>
  );
}
