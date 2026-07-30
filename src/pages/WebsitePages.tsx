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
    title: "Support for employers and employees.",
    description:
      "Find quick guidance on onboarding, employee setup, salary requests, repayments and account questions.",
    sections: [
      {
        title: "For employees",
        body: "Complete KYC, add bank account details, pay the platform fee after employer approval and track salary advance requests from the employee app.",
        points: [
          "Complete setup once",
          "See request and repayment status",
          "Pay only after employer approval",
        ],
      },
      {
        title: "For employers",
        body: "Review employee requests, approve eligible advances and coordinate recoveries with your payroll cycle.",
        points: [
          "Review requests with salary context",
          "Track recovery and settlement status",
          "Keep payroll teams in control",
        ],
      },
      {
        title: "Need help?",
        body: "Email support@mobpae.com and our team will respond.",
        points: [
          "Share your company name",
          "Mention employee code or request ID",
          "Include screenshots only when needed",
        ],
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
        points: [
          "Website enquiry details",
          "Contact and company context",
          "Messages shared with our team",
        ],
      },
      {
        title: "How we use information",
        body: "We use submitted information to contact you, understand your requirements, provide product information and improve our services.",
        points: [
          "Respond to employer enquiries",
          "Prepare demo and onboarding conversations",
          "Improve website and product communication",
        ],
      },
      {
        title: "Data protection",
        body: "We take reasonable steps to protect submitted information from unauthorized access, misuse or disclosure.",
        points: [
          "Limited access to enquiry data",
          "Operational use only",
          "No public resale of submitted details",
        ],
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
        points: [
          "Informational website content",
          "Product details may evolve",
          "Pilot terms are confirmed separately",
        ],
      },
      {
        title: "Enquiries",
        body: "Submitting an enquiry does not create a contract or guarantee service availability. Our team may contact you to understand your requirements.",
        points: [
          "Employer fit is reviewed first",
          "Implementation depends on onboarding readiness",
          "Commercial terms are shared during discussion",
        ],
      },
      {
        title: "Limitation",
        body: "MobPae is not liable for losses arising from website misuse, temporary unavailability or reliance on general website content.",
        points: [
          "Use the official contact channels",
          "Do not submit false information",
          "Do not misuse website forms",
        ],
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
