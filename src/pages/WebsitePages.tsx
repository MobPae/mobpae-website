import { ArrowRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import "./home.css";

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bk-home">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="bk-page-hero">
      <div className="bk-rail">
        <span className="bk-page-hero__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="bk-page-hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}

/* ── Careers ─────────────────────────────────────────────────────────── */

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

export function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Build financial wellness for the modern workforce."
        description="We are early, focused and product-led. If you care about fintech, design and responsible salary access, MobPae is the kind of problem worth building."
      />
      <section className="bk-py">
        <div className="bk-rail">
          <div className="bk-job-grid">
            {focusAreas.map((role) => (
              <a
                key={role.title}
                className="bk-job-card"
                href={`mailto:support@mobpae.com?subject=${encodeURIComponent(
                  role.title,
                )}`}
              >
                <span className="bk-job-card__tag">{role.area}</span>
                <h2>{role.title}</h2>
                <p className="bk-job-card__meta">
                  {role.location} · {role.type}
                </p>
                <p>{role.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ── Contact ─────────────────────────────────────────────────────────── */

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
    <div className="bk-contact-item">
      <span className="bk-icon">{icon}</span>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export function ContactPage() {
  const steps = [
    "We review your payroll cycle",
    "We map the approval flow",
    "We suggest a pilot-ready next step",
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Let us build a financially stronger workforce."
        description="Tell us about your team and we will help you understand how MobPae can fit your payroll cycle and employee wellness goals."
      />
      <section className="bk-py">
        <div className="bk-rail">
          <div className="bk-contact-grid">
            <div>
              <span className="bk-sub">Employer enquiry</span>
              <h2>One connected enquiry flow for every employer conversation.</h2>
              <p className="bk-contact-grid__intro">
                Share a few details on the home enquiry form. Our team will
                review your payroll cycle, approval process and pilot fit
                before onboarding.
              </p>
              <div className="bk-contact-list">
                <ContactItem
                  icon={<Mail size={20} aria-hidden="true" />}
                  label="Email"
                  value="support@mobpae.com"
                />
                <ContactItem
                  icon={<MapPin size={20} aria-hidden="true" />}
                  label="Address"
                  value="Gujarat, Ahmedabad — 382470"
                />
              </div>
            </div>

            <div className="bk-contact-card">
              <span className="bk-sub">Book a Demo</span>
              <h2>Use the enquiry form on the home page.</h2>
              <p>
                MobPae keeps one connected enquiry form so every website lead
                enters the same backend flow.
              </p>
              <div className="bk-contact-card__steps">
                {steps.map((step) => (
                  <div key={step}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <Link to="/#enquiry" className="bk-btn">
                Open Enquiry Form <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ── Help Center ─────────────────────────────────────────────────────── */

const helpSections = [
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
];

export function HelpCenterPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help Center"
        title="Answers for employees, employers, and partners."
        description="Use this guide for setup, requests, approvals, payroll recovery, and how to reach MobPae support. Product behaviour can vary by employer policy."
      />
      <section className="bk-py">
        <div className="bk-rail">
          <div className="bk-help-grid">
            {helpSections.map((section) => (
              <article className="bk-help-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <div className="bk-help-card__points">
                  {section.points.map((point) => (
                    <div key={point}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="bk-page-hero__actions" style={{ marginTop: 48 }}>
            <Link to="/contact" className="bk-btn">
              Contact MobPae <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/#faq" className="bk-btn bk-btn--line">
              Homepage FAQ
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ── Privacy Policy & Terms (shared doc layout) ─────────────────────── */

type DocSection = {
  title: string;
  body: string;
  points?: string[];
};

function DocPage({
  eyebrow,
  title,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: DocSection[];
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} description={lastUpdated} />
      <section className="bk-py">
        <div className="bk-rail">
          <div className="bk-doc-list">
            {sections.map((section, index) => (
              <article className="bk-doc-item" key={section.title}>
                <span className="bk-doc-item__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.points ? (
                    <div className="bk-doc-item__points">
                      {section.points.map((point) => (
                        <div key={point}>
                          <CheckCircle2 size={15} aria-hidden="true" />
                          {point}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const privacySections: DocSection[] = [
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
];

const termsSections: DocSection[] = [
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
];

export function PrivacyPolicyPage() {
  return (
    <DocPage
      eyebrow="Privacy Policy"
      title="How MobPae collects, uses, and protects information."
      lastUpdated="Last updated 15 August 2026. This draft policy covers the MobPae website, enquiry forms, and — once you are onboarded — the employee app, employer dashboard, and admin operations. You can ask us to revise any clause."
      sections={privacySections}
    />
  );
}

export function TermsPage() {
  return (
    <DocPage
      eyebrow="Terms & Conditions"
      title="Terms for the MobPae website and public product information."
      lastUpdated="Last updated 15 August 2026. These draft terms govern use of this website and information we publish about earned wage access. They are not a customer master agreement. Please review and tell us what to change."
      sections={termsSections}
    />
  );
}
