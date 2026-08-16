import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Banknote,
  Building2,
  CalendarClock,
  Check,
  Download,
  FileCheck2,
  Lock,
  Mail,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
} from "lucide-react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import "./home.css";

const API_BASE = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || ""
).replace(/\/api\/v1\/?$/, "");

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

const services = [
  {
    icon: WalletCards,
    title: "Earned Wage Access",
    body: "Flexible access to earned income before the traditional payday.",
    cta: "For Employees",
    href: "/#ecosystem",
  },
  {
    icon: ShieldCheck,
    title: "Financial Wellness",
    body: "Financial solutions built to improve employee flexibility.",
    cta: "For Employers",
    href: "/#employers",
  },
  {
    icon: Banknote,
    title: "Digital Lending Solutions",
    body: "Seamless digital lending solutions built for financial partners.",
    cta: "For Partners",
    href: "/#ecosystem",
  },
  {
    icon: CalendarClock,
    title: "Repayment Solutions",
    body: "Payroll-linked repayments & settlement management.",
    cta: "For Everyone",
    href: "/#how-it-works",
  },
];

const howItWorksSteps = [
  {
    icon: Smartphone,
    title: "Employees Request",
    body: "Employees open the app and request a portion of the salary they've already earned — no paperwork, no waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Employers Approve",
    body: "Each request is checked against company policy and approved by the employer before any money moves.",
  },
  {
    icon: CalendarClock,
    title: "Recovery Follows Payroll",
    body: "The approved amount is disbursed instantly and recovered automatically on the next payroll cycle.",
  },
];

const howItWorksLanes = [
  {
    label: "For employers",
    title: "Policy control before funds move.",
    icon: Building2,
    steps: [
      {
        number: "01",
        title: "Onboard your company",
        body: "Set up company details, payroll date, cutoff date and approval ownership.",
      },
      {
        number: "02",
        title: "Define the policy",
        body: "Configure eligibility, maximum access and the rules that shape each request.",
      },
      {
        number: "03",
        title: "Approve with context",
        body: "Review employee salary data, request amount and past activity before a decision.",
      },
      {
        number: "04",
        title: "Track recoveries",
        body: "See approved requests, deductions, settlement status and repayment history.",
      },
    ],
  },
  {
    label: "For employees",
    title: "A calm way to access earned salary.",
    icon: Users,
    steps: [
      {
        number: "01",
        title: "Complete setup",
        body: "Once account is accesible, Employees submit KYC and bank details once, then wait for verification.",
      },
      {
        number: "02",
        title: "Request salary access",
        body: "The app shows eligible amount, repayment date and the full payable amount.",
      },
      {
        number: "03",
        title: "Follow every update",
        body: "Employees can see pending approval, employer approval, disbursal and repayment status.",
      },
      {
        number: "04",
        title: "Repay through salary",
        body: "The amount is recovered automatically through the correct payroll cycle or can be prepaid.",
      },
    ],
  },
];

const cases = [
  {
    tag: "Employees",
    title: "Access earned wages with greater financial confidence",
    image: "/home/ecosystem-employees.jpg",
    position: "50% 18%",
  },
  {
    tag: "Employers",
    title: "Support financial wellness across your workforce",
    image: "/home/ecosystem-employers.jpg",
    position: "50% 62%",
  },
  {
    tag: "Partners",
    title: "Enable responsible finance through payroll integration",
    image: "/home/ecosystem-partners.jpg",
    position: "62% 42%",
  },
];

const trustItems = [
  {
    icon: Lock,
    title: "Role-based access",
    body: "Only the people you assign can review, approve, or export employee requests.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted employee data",
    body: "Salary, bank, and KYC details stay encrypted at rest and in transit.",
  },
  {
    icon: FileCheck2,
    title: "Approval audit trail",
    body: "Every approval, rejection, and edit is timestamped and traceable.",
  },
  {
    icon: BadgeCheck,
    title: "Recovery visibility",
    body: "Deductions and settlement status stay visible against each payroll cycle.",
  },
];

const faqs = [
  {
    title: "Is MobPae a loan?",
    body: "No. MobPae is employer-backed earned salary access. It is not positioned as a loan or open-ended credit product.",
  },
  {
    title: "Who approves requests?",
    body: "The employer reviews salary access requests first. Admin operations handle verification, disbursal, and settlement visibility.",
  },
  {
    title: "Does it affect payroll?",
    body: "MobPae is designed around payroll date and cutoff logic so recoveries can align with the correct salary cycle.",
  },
  {
    title: "Does the employer need to fund advances?",
    body: "No. Employer capital required is ₹0. Partner lending funds approved access while HR keeps approval control.",
  },
  {
    title: "How quickly can employees request access?",
    body: "Eligible employees can submit a request in about 60 seconds from the app, subject to employer approval and policy limits.",
  },
  {
    title: "How is employee data protected?",
    body: "Salary, bank, and KYC details are encrypted, and only assigned employer roles can review or export request information.",
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
    <label className="bk-field">
      <span>{label}</span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
  );
}

function EcosystemCards() {
  return (
    <div className="bk-cases__track">
      {cases.map((item) => (
        <article className="bk-case" key={item.title}>
          <div className="bk-case__thumb">
            <img
              src={item.image}
              alt=""
              style={{ objectPosition: item.position }}
            />
          </div>
          <div className="bk-case__body">
            <span className="bk-tag">{item.tag}</span>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
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
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      nextErrors.email = "Invalid email";
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
      const endpoint = API_BASE
        ? `${API_BASE}/employer-enquiries`
        : "/api/enquiry";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactPerson:
            form.contactName || form.companyName || "Website enquiry",
          email: form.email,
          phone: form.phone || null,
          employeeCount: null,
          message: form.message || "Website enquiry",
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
    <div className="bk-home">
      <SiteHeader />
      <main id="main-content">
        <section className="bk-banner">
          <span
            className="bk-banner__glow bk-banner__glow--a"
            aria-hidden="true"
          />
          <span
            className="bk-banner__glow bk-banner__glow--b"
            aria-hidden="true"
          />

          <div className="bk-banner__intro">
            <span className="bk-banner__eyebrow">
              <span className="bk-banner__eyebrow-dot" aria-hidden="true" />
              Employer-Backed Earned Wage Access
            </span>
            <h1>
              Payday shouldn&rsquo;t be the only day you get <em>paid.</em>
            </h1>
            <p className="bk-banner__lead">
              MobPae lets employees draw wages they&rsquo;ve already earned —
              approved by employers, funded by partners, and settled
              automatically on payroll day.
            </p>
            <div className="bk-banner__actions">
              <Link to="/#enquiry" className="bk-btn">
                Request Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="bk-banner__stats">
              <div className="bk-banner__stat">
                <strong>&lt; 1 wk</strong>
                <span>Employer go-live time</span>
              </div>
              <div className="bk-banner__stat">
                <strong>60 sec</strong>
                <span>Employee request time</span>
              </div>
              <div className="bk-banner__stat">
                <strong>₹0</strong>
                <span>Employer capital required</span>
              </div>
              <div className="bk-banner__stat">
                <strong>100%</strong>
                <span>HR-controlled approvals</span>
              </div>
            </div>
            <span className="bk-banner__store-note">
              <Download size={15} aria-hidden="true" />
              Available on the App Store &amp; Google Play soon
            </span>
          </div>

          <div className="bk-banner__ticker">
            <span>Employer-approved</span>
            <span aria-hidden="true">·</span>
            <span>Payroll-linked recovery</span>
            <span aria-hidden="true">·</span>
            <span>Bank-grade security</span>
            <span aria-hidden="true">·</span>
            <span>₹0 capital required</span>
            <span aria-hidden="true">·</span>
            <span>
              <span aria-hidden="true">🇮🇳</span> Made in India
            </span>
          </div>
        </section>

        <section className="bk-services bk-py" id="features">
          <div className="bk-wide">
            <div className="bk-center">
              <span className="bk-sub">OUR SOLUTIONS</span>
              <h2 className="bk-title">
                Financial solutions built for the modern workforce.
              </h2>
            </div>
            <div className="bk-service-grid">
              {services.map((service) => (
                <article className="bk-service" key={service.title}>
                  <svg
                    className="bk-service__shape"
                    viewBox="0 0 392 295"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M221 0H20C8.95431 0 0 8.9543 0 20V234V275C0 286.046 8.9543 295 20 295H217C228.046 295 237 286.046 237 275V245C237 233.954 245.954 225 257 225H372C383.046 225 392 216.046 392 205V20C392 8.95431 383.046 0 372 0H221Z"
                      fill="#fff"
                    />
                  </svg>
                  <div className="bk-service__top">
                    <span className="bk-service__icon">
                      <service.icon
                        size={28}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.body}</p>
                  <span className="bk-service__more">{service.cta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-choose bk-py" id="how-it-works">
          <div className="bk-rail">
            <div className="bk-choose__head">
              <span className="bk-sub">HOW IT WORKS</span>
              <h2 className="bk-title">
                Simple for employees. Controlled for employers.
              </h2>
            </div>
            <div className="bk-steps">
              <div
                className="bk-steps__row bk-steps__row--badges"
                aria-hidden="true"
              >
                {howItWorksSteps.map((step, index) => (
                  <span className="bk-steps__badge" key={step.title}>
                    Step - {String(index + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>
              <div className="bk-steps__line" aria-hidden="true">
                {howItWorksSteps.map((step) => (
                  <span className="bk-steps__dot" key={step.title} />
                ))}
              </div>
              <div className="bk-steps__row bk-steps__row--body">
                {howItWorksSteps.map((step) => (
                  <div className="bk-steps__col" key={step.title}>
                    <span className="bk-steps__icon">
                      <step.icon
                        size={26}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="bk-choose__bridge">
              One payroll cycle. Two clear jobs.
            </p>
            <div className="bk-choose__lanes">
              {howItWorksLanes.map((lane) => (
                <div className="bk-lane-block" key={lane.label}>
                  <div className="bk-lane__head">
                    <span className="bk-lane__icon">
                      <lane.icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="bk-sub">{lane.label}</span>
                      <h3>{lane.title}</h3>
                    </div>
                  </div>
                  <article className="bk-lane">
                    <div className="bk-lane__steps">
                      {lane.steps.map((step) => (
                        <div className="bk-lane__step" key={step.number}>
                          <span>{step.number}</span>
                          <div>
                            <strong>{step.title}</strong>
                            <p>{step.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-story bk-py" id="about">
          <div className="bk-rail bk-split">
            <div className="bk-story__collage">
              <img
                className="bk-story__art"
                src="/home/about-support.svg"
                alt="A MobPae support specialist wearing a headset, seated at a laptop, ready to help employees and employers"
                width={600}
                height={520}
                loading="lazy"
              />
            </div>
            <div className="bk-story__copy">
              <span className="bk-sub">ABOUT MOBPAE</span>
              <h2 className="bk-title">
                Redefining salary access for India’s workforce.
              </h2>
              <p>
                MobPae is an employer-powered earned wage access platform that
                helps employees access a portion of their earned salary before
                payday. We connect employees, employers, and financial partners
                through a secure and transparent ecosystem focused on financial
                wellness.
              </p>
              <div className="bk-story__features">
                <div className="bk-story__minis">
                  <article className="bk-story__mini">
                    <span className="bk-icon">
                      <Users size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>Employee Financial Wellness</h3>
                      <p>
                        Give employees access to earned wages when they need it
                        most.
                      </p>
                    </div>
                  </article>
                  <article className="bk-story__mini">
                    <span className="bk-icon">
                      <ShieldCheck size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>Employer-Powered Platform</h3>
                      <p>
                        Complete visibility and control through
                        employer-approved workflows.
                      </p>
                    </div>
                  </article>
                </div>
                <ul className="bk-checks">
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Access earned wages before payday
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Employer-controlled approval process
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Payroll-linked settlement and recovery
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Dedicated Customer Support
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Proper Reports &amp; Insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bk-cases bk-py" id="ecosystem">
          <div className="bk-rail">
            <div className="bk-cases-head">
              <span className="bk-sub">WIN-WIN-WIN ECOSYSTEM</span>
              <h2 className="bk-title">
                Built for employees, employers, and partners.
              </h2>
            </div>
            <div className="bk-cases__wrap">
              <EcosystemCards />
            </div>
          </div>
        </section>

        <section className="bk-story bk-py" id="employers">
          <div className="bk-rail bk-split">
            <div className="bk-story__copy">
              <span className="bk-sub">WHY EMPLOYERS CHOOSE MOBPAE</span>
              <h2 className="bk-title">
                No risk. No overhead. Real workforce value.
              </h2>
              <p>
                MobPae is a practical workplace benefit: employer-controlled,
                payroll-aware, and easy to operate without becoming a lending
                function.
              </p>
              <div className="bk-story__features">
                <div className="bk-story__minis">
                  <article className="bk-story__mini">
                    <span className="bk-icon">
                      <Banknote size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>No employer cash burden</h3>
                      <p>
                        Access is funded through capital partnerships — payroll
                        cash flow stays untouched.
                      </p>
                    </div>
                  </article>
                  <article className="bk-story__mini">
                    <span className="bk-icon">
                      <BadgeCheck size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>Employer stays in control</h3>
                      <p>
                        Every request follows your policy and approval rules
                        before funds move.
                      </p>
                    </div>
                  </article>
                </div>
                <ul className="bk-checks">
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Payroll-linked recovery, not manual chasing
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Fully audit-ready operations
                  </li>
                  <li>
                    <span className="bk-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    A retention benefit employees actually use
                  </li>
                </ul>
              </div>
            </div>
            <div className="bk-story__collage">
              <div className="bk-trust-photo">
                <img
                  className="bk-trust-photo__img"
                  src="/home/hero-person.jpg"
                  alt="An employee reviewing available salary and requesting access from a laptop"
                  width={1399}
                  height={933}
                  loading="lazy"
                />
                <span className="bk-trust-photo__chip">
                  <ShieldCheck size={17} aria-hidden="true" />
                  <span>
                    <strong>Trusted &amp; protected</strong>
                    <small>Employee wellbeing</small>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bk-trust bk-py" id="security">
          <div className="bk-rail">
            <div className="bk-about__head">
              <span className="bk-sub">SECURITY & TRUST</span>
              <h2 className="bk-title">
                Built for payroll teams, finance teams, and founders.
              </h2>
              <p>
                The experience stays simple for employees while employers keep
                the policy, approval, and recovery controls they need.
              </p>
            </div>
            <div className="bk-trust__strip">
              {trustItems.map((item) => (
                <article className="bk-trust__item" key={item.title}>
                  <span className="bk-trust__icon">
                    <item.icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-cta bk-py">
          <div className="bk-rail">
            <div className="bk-cta__inner">
              <img
                className="bk-cta__shape"
                src="/ref/images/h2_cta_shape.svg"
                alt=""
                aria-hidden="true"
              />
              <h2>Ready to offer salary access at work?</h2>
              <div className="bk-cta__right">
                <div className="bk-cta__call">
                  <Mail
                    className="bk-cta__icon"
                    size={42}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <span>Talk with the MobPae team</span>
                    <a href="mailto:support@mobpae.com">support@mobpae.com</a>
                  </div>
                </div>
                <Link to="/#enquiry" className="bk-btn bk-btn--ghost">
                  Request Demo <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bk-faq bk-py" id="faq">
          <div className="bk-rail">
            <div className="bk-faq__board">
              <div className="bk-about__head">
                <span className="bk-sub">FAQ</span>
                <h2 className="bk-title">Everything you need to know.</h2>
                <p>
                  A quick overview of earned wage access, employer approvals,
                  payroll recovery, and data protection.
                </p>
              </div>
              <div className="bk-faq__list">
                {faqs.map((item, index) => (
                  <details
                    className="bk-faq__item"
                    key={item.title}
                    open={index === 0}
                  >
                    <summary>{item.title}</summary>
                    <p>{item.body}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="bk-enquiry bk-py">
          <div className="bk-rail">
            <div className="bk-enquiry__inner">
              <div className="bk-enquiry__shapes" aria-hidden="true">
                <img src="/ref/images/h2_call_back_shape01.svg" alt="" />
                <img src="/ref/images/h2_call_back_shape02.svg" alt="" />
                <img src="/ref/images/h2_call_back_shape03.svg" alt="" />
              </div>
              <div className="bk-enquiry__copy">
                <h2>Request a MobPae demo</h2>
                <p>
                  Tell us about your workforce. We’ll walk through eligibility,
                  approvals, and payroll-linked recovery.
                </p>
              </div>
              <form className="bk-form" onSubmit={submitEnquiry} noValidate>
                <div className="bk-form__row">
                  <Field label="Full name" error={errors.contactName}>
                    <input
                      name="contactName"
                      value={form.contactName}
                      onChange={updateField}
                      placeholder="Name *"
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
                      placeholder="Work email *"
                      autoComplete="email"
                      required
                    />
                  </Field>
                </div>
                <div className="bk-form__row">
                  <Field label="Phone">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Phone"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Company name" error={errors.companyName}>
                    <input
                      name="companyName"
                      value={form.companyName}
                      onChange={updateField}
                      placeholder="Company name *"
                      autoComplete="organization"
                      required
                    />
                  </Field>
                </div>
                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="How we can help"
                    rows={4}
                    required
                  />
                </Field>
                {success ? (
                  <p className="bk-status bk-status--ok">{success}</p>
                ) : null}
                {error ? (
                  <p className="bk-status bk-status--err">{error}</p>
                ) : null}
                <button type="submit" className="bk-submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      {showTop ? (
        <button
          type="button"
          className="bk-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </div>
  );
}
