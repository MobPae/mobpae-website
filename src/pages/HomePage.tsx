import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardCheck,
  Landmark,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import type { ChangeEvent, CSSProperties, FormEvent, ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

const API_BASE = ((import.meta.env.VITE_API_BASE_URL as string | undefined) || "").replace(
  /\/api\/v1\/?$/,
  "",
);

type FormState = {
  contactName: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  contactName: "",
  email: "",
  companyName: "",
  phone: "",
  message: "",
};

const ecosystemSurfaces = [
  {
    icon: MessageSquare,
    label: "Website",
    title: "Public Website",
    body: "Clear employer enquiry and product education.",
  },
  {
    icon: Users,
    label: "Employer",
    title: "Employer Portal",
    body: "Approval context, policy control, and recovery visibility.",
  },
  {
    icon: WalletCards,
    label: "Employee",
    title: "Employee App",
    body: "Setup, requests, repayment status, and platform fee flow.",
  },
  {
    icon: Landmark,
    label: "Admin",
    title: "Admin Console",
    body: "Verification, disbursal, settlement, and audit operations.",
  },
];

const ecosystemSyncPoints = [
  {
    label: "Approval context",
    body: "Employer decisioning, employee visibility, and admin review stay aligned.",
  },
  {
    label: "Payroll cycle",
    body: "Cutoff, payday, recovery, and settlement logic stays consistent across portals.",
  },
  {
    label: "Financial records",
    body: "Requests, platform fee, disbursal, repayment, and audit trails remain traceable.",
  },
];

const features = [
  {
    icon: WalletCards,
    title: "Salary access that feels simple",
    body: "Employees see what they can access, when it recovers, and what happens next before making a request.",
  },
  {
    icon: ShieldCheck,
    title: "Employer-backed by design",
    body: "Requests move through employer approval first, keeping access responsible and aligned with salary policy.",
  },
  {
    icon: CalendarClock,
    title: "Payroll-aware every day",
    body: "Cutoff date, payday, platform fee, recovery, and settlement context stay visible across the whole workflow.",
  },
];

const workflowPreview = [
  {
    title: "Request",
    body: "Employee starts the flow with eligible amount, payday, and repayment preview visible.",
    icon: WalletCards,
  },
  {
    title: "Employer approval",
    body: "Employer remains in control with salary context and request history before approval.",
    icon: ClipboardCheck,
  },
  {
    title: "Verification",
    body: "MobPae validates readiness, documents, bank details, and platform fee status.",
    icon: BadgeCheck,
  },
  {
    title: "Disbursal",
    body: "Funds move to the employee bank account after the required checks are complete.",
    icon: Banknote,
  },
  {
    title: "Recovery",
    body: "Repayment stays linked to payroll and settlement reporting keeps the cycle traceable.",
    icon: Banknote,
  },
];

const faqs = [
  {
    q: "Is MobPae a loan?",
    a: "MobPae is an employer-powered earned wage access platform. It helps employees access salary they have already earned through a controlled approval workflow.",
  },
  {
    q: "Who approves employee requests?",
    a: "The employer is the first decision-maker. MobPae cannot override employer rejection; admin verification happens only after employer approval.",
  },
  {
    q: "Does MobPae disrupt payroll?",
    a: "No. The product is built around payroll date and cutoff logic so recoveries align with the correct salary cycle.",
  },
  {
    q: "When does the employee pay the platform fee?",
    a: "The platform fee appears after employer approval and before disbursal, so employees do not pay before knowing their request can move forward.",
  },
  {
    q: "How does MobPae protect employer and employee data?",
    a: "The platform uses role-based access, audit logs, encrypted data flows, and a controlled verification process across portals.",
  },
];

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
  );
}

function IconBubble({ icon: Icon }: { icon: typeof ShieldCheck }) {
  return (
    <span className="icon-bubble icon-bubble--blue">
      <Icon size={20} aria-hidden="true" />
    </span>
  );
}

function PremiumCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <article className={`premium-card ${className}`} style={style}>
      {children}
    </article>
  );
}

export function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (!form.contactName.trim()) nextErrors.contactName = "Required";
    if (!form.companyName.trim()) nextErrors.companyName = "Required";
    if (!form.email.trim()) nextErrors.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Invalid email";
    if (!form.message.trim()) nextErrors.message = "Required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(`${API_BASE}/employer-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName.trim(),
          contactPerson: form.contactName.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim() || null,
          employeeCount: null,
          message: form.message.trim(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit enquiry");
      setSuccess("Enquiry submitted. Our team will contact you shortly.");
      setForm(initialForm);
      setErrors({});
    } catch {
      setError("Unable to submit right now. Please email support@mobpae.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="marketing-site">
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <FeatureGrid />
        <EcosystemSection />
        <WorkflowSection />
        <TestimonialsSection />
        <EnquirySection
          form={form}
          errors={errors}
          loading={loading}
          success={success}
          error={error}
          updateField={updateField}
          submitEnquiry={submitEnquiry}
        />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__background" aria-hidden="true" />
      <div className="site-rail home-hero__grid">
        <div className="home-hero__copy">
          <span className="hero-pill">
            <Sparkles size={14} aria-hidden="true" />
            Employer-powered earned wage access
          </span>
          <h1>Your Trusted Financial Partner.</h1>
          <p>
            MobPae helps salaried employees access earned wages before payday through employer-backed
            approvals, NBFC partnerships, and payroll-linked recovery.
          </p>
          <div className="home-hero__actions">
            <Link to="/#enquiry" className="premium-button">
              Request Demo <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/how-it-works" className="premium-button premium-button--ghost">
              See How It Works
            </Link>
          </div>
          <div className="home-hero__proof" aria-label="MobPae platform proof points">
            {["Employer approved", "Payroll linked", "NBFC-ready", "Audit-ready"].map((item) => (
              <span key={item}>
                <Check size={14} aria-hidden="true" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-product-stage" aria-label="MobPae salary access workflow preview">
          <div className="hero-card-glow hero-card-glow--blue" aria-hidden="true" />
          <div className="hero-card-glow hero-card-glow--soft-blue" aria-hidden="true" />
          <div className="hero-object-card hero-object-card--back" aria-hidden="true">
            <span>Payroll linked</span>
            <strong>28 Jul</strong>
          </div>
          <div className="hero-object-card hero-object-card--front">
            <div className="hero-object-card__brand">
              <img src="/brand/mobpae-icon-color.png" alt="" width="36" height="36" />
              <span>MobPae Access</span>
            </div>
            <p>Available before payday</p>
            <strong>₹5,000</strong>
            <div className="hero-object-card__meter">
              <span />
            </div>
            <div className="hero-object-card__rows">
              <span>
                Employer approval <b>Ready</b>
              </span>
              <span>
                Recovery cycle <b>Salary linked</b>
              </span>
            </div>
          </div>
          <div className="hero-object-pill hero-object-pill--left">
            <ShieldCheck size={18} aria-hidden="true" />
            Employer verified
          </div>
          <div className="hero-object-pill hero-object-pill--right">
            <CalendarClock size={18} aria-hidden="true" />
            Payday aware
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="section-shell section-shell--white reference-features">
      <div className="site-rail">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Features you’ll love and use every day</p>
          <h2>Designed for the moments between salary and need.</h2>
        </div>
        <div className="reference-feature-row">
          {features.map((feature) => (
            <article className="reference-feature" key={feature.title}>
              <IconBubble icon={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="section-shell section-shell--white ecosystem-features" id="product">
      <div className="site-rail ecosystem-features__layout">
        <div className="ecosystem-product-visual" aria-label="MobPae product surfaces">
          <div className="ecosystem-product-visual__screen">
            <span>MobPae</span>
            <strong>Salary access workflow</strong>
            <div className="ecosystem-product-visual__flow">
              <span>Request</span>
              <span>Approve</span>
              <span>Disburse</span>
              <span>Recover</span>
            </div>
          </div>
          <div className="ecosystem-product-visual__card ecosystem-product-visual__card--one">
            Employer approved
          </div>
          <div className="ecosystem-product-visual__card ecosystem-product-visual__card--two">
            Payroll linked
          </div>
        </div>

        <div className="ecosystem-features__copy">
          <p className="eyebrow">Product ecosystem</p>
          <h2>Four surfaces. One payroll-aware flow.</h2>
          <p className="ecosystem-features__intro">
            MobPae is not a disconnected set of dashboards. It is a single operating
            layer where enquiry, approval, disbursal, recovery, and settlement move
            with the same source of truth.
          </p>

          <div className="ecosystem-left-panel" aria-label="MobPae connected product surfaces">
            <div className="ecosystem-surface-rail">
              {ecosystemSurfaces.map((surface) => (
                <span className="ecosystem-surface-chip" key={surface.title}>
                  <surface.icon size={16} aria-hidden="true" />
                  {surface.label}
                </span>
              ))}
            </div>

            <div className="ecosystem-surface-stack">
              {ecosystemSurfaces.map((surface) => (
                <article className="ecosystem-surface" key={surface.title}>
                  <div className="ecosystem-surface__icon">
                    <surface.icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{surface.title}</h3>
                    <p>{surface.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="ecosystem-sync-list" aria-label="What stays connected in MobPae">
            {ecosystemSyncPoints.map((point) => (
              <article className="ecosystem-sync-item" key={point.label}>
                <span />
                <div>
                  <h3>{point.label}</h3>
                  <p>{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="how-it-works" className="workflow-section">
      <div className="site-rail workflow-summary">
        <div className="workflow-summary__copy">
          <p className="eyebrow">How it works</p>
          <h2>Salary advances that work for everyone.</h2>
          <p>
            MobPae keeps the flow simple: employees request, employers approve, funds move after
            verification, and recovery stays linked to payroll.
          </p>
          <div className="workflow-summary__actions">
            <Link to="/how-it-works" className="premium-button">
              View full workflow <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="workflow-summary__card" aria-label="MobPae workflow summary">
          {workflowPreview.map((step, index) => (
            <article className="workflow-preview-step" key={step.title}>
              <span className="workflow-preview-step__number">{index + 1}</span>
              <IconBubble icon={step.icon} />
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const quotes = [
    {
      quote:
        "The strongest part of MobPae is that the employer remains in control. It feels like a benefit, not a credit product running outside HR.",
      role: "HR leader, retail workforce",
    },
    {
      quote:
        "Payroll date visibility solves a real confusion point. Employees understand when repayment happens before they request money.",
      role: "Finance operations manager",
    },
    {
      quote:
        "The product is practical because it speaks to all three sides: employee need, employer approval, and capital risk quality.",
      role: "Fintech advisor",
    },
  ];

  return (
    <section className="section-shell section-shell--white">
      <div className="site-rail">
        <div className="section-heading">
          <p className="eyebrow">Early product signals</p>
          <h2>Designed around trust, not shortcuts.</h2>
        </div>
        <div className="quote-grid">
          {quotes.map((item) => (
            <PremiumCard key={item.role} className="quote-card">
              <MessageSquare size={22} aria-hidden="true" />
              <p>“{item.quote}”</p>
              <span>{item.role}</span>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySection({
  form,
  errors,
  loading,
  success,
  error,
  updateField,
  submitEnquiry,
}: {
  form: FormState;
  errors: FormErrors;
  loading: boolean;
  success: string;
  error: string;
  updateField: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submitEnquiry: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="enquiry" className="enquiry-section">
      <div className="site-rail enquiry-section__grid">
        <div className="enquiry-section__copy">
          <p className="eyebrow">Employer enquiry</p>
          <h2>Let’s build a financially stronger workforce.</h2>
          <p>
            Share the basics and our team will schedule a focused call for your payroll, HR, and
            employee wellness requirements.
          </p>
          <ul>
            {["Tailored demo for your organization", "Payroll cycle and approval discussion", "Implementation path for MVP rollout"].map(
              (item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" /> {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <form className="enquiry-form" onSubmit={submitEnquiry} noValidate>
          <div className="enquiry-form__grid">
            <Field label="Full name" error={errors.contactName}>
              <input
                name="contactName"
                value={form.contactName}
                onChange={updateField}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </Field>
          </div>
          <div className="enquiry-form__grid">
            <Field label="Company name" error={errors.companyName}>
              <input
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                placeholder="Company name"
                autoComplete="organization"
                required
              />
            </Field>
            <Field label="Mobile number">
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="+91"
                autoComplete="tel"
              />
            </Field>
          </div>
          <Field label="Message" error={errors.message}>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Tell us about your workforce and payroll setup"
              rows={4}
              required
            />
          </Field>
          {success ? <p className="form-status form-status--success">{success}</p> : null}
          {error ? <p className="form-status form-status--error">{error}</p> : null}
          <button type="submit" className="premium-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit Enquiry"} <ArrowRight size={18} aria-hidden="true" />
          </button>
          <small>We respect your privacy. Your information is used only to contact you about MobPae.</small>
        </form>
      </div>
    </section>
  );
}

function FaqSection({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number;
  setOpenFaq: (index: number) => void;
}) {
  return (
    <section className="faq-section">
      <div className="site-rail faq-section__grid">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Everything you need to know.</h2>
          <p>Clear answers for employers evaluating salary access as a responsible workplace benefit.</p>
          <Link to="/faqs" className="text-link">
            View all FAQs <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const expanded = openFaq === index;
            return (
              <button
                key={item.q}
                type="button"
                className={`faq-item ${expanded ? "faq-item--open" : ""}`}
                aria-expanded={expanded}
                onClick={() => setOpenFaq(expanded ? -1 : index)}
              >
                <span>
                  <strong>{item.q}</strong>
                  {expanded ? <p>{item.a}</p> : null}
                </span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="site-rail">
        <div className="final-cta__card">
          <p className="eyebrow">Ready to empower your team?</p>
          <h2>Beating Your Month End Crunch.</h2>
          <p>
            Give employees a calmer way to handle salary gaps while keeping approval, recovery, and
            settlement workflows structured for employers.
          </p>
          <div>
            <Link to="/#enquiry" className="premium-button premium-button--light">
              Request Demo <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/product" className="premium-button premium-button--dark-ghost">
              Explore Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
