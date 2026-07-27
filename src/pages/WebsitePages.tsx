import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  FileText,
  FormInput,
  Grid3X3,
  HelpCircle,
  Landmark,
  Layers,
  LockKeyhole,
  Mail,
  MapPin,
  MousePointer2,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Type,
  Wallet,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
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
    { icon: <Smartphone size={20} aria-hidden="true" />, title: "Complete setup", body: "See KYC, bank and platform fee status in one place before you request anything." },
    { icon: <Wallet size={20} aria-hidden="true" />, title: "View available access", body: "Understand exactly what you can request before you commit to it." },
    { icon: <Clock size={20} aria-hidden="true" />, title: "Track every status", body: "Follow approval, transfer and repayment without guessing where things stand." },
  ];

  const trust = [
    { icon: <FileCheck size={20} aria-hidden="true" />, title: "KYC verification", body: "Aadhaar and PAN checks keep your identity verified and your account secure.", tag: "Verified" },
    { icon: <Landmark size={20} aria-hidden="true" />, title: "Bank-linked transfers", body: "Approved funds move straight to your linked account — no manual steps.", tag: "Direct" },
    { icon: <ShieldCheck size={20} aria-hidden="true" />, title: "Employer-approved", body: "Every request passes through your employer before funds are released.", tag: "Controlled" },
  ];

  return (
    <StaticShell>
      <PageHero
        eyebrow="For employees"
        title="Access earned salary with a calmer experience."
        description="A mobile-first journey for setup, requests, status tracking and repayment visibility — without hidden steps."
        actions={
          <>
            <Link to="/#enquiry" className="premium-button">
              Bring MobPae to your workplace <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/how-it-works" className="premium-button premium-button--ghost">
              See how it works
            </Link>
          </>
        }
      >
        <HeroPanel>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            The MobPae employee app
          </p>
          <div className="mx-auto h-[420px] max-w-[260px] overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(17,24,39,0.1)]" style={{ border: "1px solid var(--mp-border)" }}>
            <img
              src="/product-shots/dashboard.png"
              alt="MobPae employee app dashboard showing available salary advance, limit, and recent activity"
              className="block h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </HeroPanel>
      </PageHero>

      {/* The employee journey */}
      <section aria-labelledby="employee-journey-title" className="section-shell section-shell--soft">
        <div className="site-rail">
          <div className="section-heading">
            <p className="eyebrow">The employee journey</p>
            <h2 id="employee-journey-title">Clear at every step.</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="premium-card">
                <div className="flex items-center justify-between">
                  <span className="icon-bubble">
                    {step.icon}
                  </span>
                  <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--mp-muted)" }}>0{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built around trust */}
      <section aria-labelledby="employee-trust-title" className="section-shell section-shell--white">
        <div className="site-rail">
          <div className="section-heading">
            <p className="eyebrow">Built around trust</p>
            <h2 id="employee-trust-title">Nothing happens without visibility.</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {trust.map((item) => (
              <article key={item.title} className="premium-card">
                <span className="icon-bubble">
                  {item.icon}
                </span>
                <h3 style={{ fontSize: 17, marginTop: 20 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5 }}>{item.body}</p>
                <div className="mt-5" style={{ borderTop: "1px solid var(--mp-border)", paddingTop: 16 }}>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--mp-page)", color: "var(--mp-ink)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--mp-blue)" }} />
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support callout */}
      <section className="section-shell section-shell--soft" style={{ paddingTop: 0 }}>
        <div className="site-rail grid gap-6 lg:grid-cols-2">
          <article className="premium-card">
            <ShieldCheck size={24} style={{ color: "var(--mp-blue)" }} aria-hidden="true" />
            <h2 style={{ fontSize: 25, marginTop: 20 }}>Know what happens next.</h2>
            <p>Request tracking and repayment visibility keep the experience understandable from start to finish.</p>
          </article>
          <article className="premium-card">
            <HelpCircle size={24} style={{ color: "var(--mp-blue)" }} aria-hidden="true" />
            <h2 style={{ fontSize: 25, marginTop: 20 }}>Need help?</h2>
            <p>Visit the FAQs or contact support for onboarding, account and request questions.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link to="/faqs" className="text-link">Read FAQs →</Link>
              <a href="mailto:support@mobpae.com" className="text-link">Email support →</a>
            </div>
          </article>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="final-cta">
        <div className="site-rail">
          <div className="final-cta__card">
            <h2>Ready to bring this to your team?</h2>
            <p>Ask your employer to explore MobPae, or see the full approval-to-recovery flow first.</p>
            <div>
              <Link to="/#enquiry" className="premium-button premium-button--light">
                Request a demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/how-it-works" className="premium-button premium-button--dark-ghost">
                See how it works
              </Link>
            </div>
          </div>
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
            Help build employer-powered salary access for the modern Indian workforce.
            We are looking for people who care about trust, speed and responsible fintech.
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
                href={`mailto:support@mobpae.com?subject=${encodeURIComponent(role.title)}`}
              >
                <span className="career-card__tag">{role.area}</span>
                <h2>{role.title}</h2>
                <p className="career-card__meta">{role.location} · {role.type}</p>
                <p>{role.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </StaticShell>
  );
}

export function StyleGuidePage() {
  const sections = [
    "Typography",
    "Colors",
    "Buttons",
    "Cards",
    "Forms",
    "Grids",
    "Spacing",
    "Tabs",
    "Motion",
  ];

  const colors = [
    { name: "Primary Blue", value: "#0057FF", text: "#fff" },
    { name: "Blue 700", value: "#0047D8", text: "#fff" },
    { name: "Ink", value: "#07111F", text: "#fff" },
    { name: "Muted", value: "#657386", text: "#fff" },
    { name: "Page", value: "#F8F7F4", text: "#07111F" },
    { name: "Soft Blue", value: "#EAF1FF", text: "#07111F" },
  ];

  const typeScale = [
    { name: "Display", size: "34 / 58", copy: "Beating your month end crunch" },
    { name: "Section", size: "25 / 34", copy: "One platform. Every stakeholder." },
    { name: "Card title", size: "20 / 26", copy: "Employer-backed access" },
    { name: "Body", size: "15 / 26", copy: "A calm, readable paragraph for product explanations." },
    { name: "Label", size: "12 / 16", copy: "EMPLOYER APPROVED" },
  ];

  return (
    <StaticShell>
      <section className="style-guide-page">
        <aside className="style-guide-nav" aria-label="Style guide sections">
          <img src="/brand/mobpae-icon-color.png" alt="" loading="lazy" decoding="async" />
          <p>MobPae System</p>
          <nav>
            {sections.map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`}>{section}</a>
            ))}
          </nav>
        </aside>

        <div className="style-guide-content">
          <header className="style-guide-hero">
            <p className="eyebrow">Style guide</p>
            <h1>The MobPae website design system.</h1>
            <p>
              A compact reference for the typography, colors, components and motion language
              used across the MobPae marketing website.
            </p>
          </header>

          <StyleSection id="typography" eyebrow="01" title="Typography" icon={<Type size={20} />}>
            <div className="style-type-list">
              {typeScale.map((item) => (
                <article key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.copy}</strong>
                  <small>{item.size}px · Inter</small>
                </article>
              ))}
            </div>
          </StyleSection>

          <StyleSection id="colors" eyebrow="02" title="Colors" icon={<Palette size={20} />}>
            <div className="style-color-grid">
              {colors.map((color) => (
                <article key={color.name} style={{ background: color.value, color: color.text }}>
                  <span>{color.name}</span>
                  <strong>{color.value}</strong>
                </article>
              ))}
            </div>
          </StyleSection>

          <StyleSection id="buttons" eyebrow="03" title="Buttons" icon={<MousePointer2 size={20} />}>
            <div className="style-button-row">
              <a className="btn-primary" href="#buttons">Request Demo <ArrowRight size={17} /></a>
              <a className="btn-secondary" href="#buttons">Learn More</a>
              <button className="style-button-ghost" type="button">Cancel</button>
              <button className="style-button-disabled" type="button" disabled>Not available</button>
            </div>
          </StyleSection>

          <StyleSection id="cards" eyebrow="04" title="Cards" icon={<Layers size={20} />}>
            <div className="style-card-grid">
              {[
                { icon: <ShieldCheck size={20} />, title: "Trust surface", body: "Used for security, compliance and employer confidence messaging." },
                { icon: <Wallet size={20} />, title: "Product surface", body: "Used for employee salary access, repayments and activity previews." },
                { icon: <Building2 size={20} />, title: "Employer surface", body: "Used for HR, payroll and approval workflows." },
              ].map((card) => (
                <article key={card.title} className="style-demo-card">
                  <span>{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </StyleSection>

          <StyleSection id="forms" eyebrow="05" title="Forms" icon={<FormInput size={20} />}>
            <div className="style-form-demo">
              <label>
                Email
                <input type="email" placeholder="name@company.com" />
              </label>
              <label>
                Company size
                <select defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option>1 - 50 employees</option>
                  <option>51 - 250 employees</option>
                  <option>250+ employees</option>
                </select>
              </label>
              <label className="style-form-demo__wide">
                Message
                <textarea placeholder="Tell us about your payroll cycle" />
              </label>
            </div>
          </StyleSection>

          <StyleSection id="grids" eyebrow="06" title="Grids" icon={<Grid3X3 size={20} />}>
            <div className="style-grid-demo" aria-hidden="true">
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index}>0{index + 1}</span>
              ))}
            </div>
          </StyleSection>

          <StyleSection id="spacing" eyebrow="07" title="Spacing" icon={<Compass size={20} />}>
            <div className="style-spacing-demo" aria-label="Spacing scale">
              {[8, 12, 16, 24, 32, 48].map((space) => (
                <div key={space}>
                  <span>{space}px</span>
                  <strong style={{ width: `${space * 3}px` }} />
                </div>
              ))}
            </div>
          </StyleSection>

          <StyleSection id="tabs" eyebrow="08" title="Tabs" icon={<SlidersHorizontal size={20} />}>
            <div className="style-tabs-demo" role="tablist" aria-label="Demo tabs">
              <button type="button" className="is-active" role="tab" aria-selected="true">Employers</button>
              <button type="button" role="tab" aria-selected="false">Employees</button>
              <button type="button" role="tab" aria-selected="false">Partners</button>
            </div>
          </StyleSection>

          <StyleSection id="motion" eyebrow="09" title="Motion" icon={<Sparkles size={20} />}>
            <div className="style-motion-demo">
              <div><Sparkles size={20} /><span>Soft reveal</span></div>
              <div><Zap size={20} /><span>Button lift</span></div>
              <div><Compass size={20} /><span>Calm drift</span></div>
              <div><LockKeyhole size={20} /><span>Reduced motion safe</span></div>
            </div>
          </StyleSection>
        </div>
      </section>
    </StaticShell>
  );
}

function StyleSection({
  id,
  eyebrow,
  title,
  icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="style-section">
      <div className="style-section__header">
        <span>{eyebrow}</span>
        <div>
          <span className="style-section__icon">{icon}</span>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="style-section__body">{children}</div>
    </section>
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
            <p className="eyebrow">
              Employer enquiry
            </p>
            <h2 style={{ fontSize: "clamp(25px, 2.25vw, 34px)" }}>
              One connected enquiry flow for every employer conversation.
            </h2>
            <p className="mt-6 max-w-[560px]" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--mp-muted)" }}>
              Share a few details on the home enquiry form. Our team will review your payroll cycle, approval process and pilot fit before onboarding.
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

          <div className="premium-card">
            <p className="eyebrow" style={{ marginBottom: 4 }}>Book a Demo</p>
            <h2 style={{ fontSize: 28 }}>
              Use the enquiry form on the home page.
            </h2>
            <p className="mt-4" style={{ fontSize: 14, lineHeight: 1.75, color: "var(--mp-muted)" }}>
              MobPae keeps one connected enquiry form so every website lead enters
              the same backend flow.
            </p>
            <Link to="/#enquiry" className="premium-button mt-8">
              Open Enquiry Form <ArrowRight size={17} />
            </Link>
          </div>
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
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <HeroPanel>
          <div className="icon-bubble">
            {icon}
          </div>
          <div className="mt-7 grid gap-4">
            {content.sections.slice(0, 2).map((section) => (
              <div key={section.title} style={{ borderTop: "1px solid var(--mp-border)", paddingTop: 16 }}>
                <p className="m-0" style={{ fontSize: 15, color: "var(--mp-ink)" }}>{section.title}</p>
                <p className="m-0 mt-2" style={{ fontSize: 13, lineHeight: 1.65, color: "var(--mp-muted)" }}>{section.body}</p>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      <section className="section-shell section-shell--white">
        <div className="site-rail">
          <div className="grid gap-5 md:grid-cols-2">
            {content.sections.map((section) => (
              <article key={section.title} className="premium-card">
                <h2 style={{ margin: 0, fontSize: 20, letterSpacing: "-0.02em", color: "var(--mp-ink)" }}>
                  {section.title}
                </h2>
                <p className="mt-4" style={{ fontSize: 14, lineHeight: 1.8, color: "var(--mp-muted)" }}>
                  {section.body}
                </p>
                {section.points && (
                  <div className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                        style={{ fontSize: 13, color: "var(--mp-ink)" }}
                      >
                        <CheckCircle2 size={16} style={{ color: "var(--mp-blue)" }} />
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
    <div className="flex gap-4 rounded-2xl p-5" style={{ border: "1px solid var(--mp-border)", background: "#fff" }}>
      <span className="icon-bubble" style={{ width: 44, height: 44, flexShrink: 0 }}>
        {icon}
      </span>
      <div>
        <p className="m-0" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--mp-muted)" }}>
          {label}
        </p>
        <p className="mt-1" style={{ fontSize: 15, color: "var(--mp-ink)" }}>{value}</p>
      </div>
    </div>
  );
}
