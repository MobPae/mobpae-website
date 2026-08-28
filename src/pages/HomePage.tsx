import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Banknote,
  Briefcase,
  Building2,
  Check,
  Download,
  Factory,
  FileCheck2,
  HandCoins,
  HeartHandshake,
  HeartPulse,
  Headphones,
  Landmark,
  Lock,
  Mail,
  MapPin,
  Quote,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wallet,
} from "lucide-react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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

// Cards, not links — see .mpw-services__grid below. Each card carries a
// small icon badge alongside its number so the four are scannable at a
// glance, not just distinguishable by reading the copy.
const solutions = [
  {
    title: "Earned Wage Access",
    body: "Employees draw a portion of the salary they've already earned — approved by employers, funded by partners, settled automatically on payroll day.",
    icon: Wallet,
  },
  {
    title: "Financial Wellness",
    body: "A steadier alternative to high-cost borrowing between paydays, built into the benefits employers already offer.",
    icon: HeartHandshake,
  },
  {
    title: "Digital Lending Solutions",
    body: "Policy-bound lending infrastructure for financial partners funding approved requests.",
    icon: Landmark,
  },
  {
    title: "Repayment Solutions",
    body: "Payroll-linked repayments with full settlement visibility and an audit trail for every recovery.",
    icon: RefreshCw,
  },
];

// Four cards, one per stage of the flow. Each card is a fixed-height
// crossfade between two full-size layers — a bare icon + one line by
// default, a numbered breakdown on hover/focus — never a height change.
// See .mpw-flow__layer in home.css. Step copy is kept deliberately short
// so all four breakdowns fit the same fixed card height without
// scrolling. The icon is a plain CSS-shaped blob (see .mpw-flow__icon),
// not a lucide icon.
const howItWorksFlow = [
  {
    label: "Set up",
    body: "Set the rules before anyone requests.",
    tag: "FOR EMPLOYERS",
    steps: [
      { title: "Onboard your company", body: "Payroll cycle & cutoff dates" },
      { title: "Define the policy", body: "Eligibility, limits, approvals" },
      { title: "Set employee eligibility", body: "Applied from your policy" },
    ],
  },
  {
    label: "Request",
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
    label: "Approve & disburse",
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
    label: "Recover",
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

// Shared between the featured card beside the head and the plain grid
// below it, so both stay in sync — one card can't drift from the other.
// The number badge is what keeps the 1→2→3→4 sequence readable even
// though card 1 no longer sits directly above card 2 (it's beside the
// heading instead); without it the order only existed in the data, not
// on the page.
function FlowCard({
  card,
  index,
}: {
  card: (typeof howItWorksFlow)[number];
  index: number;
}) {
  return (
    <article className="mpw-flow__card">
      <div className="mpw-flow__head-row">
        <span className="mpw-flow__step-badge">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mpw-flow__label">{card.label}</h3>
        <span className="mpw-flow__tag">{card.tag}</span>
      </div>
      <p className="mpw-flow__body">{card.body}</p>
      <ul className="mpw-flow__steps">
        {card.steps.map((step, stepIndex) => (
          <li className="mpw-flow__step" key={step.title}>
            <span className="mpw-flow__step-num">
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
  );
}

// Three roles, one shared card (see .mpw-cases__panel) — each column's
// own "win," not a repeat of How It Works' process steps just above it.
const ecosystemWins = [
  {
    role: "EMPLOYEES",
    icon: HandCoins,
    title: "Get paid on your own schedule",
    body: "Draw a portion of the salary you've already earned, whenever you need it — approved by your employer, never a loan.",
  },
  {
    role: "EMPLOYERS",
    icon: Briefcase,
    title: "Offer it without the cost",
    body: "A retention benefit that costs nothing to run — funded by partners, controlled entirely by your own approval policy.",
  },
  {
    role: "PARTNERS",
    icon: Landmark,
    title: "Fund responsibly, at scale",
    body: "Policy-bound lending infrastructure with payroll-linked recovery — approved requests only, full visibility end to end.",
  },
];

// Every figure here already appears elsewhere on the page (hero stat
// row, About's copy) — this section just gives them one dedicated,
// larger-type moment instead of splitting them across two sections.
// Deliberately not inventing volume metrics (₹ disbursed, employees
// served) with no real figure behind them yet.
const byTheNumbers = [
  { value: "< 1 wk", label: "Employer go-live time" },
  { value: "60 sec", label: "Employee request time" },
  { value: "₹0", label: "Employer capital required" },
  { value: "1 cycle", label: "Advance to settlement, inside payroll" },
];

// Industry categories, not client logos — MobPae doesn't have named
// employers to feature here yet. Says who the product is built for
// without implying a specific company has onboarded.
const industries = [
  { icon: Building2, label: "IT Services & BPO" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Truck, label: "Retail & Logistics" },
  { icon: Landmark, label: "Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-commerce & D2C" },
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

// Shared between the featured card beside the head and the plain grid
// below it — same reasoning as FlowCard above.
function TrustCard({
  item,
  index,
}: {
  item: (typeof trustItems)[number];
  index: number;
}) {
  return (
    <article className="mpw-trust__item">
      {/* Same header pattern as Our Solutions: a big number on the
          left, a plain icon (no badge circle) on the right — not the
          old filled-circle-icon + small-corner-number layout. */}
      <div className="mpw-trust__item-top">
        <span className="mpw-trust__num">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mpw-trust__icon">
          <item.icon size={28} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span className="mpw-trust__tag">{item.tag}</span>
    </article>
  );
}

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
    <label className="mpw-field">
      <span>{label}</span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
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
  // Spam-filtering fields, kept off React state on purpose — a bot that
  // fills every input it finds will fill this one too (real users never
  // see or touch it), and the fixed mount time lets the API reject
  // submissions that arrive faster than a human could type. Neither is
  // rendered as a validation error; the server just quietly no-ops.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formLoadedAtRef = useRef<number | null>(null);

  useEffect(() => {
    formLoadedAtRef.current = Date.now();
  }, []);

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
          // Spam signals — see the honeypotRef/formLoadedAtRef comment
          // above. A real submission always has an empty honeypot and a
          // startedAt a few seconds in the past.
          honeypot: honeypotRef.current?.value || "",
          startedAt: formLoadedAtRef.current ?? Date.now(),
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
    <div className="mpw-home">
      <SiteHeader />
      <main id="main-content">
        <section className="mpw-banner">
          {/* One soft central glow for depth — the grid pattern, rings,
              stars, and floating badges are gone. They read as busy
              rather than premium once everything else on the page was
              this quiet, and the badges in particular competed with
              the headline for the first thing your eye lands on. */}
          <span
            className="mpw-banner__glow mpw-banner__glow--c"
            aria-hidden="true"
          />

          <div className="mpw-banner__intro">
            <span className="mpw-banner__eyebrow">
              <span className="mpw-banner__eyebrow-dot" aria-hidden="true" />
              Employer-Backed Earned Wage Access
            </span>
            <h1>
              Payday shouldn&rsquo;t be the only day you get <em>paid.</em>
            </h1>
            <div className="mpw-banner__stats">
              <div className="mpw-banner__stat">
                <strong>&lt; 1 wk</strong>
                <span>Employer go-live time</span>
              </div>
              <div className="mpw-banner__stat">
                <strong>
                  <CountUpNumber value={60} suffix=" sec" />
                </strong>
                <span>Employee request time</span>
              </div>
              <div className="mpw-banner__stat">
                <strong>₹0</strong>
                <span>Employer capital required</span>
              </div>
              <div className="mpw-banner__stat">
                <strong>
                  <CountUpNumber value={100} suffix="%" />
                </strong>
                <span>HR-controlled approvals</span>
              </div>
            </div>
            <span className="mpw-banner__store-note">
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
            className="mpw-banner__curve"
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,110 L0,46 Q720,-26 1440,46 L1440,110 Z" />
          </svg>
        </section>

        <section className="mpw-services mpw-py" id="features">
          <div className="mpw-wide">
            <span className="mpw-sub">OUR SOLUTIONS</span>

            <div className="mpw-services__top">
              <div className="mpw-services__top-left">
                <h2 className="mpw-title mpw-services__heading">
                  Financial solutions built for the modern{" "}
                  <span className="mpw-gradient-text">workforce</span>.
                  {/* An original faceted-jack ornament (three rotated
                      capsules, not a copied render), set inline right after
                      the heading's last word instead of as a separate block
                      below it — it lands in the trailing whitespace the
                      final short line otherwise leaves empty. */}
                  <svg
                    className="mpw-services__decor"
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
                        <stop offset="100%" stopColor="#0057ff" />
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
              <div className="mpw-services__top-right">
                <p className="mpw-services__lead">
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

            <div className="mpw-services__grid">
              {/* Cards, not links — they don't navigate anywhere. The
                  hover lift/number-spin (desktop) and the :active press
                  (touch) are the whole interaction. */}
              {solutions.map((solution, index) => (
                <article className="mpw-services__item" key={solution.title}>
                  <div className="mpw-services__item-top">
                    <span className="mpw-services__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mpw-services__icon">
                      <solution.icon size={28} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpw-choose mpw-py" id="how-it-works">
          <div className="mpw-rail">
            {/* Card 1 sits beside the head, in the head row's own
                explicit 3-column grid (head spans the first two,
                card 1 takes the third) — not the old dense-packed
                bento that let auto-placement decide where things
                landed. Cards 2–4 are a separate grid below, so the
                DOM order (head, card 1, card 2, card 3, card 4) is
                also the visual order: nothing to jump back up for. */}
            <div className="mpw-flow">
              <div className="mpw-flow__top">
                <div className="mpw-flow__head">
                  <span className="mpw-sub">HOW IT WORKS</span>
                  <h2 className="mpw-title">
                    Simple for employees.{" "}
                    <span className="mpw-gradient-text">Controlled</span> for
                    employers.
                  </h2>
                </div>
                <FlowCard card={howItWorksFlow[0]} index={0} />
              </div>
              <div className="mpw-flow__grid">
                {howItWorksFlow.slice(1).map((card, index) => (
                  <FlowCard card={card} index={index + 1} key={card.label} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mpw-story mpw-py" id="about">
          <div className="mpw-rail mpw-split">
            <div className="mpw-story__proof">
              <ul className="mpw-story__points">
                <li className="mpw-story__point">
                  <span className="mpw-story__point-num">01</span>
                  <div>
                    <h3>Get ahead of payday</h3>
                    <p>
                      Access a portion of your earned salary when you need it,
                      instead of waiting for payday.
                    </p>
                  </div>
                </li>
                <li className="mpw-story__point">
                  <span className="mpw-story__point-num">02</span>
                  <div>
                    <h3>Employers stay in control</h3>
                    <p>
                      Every limit, approval rule and payout window is set by
                      payroll. Full visibility, zero surprises at settlement.
                    </p>
                  </div>
                </li>
                <li className="mpw-story__point">
                  <span className="mpw-story__point-num">03</span>
                  <div>
                    <h3>Payroll-linked by design</h3>
                    <p>
                      Recovery happens inside the payroll cycle you already run
                      &mdash; nothing to reconcile by hand.
                    </p>
                  </div>
                </li>
                <li className="mpw-story__point">
                  <span className="mpw-story__point-num">04</span>
                  <div>
                    <h3>Humans on the other end</h3>
                    <p>
                      A dedicated support desk for HR and employees alike, plus
                      reports that make the whole programme legible.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="mpw-story__note">
                <em>Four principles, zero manual work.</em>
              </p>
            </div>
            <div className="mpw-story__copy">
              <span className="mpw-sub">ABOUT MOBPAE</span>
              <h2 className="mpw-title">
                Payday is a <span className="mpw-gradient-text">calendar</span>{" "}
                accident. Money shouldn&rsquo;t be.
                {/* The exact same faceted-jack ornament as Our Solutions'
                    heading (see .mpw-services__decor) — same glossy blue
                    gradient, same inline-after-the-text placement — reused
                    rather than the earlier orange star, so both section
                    headings carry one consistent "moving icon" motif. */}
                <svg
                  className="mpw-services__decor mpw-story__decor"
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
                      <stop offset="100%" stopColor="#0057ff" />
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
              <p className="mpw-story__note">
                <em>Built with payroll, not around it.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Standalone proof-point band — the same facts already stated in
            the hero and (until now) buried inline here in About, pulled
            into one dedicated moment instead of being split across two
            sections. No new numbers invented; every figure here is one
            already said elsewhere on the page in different words. */}
        <section className="mpw-stats mpw-py">
          <div className="mpw-rail">
            <div className="mpw-stats__grid">
              {byTheNumbers.map((item) => (
                <div className="mpw-stats__item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mpw-cases mpw-py" id="ecosystem">
          <div className="mpw-rail">
            <div className="mpw-cases-head">
              <span className="mpw-sub">ECOSYSTEM</span>
              <h2 className="mpw-title">
                Built for employees, employers, and{" "}
                <span className="mpw-gradient-text">partners</span>.
              </h2>
            </div>
            {/* One shared card, not three separate ones — see
                .mpw-cases__panel in home.css. Being physically inside the
                same bordered panel is what shows the three roles are
                connected, rather than a connector graphic laid over
                three otherwise-independent tiles. */}
            <div className="mpw-cases__panel">
              {ecosystemWins.map((item) => (
                <article className="mpw-cases__col" key={item.role}>
                  <span className="mpw-cases__col-icon">
                    <item.icon size={28} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="mpw-cases__col-role">{item.role}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpw-story mpw-py" id="employers">
          <div className="mpw-rail mpw-split">
            <div className="mpw-story__copy">
              <span className="mpw-sub">WHY EMPLOYERS CHOOSE MOBPAE</span>
              <h2 className="mpw-title">
                No risk. No overhead. Real workforce{" "}
                <span className="mpw-gradient-text">value</span>.
              </h2>
              <p>
                MobPae is a practical workplace benefit: employer-controlled,
                payroll-aware, and easy to operate without becoming a lending
                function.
              </p>
              <div className="mpw-story__features">
                <div className="mpw-story__minis">
                  <article className="mpw-story__mini">
                    <span className="mpw-icon">
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
                  <article className="mpw-story__mini">
                    <span className="mpw-icon">
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
                <ul className="mpw-checks">
                  <li>
                    <span className="mpw-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Payroll-linked recovery, not manual chasing
                  </li>
                  <li>
                    <span className="mpw-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    Fully audit-ready operations
                  </li>
                  <li>
                    <span className="mpw-checks__tick">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    A retention benefit employees actually use
                  </li>
                </ul>
              </div>
            </div>
            <div className="mpw-story__collage">
              <div className="mpw-trust-photo">
                <img
                  className="mpw-trust-photo__img"
                  src="/home/hero-person.jpg"
                  alt="An employee reviewing available salary and requesting access from a laptop"
                  width={1399}
                  height={933}
                  loading="lazy"
                />
                <span className="mpw-trust-photo__chip">
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

        {/* Industry categories, not client logos — see the industries
            comment above for why. A quiet trust strip, not a loud one. */}
        <section className="mpw-industries mpw-py">
          <div className="mpw-rail">
            <p className="mpw-industries__label">Built for teams like yours</p>
            <ul className="mpw-industries__list">
              {industries.map((item) => (
                <li className="mpw-industries__chip" key={item.label}>
                  <item.icon size={16} strokeWidth={2} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mpw-trust mpw-py" id="security">
          <div className="mpw-rail">
            {/* Plain full-width head, all four cards left alone below it —
                not paired with a card the way .mpw-flow's head is. Trust's
                cards are too light (number, icon, one line, a tag) to
                stretch gracefully to a 3-line heading's height without
                leaving dead space; How It Works' cards carry enough
                content (a paragraph plus a step list) that pairing one
                with the head actually works there. */}
            <div className="mpw-trust__head">
              <span className="mpw-sub">SECURITY & TRUST</span>
              <h2 className="mpw-title">
                Built for payroll teams, finance teams, and{" "}
                <span className="mpw-gradient-text">founders</span>.
              </h2>
            </div>
            <div className="mpw-trust__grid">
              {trustItems.map((item, index) => (
                <TrustCard item={item} index={index} key={item.title} />
              ))}
            </div>
          </div>
        </section>

        {/* Unattributed pull-quote, not a named testimonial — MobPae
            doesn't have a real quote to feature yet, and a fabricated
            "— Name, Title" would read as a fake endorsement. This is
            MobPae's own voice, styled as one, not attributed to anyone. */}
        <section className="mpw-quote mpw-py">
          <div className="mpw-rail">
            <div className="mpw-quote__inner">
              <Quote className="mpw-quote__mark" aria-hidden="true" />
              <p className="mpw-quote__text">
                Getting paid shouldn&rsquo;t depend on the calendar, and
                helping employees with that shouldn&rsquo;t turn an employer
                into a lender. That split — real access, zero lending
                exposure — is the whole point of MobPae.
              </p>
              <span className="mpw-quote__attr">The MobPae team</span>
            </div>
          </div>
        </section>

        <section className="mpw-cta mpw-py">
          <div className="mpw-rail">
            <div className="mpw-cta__inner">
              <h2>
                Ready to offer{" "}
                <span className="mpw-gradient-text mpw-gradient-text--on-blue">
                  salary
                </span>{" "}
                access at work?
              </h2>
              <div className="mpw-cta__right">
                <div className="mpw-cta__call">
                  <Mail
                    className="mpw-cta__icon"
                    size={42}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <span>Talk with the MobPae team</span>
                    <a href="mailto:support@mobpae.com">support@mobpae.com</a>
                  </div>
                </div>
                <Link to="/#enquiry" className="mpw-btn mpw-btn--ghost">
                  Get In Touch <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mpw-faq mpw-py" id="faq">
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
          <div className="mpw-rail">
            <div className="mpw-faq__board">
              <div className="mpw-about__head">
                <span className="mpw-sub">FAQ</span>
                <h2 className="mpw-title">
                  Your burning{" "}
                  <span className="mpw-gradient-text">questions</span>
                </h2>
                <p>
                  A quick overview of earned wage access, employer approvals,
                  payroll recovery, and data protection.
                </p>
              </div>
              <div className="mpw-faq__list">
                {faqs.map((item, index) => (
                  <details
                    className="mpw-faq__item"
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

        <section id="enquiry" className="mpw-enquiry mpw-py">
          <div className="mpw-rail">
            {/* The blue card now holds only the copy/contacts column —
                the form is a sibling, not a child, so it renders as its
                own separate white card next to the blue one instead of
                floating inside it. */}
            <div className="mpw-enquiry__layout">
              <div className="mpw-enquiry__inner">
                <div className="mpw-enquiry__shapes" aria-hidden="true">
                  <span className="mpw-enquiry__glow mpw-enquiry__glow--a" />
                  <span className="mpw-enquiry__glow mpw-enquiry__glow--b" />
                </div>
                <div className="mpw-enquiry__copy">
                  <h2>
                    Request a{" "}
                    <span className="mpw-gradient-text mpw-gradient-text--on-blue">
                      MobPae
                    </span>{" "}
                    demo
                  </h2>
                  <p>
                    Tell us about your workforce. We’ll walk through
                    eligibility, approvals, and payroll-linked recovery.
                  </p>
                  <ul className="mpw-enquiry__contacts">
                    {enquiryContacts.map((item) => (
                      <li className="mpw-enquiry__contact" key={item.label}>
                        <div>
                          <span className="mpw-enquiry__contact-label">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              className="mpw-enquiry__contact-value"
                              href={item.href}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="mpw-enquiry__contact-value">
                              {item.value}
                            </span>
                          )}
                        </div>
                        <span className="mpw-enquiry__contact-icon">
                          <item.icon size={18} aria-hidden="true" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <form className="mpw-form" onSubmit={submitEnquiry} noValidate>
                {/* Honeypot — invisible to a real visitor (off-screen,
                    not display:none, since some bots skip that) but
                    every field a scripted bot fills in blindly.
                    tabIndex/aria-hidden keep it out of the tab order and
                    off screen readers. */}
                <div className="mpw-honeypot" aria-hidden="true">
                  <label htmlFor="company-website">
                    Leave this field blank
                  </label>
                  <input
                    id="company-website"
                    name="website"
                    type="text"
                    ref={honeypotRef}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="mpw-form__head">
                  <h3>Share your details</h3>
                  <p>We typically respond within one business day.</p>
                </div>
                <div className="mpw-form__row">
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
                <div className="mpw-form__row">
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
                  <p className="mpw-status mpw-status--ok">{success}</p>
                ) : null}
                {error ? (
                  <p className="mpw-status mpw-status--err">{error}</p>
                ) : null}
                <button type="submit" className="mpw-submit" disabled={loading}>
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit as an Employer{" "}
                      <ArrowRight size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="mpw-form__note">
                  <Lock size={13} aria-hidden="true" />
                  No spam. Used only to respond to this enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      {showTop ? (
        <button
          type="button"
          className="mpw-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </div>
  );
}
