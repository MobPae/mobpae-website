import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Banknote,
  Check,
  Download,
  FileCheck2,
  Headphones,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
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

// Real contact details only — no phone number exists for MobPae
// anywhere else on the site, so this doesn't invent one just to match a
// three-item reference layout.
const enquiryContacts = [
  {
    icon: Mail,
    label: "Email address",
    value: "support@mobpae.com",
    href: "mailto:support@mobpae.com",
  },
  {
    icon: MapPin,
    label: "Office address",
    value: "Gujarat, Ahmedabad — 382470",
    href: undefined as string | undefined,
  },
  {
    icon: Headphones,
    label: "Support",
    value: "Available 24/7",
    href: undefined as string | undefined,
  },
];

// Three icon-only glass badges floating in the hero's own top/bottom
// margins — decoration, not another copy of the trust copy already said
// in words by the stat row below. label is kept only as the map key,
// not rendered (the whole group is aria-hidden).
const heroBadges = [
  { icon: Lock, label: "Bank-grade security" },
  { icon: ShieldCheck, label: "Employer-approved" },
  { icon: Headphones, label: "24/7 support" },
];

// Cards, not links — see .bk-services__grid below.
const solutions = [
  {
    title: "Earned Wage Access",
    body: "Employees draw a portion of the salary they've already earned — approved by employers, funded by partners, settled automatically on payroll day.",
  },
  {
    title: "Financial Wellness",
    body: "A steadier alternative to high-cost borrowing between paydays, built into the benefits employers already offer.",
  },
  {
    title: "Digital Lending Solutions",
    body: "Policy-bound lending infrastructure for financial partners funding approved requests.",
  },
  {
    title: "Repayment Solutions",
    body: "Payroll-linked repayments with full settlement visibility and an audit trail for every recovery.",
  },
];

// Four cards, one per stage of the flow. Each card is a fixed-height
// crossfade between two full-size layers — a bare icon + one line by
// default, a numbered breakdown on hover/focus — never a height change.
// See .bk-flow__layer in home.css. Step copy is kept deliberately short
// so all four breakdowns fit the same fixed card height without
// scrolling. The icon is a plain CSS-shaped blob (see .bk-flow__icon),
// not a lucide icon.
const howItWorksFlow = [
  {
    label: "SET UP",
    body: "Set the rules before anyone requests.",
    tag: "FOR EMPLOYERS",
    steps: [
      { title: "Onboard your company", body: "Payroll cycle & cutoff dates" },
      { title: "Define the policy", body: "Eligibility, limits, approvals" },
      { title: "Set employee eligibility", body: "Applied from your policy" },
    ],
  },
  {
    label: "REQUEST",
    body: "Access the salary you've already earned.",
    tag: "FOR EMPLOYEES",
    steps: [
      { title: "Complete setup", body: "KYC and bank details" },
      { title: "See available salary", body: "Real-time eligible amount" },
      { title: "Request salary access", body: "Pick an amount, submit" },
      { title: "See what you'll repay", body: "Date & amount, upfront" },
    ],
  },
  {
    label: "APPROVE & DISBURSE",
    body: "Every request is reviewed before funds move.",
    tag: "CONTROLLED BY EMPLOYER",
    steps: [
      { title: "Review with context", body: "Salary, amount, activity" },
      { title: "Approve or reject", body: "Within your policy" },
      { title: "Disbursement begins", body: "Funds move automatically" },
      { title: "Employee gets updated", body: "Status visible instantly" },
    ],
  },
  {
    label: "RECOVER",
    body: "Repayment follows the payroll.",
    tag: "AUTOMATED",
    steps: [
      { title: "Repayment scheduled", body: "Follows the payroll cycle" },
      { title: "Employee stays informed", body: "Amount & status visible" },
      { title: "Recovered through payroll", body: "Deducted automatically" },
      { title: "Track the settlement", body: "Full deduction history" },
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
    tag: "Assigned roles only",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted employee data",
    body: "Salary, bank, and KYC details stay encrypted at rest and in transit.",
    tag: "Bank-grade encryption",
  },
  {
    icon: FileCheck2,
    title: "Approval audit trail",
    body: "Every approval, rejection, and edit is timestamped and traceable.",
    tag: "Fully timestamped",
  },
  {
    icon: BadgeCheck,
    title: "Recovery visibility",
    body: "Deductions and settlement status stay visible against each payroll cycle.",
    tag: "Tracked every cycle",
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

function CountUpNumber({
  value,
  suffix = "",
  duration = 1200,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, prefersReducedMotion]);

  return (
    <>
      {display}
      {suffix}
    </>
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
          <span
            className="bk-banner__glow bk-banner__glow--c"
            aria-hidden="true"
          />
          <span className="bk-banner__ring bk-banner__ring--1" aria-hidden="true" />
          <span className="bk-banner__ring bk-banner__ring--2" aria-hidden="true" />
          <span className="bk-banner__ring bk-banner__ring--3" aria-hidden="true" />
          <span className="bk-banner__star bk-banner__star--1" aria-hidden="true" />
          <span className="bk-banner__star bk-banner__star--2" aria-hidden="true" />
          <span className="bk-banner__star bk-banner__star--3" aria-hidden="true" />
          <span className="bk-banner__star bk-banner__star--4" aria-hidden="true" />
          <span className="bk-banner__star bk-banner__star--5" aria-hidden="true" />

          {/* Small floating icon badges, not text pills — glass-circle
              "images" rather than more copy. Hidden below the width
              where the top/bottom margin they float in disappears (see
              the 991.98px breakpoint in home.css). */}
          <div className="bk-banner__badges" aria-hidden="true">
            {heroBadges.map((badge) => (
              <span className="bk-banner__badge" key={badge.label}>
                <badge.icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
            ))}
          </div>

          <div className="bk-banner__intro">
            <span className="bk-banner__eyebrow">
              <span className="bk-banner__eyebrow-dot" aria-hidden="true" />
              Employer-Backed Earned Wage Access
            </span>
            <h1>
              Payday shouldn&rsquo;t be the only day you get <em>paid.</em>
            </h1>
            <div className="bk-banner__stats">
              <div className="bk-banner__stat">
                <strong>&lt; 1 wk</strong>
                <span>Employer go-live time</span>
              </div>
              <div className="bk-banner__stat">
                <strong>
                  <CountUpNumber value={60} suffix=" sec" />
                </strong>
                <span>Employee request time</span>
              </div>
              <div className="bk-banner__stat">
                <strong>₹0</strong>
                <span>Employer capital required</span>
              </div>
              <div className="bk-banner__stat">
                <strong>
                  <CountUpNumber value={100} suffix="%" />
                </strong>
                <span>HR-controlled approvals</span>
              </div>
            </div>
            <span className="bk-banner__store-note">
              <Download size={15} aria-hidden="true" />
              Available on the App Store &amp; Google Play soon
            </span>
          </div>

          {/* A wide, shallow arc across the very bottom of the hero — the
              curve bulges down at the center and recedes at the edges,
              like a planet's horizon, instead of the section ending on a
              flat cut. preserveAspectRatio="none" lets the same path
              stretch to any width. */}
          <svg
            className="bk-banner__curve"
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,110 L0,46 Q720,-26 1440,46 L1440,110 Z" />
          </svg>
        </section>

        <section className="bk-services bk-py" id="features">
          <div className="bk-wide">
            <span className="bk-sub">OUR SOLUTIONS</span>

            <div className="bk-services__top">
              <div className="bk-services__top-left">
                <h2 className="bk-title bk-services__heading">
                  Financial solutions built for the modern{" "}
                  <span className="bk-gradient-text">workforce</span>.
                  {/* An original faceted-jack ornament (three rotated
                      capsules, not a copied render), set inline right after
                      the heading's last word instead of as a separate block
                      below it — it lands in the trailing whitespace the
                      final short line otherwise leaves empty. */}
                  <svg
                    className="bk-services__decor"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="bkFacetA" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#eaf2ff" />
                        <stop offset="100%" stopColor="#5b9bff" />
                      </linearGradient>
                      <linearGradient id="bkFacetB" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#dfeaff" />
                        <stop offset="100%" stopColor="#0047ff" />
                      </linearGradient>
                      <linearGradient id="bkFacetC" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#c7e2fb" />
                        <stop offset="100%" stopColor="#2a5ce0" />
                      </linearGradient>
                    </defs>
                    <g opacity="0.94">
                      <rect
                        x="84"
                        y="6"
                        width="32"
                        height="188"
                        rx="16"
                        fill="url(#bkFacetA)"
                        stroke="#ffffff"
                        strokeOpacity="0.5"
                      />
                      <rect
                        x="84"
                        y="6"
                        width="32"
                        height="188"
                        rx="16"
                        fill="url(#bkFacetB)"
                        stroke="#ffffff"
                        strokeOpacity="0.5"
                        transform="rotate(60 100 100)"
                      />
                      <rect
                        x="84"
                        y="6"
                        width="32"
                        height="188"
                        rx="16"
                        fill="url(#bkFacetC)"
                        stroke="#ffffff"
                        strokeOpacity="0.5"
                        transform="rotate(120 100 100)"
                      />
                    </g>
                  </svg>
                </h2>
              </div>
              <div className="bk-services__top-right">
                <p className="bk-services__lead">
                  MobPae connects employees, employers, and financial partners
                  on one platform — built around{" "}
                  <mark>instant access to earned wages</mark>,{" "}
                  <em>complete employer control</em>, and{" "}
                  <u>automatic payroll recovery</u>. Our solution brings
                  financial flexibility into the workplace through a seamless,
                  transparent, and employer-integrated experience that works
                  effortlessly across the entire salary cycle.
                </p>
              </div>
            </div>

            <div className="bk-services__grid">
              {/* Cards, not links — they don't navigate anywhere. The
                  hover lift/number-spin (desktop) and the :active press
                  (touch) are the whole interaction. */}
              {solutions.map((solution, index) => (
                <article className="bk-services__item" key={solution.title}>
                  <span className="bk-services__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{solution.title}</h3>
                  <p>{solution.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-choose bk-py" id="how-it-works">
          <div className="bk-rail">
            {/* A 3-column grid: the heading spans the first two columns of
                row one, leaving the third for the first card, then the
                remaining three cards fill row two — the same asymmetric
                bento as the reference, not a centered head over a plain
                2x2. grid-column:span 2 on the head is the only explicit
                placement; auto-placement fills the rest correctly. */}
            <div className="bk-flow">
              <div className="bk-flow__head">
                <span className="bk-sub">HOW IT WORKS</span>
                <h2 className="bk-title">
                  Simple for employees.{" "}
                  <span className="bk-gradient-text">Controlled</span> for
                  employers.
                </h2>
              </div>
              {howItWorksFlow.map((card) => (
                <article className="bk-flow__card" key={card.label}>
                  <div className="bk-flow__head-row">
                    <h3 className="bk-flow__label">{card.label}</h3>
                    <span className="bk-flow__tag">{card.tag}</span>
                  </div>
                  <p className="bk-flow__body">{card.body}</p>
                  <ul className="bk-flow__steps">
                    {card.steps.map((step, stepIndex) => (
                      <li className="bk-flow__step" key={step.title}>
                        <span className="bk-flow__step-num">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <strong>{step.title}</strong>
                          <p>{step.body}</p>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-story bk-py" id="about">
          <div className="bk-rail bk-split">
            <div className="bk-story__proof">
              <ul className="bk-story__points">
                <li className="bk-story__point">
                  <span className="bk-story__point-num">01</span>
                  <div>
                    <h3>Get ahead of payday</h3>
                    <p>
                      Access a portion of your earned salary when you need it,
                      instead of waiting for payday.
                    </p>
                  </div>
                </li>
                <li className="bk-story__point">
                  <span className="bk-story__point-num">02</span>
                  <div>
                    <h3>Employers stay in control</h3>
                    <p>
                      Every limit, approval rule and payout window is set by
                      payroll. Full visibility, zero surprises at settlement.
                    </p>
                  </div>
                </li>
                <li className="bk-story__point">
                  <span className="bk-story__point-num">03</span>
                  <div>
                    <h3>Payroll-linked by design</h3>
                    <p>
                      Recovery happens inside the payroll cycle you already run
                      &mdash; nothing to reconcile by hand.
                    </p>
                  </div>
                </li>
                <li className="bk-story__point">
                  <span className="bk-story__point-num">04</span>
                  <div>
                    <h3>Humans on the other end</h3>
                    <p>
                      A dedicated support desk for HR and employees alike, plus
                      reports that make the whole programme legible.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="bk-story__note">
                <em>Four principles, zero manual work.</em>
              </p>
            </div>
            <div className="bk-story__copy">
              <span className="bk-sub">ABOUT MOBPAE</span>
              <h2 className="bk-title">
                Payday is a <span className="bk-gradient-text">calendar</span>{" "}
                accident. Money shouldn&rsquo;t be.
                {/* The exact same faceted-jack ornament as Our Solutions'
                    heading (see .bk-services__decor) — same glossy blue
                    gradient, same inline-after-the-text placement — reused
                    rather than the earlier orange star, so both section
                    headings carry one consistent "moving icon" motif. */}
                <svg
                  className="bk-services__decor bk-story__decor"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="bkFacetAAbout"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#eaf2ff" />
                      <stop offset="100%" stopColor="#5b9bff" />
                    </linearGradient>
                    <linearGradient
                      id="bkFacetBAbout"
                      x1="1"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#dfeaff" />
                      <stop offset="100%" stopColor="#0047ff" />
                    </linearGradient>
                    <linearGradient
                      id="bkFacetCAbout"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#c7e2fb" />
                      <stop offset="100%" stopColor="#2a5ce0" />
                    </linearGradient>
                  </defs>
                  <g opacity="0.94">
                    <rect
                      x="84"
                      y="6"
                      width="32"
                      height="188"
                      rx="16"
                      fill="url(#bkFacetAAbout)"
                      stroke="#ffffff"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="84"
                      y="6"
                      width="32"
                      height="188"
                      rx="16"
                      fill="url(#bkFacetBAbout)"
                      stroke="#ffffff"
                      strokeOpacity="0.5"
                      transform="rotate(60 100 100)"
                    />
                    <rect
                      x="84"
                      y="6"
                      width="32"
                      height="188"
                      rx="16"
                      fill="url(#bkFacetCAbout)"
                      stroke="#ffffff"
                      strokeOpacity="0.5"
                      transform="rotate(120 100 100)"
                    />
                  </g>
                </svg>
              </h2>
              <p>
                MobPae is an <em>employer-powered</em> earned wage access
                platform that helps employees access a portion of their earned
                salary before payday &mdash; not a <s>loan</s>, just{" "}
                <em>money they&rsquo;ve already earned</em>. We connect
                employees, employers, and financial partners through a secure,
                transparent ecosystem built around{" "}
                <mark>financial wellness</mark>.
              </p>
              <div className="bk-story__stats">
                <div className="bk-story__stat">
                  <strong>1 cycle</strong>
                  <span>
                    From advance to settlement, recovered automatically inside
                    the payroll run.
                  </span>
                </div>
                <div className="bk-story__stat">
                  <strong>100%</strong>
                  <span>
                    Employer-approved workflows, with reports on every
                    disbursal.
                  </span>
                </div>
              </div>
              <p className="bk-story__note">
                <em>Built with payroll, not around it.</em>
              </p>
            </div>
          </div>
        </section>

        <section className="bk-cases bk-py" id="ecosystem">
          <div className="bk-rail">
            <div className="bk-cases-head">
              <span className="bk-sub">WIN-WIN-WIN ECOSYSTEM</span>
              <h2 className="bk-title">
                Built for employees, employers, and{" "}
                <span className="bk-gradient-text">partners</span>.
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
                No risk. No overhead. Real workforce{" "}
                <span className="bk-gradient-text">value</span>.
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
            {/* Mirror of How It Works' bento (see .bk-flow above): same
                3-column grid, but the head sits in row one's right two
                columns instead of the left two, so the first card falls
                to its left — card, then text, then the other three cards
                fill row two. Only the head's explicit grid-column start
                changes; auto-placement does the rest, same as .bk-flow. */}
            <div className="bk-trust__grid">
              <div className="bk-trust__head">
                <span className="bk-sub">SECURITY & TRUST</span>
                <h2 className="bk-title">
                  Built for payroll teams, finance teams, and{" "}
                  <span className="bk-gradient-text">founders</span>.
                </h2>
                <p>
                  The experience stays simple for employees while employers
                  keep the policy, approval, and recovery controls they need.
                </p>
              </div>
              {trustItems.map((item, index) => (
                <article className="bk-trust__item" key={item.title}>
                  <div className="bk-trust__item-top">
                    <span className="bk-trust__icon">
                      <item.icon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="bk-trust__num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="bk-trust__tag">{item.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-cta bk-py">
          <div className="bk-rail">
            <div className="bk-cta__inner">
              <h2>
                Ready to offer{" "}
                <span className="bk-gradient-text bk-gradient-text--on-blue">
                  salary
                </span>{" "}
                access at work?
              </h2>
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
                  Get In Touch <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bk-faq bk-py" id="faq">
          {/* FAQPage structured data — same six questions rendered as
              plain HTML just below, so this is a machine-readable copy
              of what's already on the page rather than separate content
              search engines can't verify. Makes the FAQ eligible for a
              rich result instead of just being indexed as body text. */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.body,
                },
              })),
            })}
          </script>
          <div className="bk-rail">
            <div className="bk-faq__board">
              <div className="bk-about__head">
                <span className="bk-sub">FAQ</span>
                <h2 className="bk-title">
                  Your burning{" "}
                  <span className="bk-gradient-text">questions</span>
                </h2>
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
            {/* The blue card now holds only the copy/contacts column —
                the form is a sibling, not a child, so it renders as its
                own separate white card next to the blue one instead of
                floating inside it. */}
            <div className="bk-enquiry__layout">
              <div className="bk-enquiry__inner">
                <div className="bk-enquiry__shapes" aria-hidden="true">
                  <span className="bk-enquiry__glow bk-enquiry__glow--a" />
                  <span className="bk-enquiry__glow bk-enquiry__glow--b" />
                </div>
                <div className="bk-enquiry__copy">
                  <h2>
                    Request a{" "}
                    <span className="bk-gradient-text bk-gradient-text--on-blue">
                      MobPae
                    </span>{" "}
                    demo
                  </h2>
                  <p>
                    Tell us about your workforce. We’ll walk through
                    eligibility, approvals, and payroll-linked recovery.
                  </p>
                  <ul className="bk-enquiry__contacts">
                    {enquiryContacts.map((item) => (
                      <li className="bk-enquiry__contact" key={item.label}>
                        <div>
                          <span className="bk-enquiry__contact-label">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              className="bk-enquiry__contact-value"
                              href={item.href}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="bk-enquiry__contact-value">
                              {item.value}
                            </span>
                          )}
                        </div>
                        <span className="bk-enquiry__contact-icon">
                          <item.icon size={18} aria-hidden="true" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <form className="bk-form" onSubmit={submitEnquiry} noValidate>
                <div className="bk-form__head">
                  <h3>Share your details</h3>
                  <p>We typically respond within one business day.</p>
                </div>
                <div className="bk-form__row">
                  <Field label="Full name *" error={errors.contactName}>
                    <input
                      name="contactName"
                      value={form.contactName}
                      onChange={updateField}
                      placeholder="e.g. Jane Doe"
                      autoComplete="name"
                      required
                    />
                  </Field>
                  <Field label="Work email *" error={errors.email}>
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
                <div className="bk-form__row">
                  <Field label="Phone">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Company name *" error={errors.companyName}>
                    <input
                      name="companyName"
                      value={form.companyName}
                      onChange={updateField}
                      placeholder="e.g. Acme Pvt Ltd"
                      autoComplete="organization"
                      required
                    />
                  </Field>
                </div>
                <Field label="How can we help?" error={errors.message}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your organisation"
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
                  {loading ? "Submitting..." : "Submit as an Employer"}
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
