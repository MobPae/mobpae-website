import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Banknote,
  Building2,
  CalendarClock,
  Check,
  FileCheck2,
  Lock,
  Mail,
  MapPin,
  Menu,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

const NAV_LINKS = [
  { label: "For Employers", href: "/employers" },
  { label: "For Employees", href: "/employees" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Our Story", href: "/about" },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3.16V21H7V8.48Zm6.32 0H9.5V21h3.77v-6.19c0-3.44 4.48-3.72 4.48 0V21H21v-7.93c0-6.17-6.91-5.94-7.68-2.91V8.48Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

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
    title: "Earned wage access",
    body: "Employees can request a portion of wages already earned, instead of waiting until payday.",
    href: "/product",
  },
  {
    icon: ShieldCheck,
    title: "Employer powered",
    body: "HR stays in control of eligibility, approvals, and recovery — MobPae never replaces payroll.",
    href: "/employers",
  },
  {
    icon: CalendarClock,
    title: "Payroll integrated",
    body: "Disbursals and settlements follow the salary cycle, so repayment is automatic on payday.",
    href: "/how-it-works",
  },
  {
    icon: BadgeCheck,
    title: "Trusted platform",
    body: "Built for compliance-minded employers: traceable requests, partner lending, and ₹0 capital from you.",
    href: "/product",
  },
];

const howItWorksFlow = [
  {
    icon: Smartphone,
    title: "Employee requests",
    body: "The employee chooses an amount, reviews the terms and submits the request.",
  },
  {
    icon: Building2,
    title: "Employer approves",
    body: "The employer checks salary context, policy fit and request history before approving.",
  },
  {
    icon: BadgeCheck,
    title: "MobPae verifies",
    body: "Admin reviews the request, KYC, bank account and platform fee readiness.",
  },
  {
    icon: Banknote,
    title: "Funds are disbursed",
    body: "Approved money is transferred directly to the employee's verified bank account.",
  },
  {
    icon: RefreshCw,
    title: "Recovered on payday",
    body: "Recovery follows the configured payroll cutoff and payday cycle.",
  },
];

const howItWorksLanes = [
  {
    label: "For employers",
    title: "Policy control before funds move.",
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
    steps: [
      {
        number: "01",
        title: "Complete setup",
        body: "Employees submit KYC and bank details once, then wait for verification.",
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
        body: "The amount is recovered automatically through the correct payroll cycle.",
      },
    ],
  },
];

const cases = [
  {
    tag: "Employees",
    title: "Access earned wages with greater financial confidence",
    href: "/employees",
    image: "/home/ecosystem-employees.jpg",
  },
  {
    tag: "Employers",
    title: "Support financial wellness across your workforce",
    href: "/employers",
    image: "/home/ecosystem-employers.jpg",
  },
  {
    tag: "Partners",
    title: "Enable responsible finance through payroll integration",
    href: "/product",
    image: "/home/ecosystem-partners.jpg",
  },
];

const employerReasons = [
  {
    icon: Banknote,
    title: "No employer cash burden",
    body: "Salary access is funded through structured capital partnerships, so payroll cash flow stays untouched.",
  },
  {
    icon: BadgeCheck,
    title: "Employer stays in control",
    body: "Every request follows your policy, salary context, and approval rules before funds move.",
  },
  {
    icon: CalendarClock,
    title: "Payroll-linked recovery",
    body: "Recoveries align with cutoff and payday logic, reducing manual follow-up and reconciliation.",
  },
  {
    icon: FileCheck2,
    title: "Audit-ready operations",
    body: "Approvals, disbursals, recoveries, and settlements remain traceable across the full cycle.",
  },
  {
    icon: Users,
    title: "A retention benefit people use",
    body: "Employees get practical liquidity support without turning the company into a lending desk.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible access",
    body: "Limits, verification, and payroll recovery keep the product useful without encouraging debt dependency.",
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

const team = [
  {
    name: "Luhit Parajuli",
    role: "Co-Founder & Business Strategy",
    photo: "/team/luhit-parajuli.png",
    initials: "LP",
  },
  {
    name: "Jyotirmoy Upadhaya",
    role: "Co-Founder & Technology Lead",
    photo: "/team/jyotirmoy.png",
    initials: "JU",
  },
  {
    name: "Bharati Bhattarai",
    role: "Admin & Legal Head",
    photo: "/team/bharati-bhattarai.png",
    initials: "BB",
  },
  {
    name: "Junu Bhattarai",
    role: "HR & Digital Marketing Lead",
    photo: "/team/junu.png",
    initials: "JB",
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

const heroStats = [
  { icon: Banknote, value: "< 2 wks", label: "Employer go-live time" },
  { icon: WalletCards, value: "60 sec", label: "Employee request time" },
  { icon: ShieldCheck, value: "₹0", label: "Employer capital required" },
  { icon: BadgeCheck, value: "100%", label: "HR-controlled approvals" },
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

function HomeNav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="bk-skip" href="#main-content">
        Skip to main content
      </a>
      <header className={`bk-header ${stuck ? "bk-header--stuck" : ""}`}>
        <div className="bk-header__bar">
          <Link to="/" aria-label="MobPae home" className="bk-logo">
            <img src="/logo.svg" alt="MobPae" />
          </Link>
          <nav className="bk-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="bk-header__actions">
            <a className="bk-header__contact" href="mailto:support@mobpae.com">
              <Mail size={16} aria-hidden="true" />
              support@mobpae.com
            </a>
            <Link to="/#enquiry" className="bk-btn bk-header__cta">
              Request Demo
            </Link>
            <button
              type="button"
              className="bk-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="bk-mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {open ? (
          <nav
            id="bk-mobile-navigation"
            className="bk-mobile"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#enquiry"
              className="bk-btn"
              onClick={() => setOpen(false)}
            >
              Request Demo
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}

function HomeFooter() {
  return (
    <footer className="bk-footer">
      <div className="bk-rail">
        <div className="bk-footer__grid">
          <div>
            <p className="bk-footer__title">About MobPae</p>
            <p>
              Employer-powered salary access for responsible liquidity, payroll
              clarity, and workforce wellbeing.
            </p>
            <div className="bk-follow">
              <span>Follow us</span>
              <a
                href="https://linkedin.com/company/mobpae"
                target="_blank"
                rel="noreferrer"
                aria-label="MobPae on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/mobpae/"
                target="_blank"
                rel="noreferrer"
                aria-label="MobPae on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div>
            <p className="bk-footer__title">Information</p>
            <ul>
              <li>
                <Link to="/about">Our Story</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="bk-footer__title">Quick links</p>
            <ul>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/employers">For Employers</Link>
              </li>
              <li>
                <Link to="/employees">For Employees</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="bk-footer__title">Contact</p>
            <p>Gujarat, Ahmedabad — 382470</p>
            <div className="bk-contact-line">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:support@mobpae.com">support@mobpae.com</a>
            </div>
            <div className="bk-contact-line">
              <MapPin size={18} aria-hidden="true" />
              <span>India</span>
            </div>
          </div>
        </div>
        <div className="bk-footer__bottom">
          <Link to="/" className="bk-logo" aria-label="MobPae home">
            <img src="/logo.svg" alt="MobPae" />
          </Link>
          <p>
            Copyright © {new Date().getFullYear()} MobPae | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function HeroArt() {
  return (
    <div className="bk-banner__art">
      <img
        className="bk-banner__hero-shape"
        src="/ref/banner/h3_hero_shape01.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="bk-banner__person"
        src="/home/hero-person.jpg"
        alt="Employee reviewing available earned wages on a laptop"
        width={1399}
        height={933}
      />
      <span className="bk-banner__orbit" aria-hidden="true" />
      <div className="bk-float-card bk-float-card--tl">
        <span className="bk-float-card__icon">
          <WalletCards size={18} aria-hidden="true" />
        </span>
        <div>
          <em>Available today</em>
          <strong>₹4,200</strong>
        </div>
      </div>
      <div className="bk-float-card bk-float-card--br">
        <span className="bk-float-card__icon">
          <CalendarClock size={18} aria-hidden="true" />
        </span>
        <div>
          <em>Next payday</em>
          <strong>7 days</strong>
        </div>
      </div>
    </div>
  );
}

function EcosystemCards() {
  return (
    <div className="bk-cases__track">
      {cases.map((item) => (
        <article className="bk-case" key={item.title}>
          <div className="bk-case__thumb">
            <img src={item.image} alt="" />
          </div>
          <div className="bk-case__body">
            <Link className="bk-tag" to={item.href}>
              {item.tag}
            </Link>
            <h3>
              <Link to={item.href}>{item.title}</Link>
            </h3>
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
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName.trim(),
          contactPerson: form.contactName.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim() || null,
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
    <div className="bk-home">
      <HomeNav />
      <main id="main-content">
        <section className="bk-banner">
          <div className="bk-rail bk-banner__grid">
            <div className="bk-banner__copy">
              <h1>Your trusted financial partner</h1>
              <p>
                MobPae helps salaried employees access earned wages before
                payday through employer-backed approvals, partner lenders, and
                payroll-linked recovery.
              </p>
              <div className="bk-hero-stats">
                {heroStats.map((stat) => (
                  <article className="bk-hero-stat" key={stat.label}>
                    <span className="bk-hero-stat__icon">
                      <stat.icon
                        size={22}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <strong>{stat.value}</strong>
                      <p>{stat.label}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="bk-banner__bottom">
                <Link to="/#enquiry" className="bk-btn">
                  Request Demo <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <HeroArt />
          </div>
          <div className="bk-banner__shapes" aria-hidden="true">
            <img src="/ref/banner/h3_hero_shape02.svg" alt="" />
            <img src="/ref/banner/h3_hero_shape03.svg" alt="" />
          </div>
          <div className="bk-social">
            <span>Follow us</span>
            <a
              href="https://linkedin.com/company/mobpae"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/mobpae/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </section>

        <section className="bk-services bk-py">
          <div className="bk-rail">
            <div className="bk-features-head">
              <div>
                <span className="bk-sub">EVERYDAY VALUE</span>
                <h2 className="bk-title">
                  Features You’ll Love And Use Every Day
                </h2>
              </div>
              <ol className="bk-cycle" aria-label="Salary access cycle">
                <li>
                  <span>01</span>
                  Earn
                </li>
                <li>
                  <span>02</span>
                  Request
                </li>
                <li>
                  <span>03</span>
                  Payday
                </li>
              </ol>
            </div>
            <div className="bk-service-grid">
              {services.map((service, index) => (
                <article className="bk-service" key={service.title}>
                  <div className="bk-service__top">
                    <span className="bk-service__icon">
                      <service.icon
                        size={42}
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </span>
                    <em>0{index + 1}</em>
                  </div>
                  <h3>
                    <Link to={service.href}>{service.title}</Link>
                  </h3>
                  <p>{service.body}</p>
                  <Link className="bk-service__more" to={service.href}>
                    Read More
                    <img
                      src="/ref/icons/right_arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>
            <p className="bk-services__foot">
              See how MobPae works for employers and employees.{" "}
              <Link to="/product">Explore the product</Link>
            </p>
          </div>
        </section>

        <section className="bk-choose">
          <div className="bk-rail">
            <div className="bk-choose__board">
              <span className="bk-choose__glow bk-choose__glow--a" aria-hidden="true" />
              <span className="bk-choose__glow bk-choose__glow--b" aria-hidden="true" />
              <div className="bk-choose__intro">
                <div className="bk-choose__copy">
                  <span className="bk-sub">HOW IT WORKS?</span>
                  <h2 className="bk-title">
                    Simple for employees. Controlled for employers.
                  </h2>
                  <p>
                    MobPae keeps salary access clear from the first request to
                    the final recovery, with employer approval and payroll logic
                    built into the flow.
                  </p>
                  <ul className="bk-checks">
                    <li>
                      <Check size={16} aria-hidden="true" /> Employees request,
                      employers approve
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> MobPae verifies and
                      disburses
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Recovery follows the
                      payroll cycle
                    </li>
                  </ul>
                  <div className="bk-choose__actions">
                    <Link to="/#enquiry" className="bk-btn">
                      Request Demo <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <Link to="/how-it-works" className="bk-btn bk-btn--line">
                      See the full flow
                    </Link>
                  </div>
                </div>
                <div className="bk-choose__art">
                  <div className="bk-choose__frame">
                    <img
                      src="/home/how-it-works.jpg"
                      alt="Employee requesting earned wages on a phone before payday"
                      width={768}
                      height={1152}
                    />
                    <span className="bk-choose__chip" aria-hidden="true">
                      <Smartphone size={16} /> Live request
                    </span>
                  </div>
                </div>
              </div>
              <ol className="bk-flow">
                {howItWorksFlow.map((item, index) => (
                  <li className="bk-flow__step" key={item.title}>
                    <span className="bk-flow__node">
                      <span className="bk-flow__num">0{index + 1}</span>
                      <span className="bk-flow__icon">
                        <item.icon size={20} aria-hidden="true" />
                      </span>
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ol>
              <p className="bk-choose__bridge">
                One payroll cycle. Two clear jobs.
              </p>
              <div className="bk-choose__lanes">
                {howItWorksLanes.map((lane) => (
                  <article className="bk-lane" key={lane.label}>
                    <span className="bk-sub">{lane.label}</span>
                    <h3>{lane.title}</h3>
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
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bk-story bk-py">
          <div className="bk-rail bk-split">
            <div className="bk-story__collage">
              <img
                className="bk-story__photo bk-story__photo--a"
                src="/home/ecosystem-employees.jpg"
                alt="Employee using salary access at work"
                width={1350}
                height={900}
              />
              <img
                className="bk-story__photo bk-story__photo--b"
                src="/home/ecosystem-partners.jpg"
                alt="Employers and partners collaborating on payroll-linked access"
                width={1350}
                height={900}
              />
              <div className="bk-story__badge">
                <strong>₹0</strong>
                <span>Employer capital required</span>
              </div>
              <div className="bk-story__float">
                <span className="bk-icon">
                  <WalletCards size={22} aria-hidden="true" />
                </span>
                <div>
                  <strong>60 sec</strong>
                  <p>Employee request time</p>
                </div>
              </div>
            </div>
            <div className="bk-story__copy">
              <span className="bk-sub">ABOUT MOBPAE</span>
              <h2 className="bk-title">
                Redefining Salary Access For India’s Workforce
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
                    <Check size={16} aria-hidden="true" /> Access earned wages
                    before payday
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" /> Employer-controlled
                    approval process
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" /> Payroll-linked
                    settlement and recovery
                  </li>
                </ul>
              </div>
              <Link to="/about" className="bk-btn">
                Learn More <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bk-cases bk-pb">
          <div className="bk-rail">
            <div className="bk-cases-head">
              <span className="bk-sub">WIN-WIN-WIN ECOSYSTEM</span>
              <h2 className="bk-title">
                Built for employees, employers, and partners
              </h2>
            </div>
          </div>
          <div className="bk-wide">
            <div className="bk-cases__wrap">
              <EcosystemCards />
            </div>
          </div>
        </section>

        <section className="bk-about bk-py">
          <div className="bk-rail">
            <div className="bk-about__head">
              <span className="bk-sub">WHY EMPLOYERS CHOOSE MOBPAE</span>
              <h2 className="bk-title">
                No risk. No overhead. Real workforce value.
              </h2>
              <p>
                MobPae is a practical workplace benefit: employer-controlled,
                payroll-aware, and easy to operate without becoming a lending
                function.
              </p>
            </div>
            <div className="bk-about__grid">
              {employerReasons.map((reason, index) => (
                <article className="bk-about-card" key={reason.title}>
                  <span className="bk-icon">
                    <reason.icon size={22} aria-hidden="true" />
                  </span>
                  <em>0{index + 1}</em>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-trust">
          <div className="bk-rail">
            <div className="bk-trust__board">
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
              <div className="bk-trust__grid">
                {trustItems.map((item) => (
                  <article className="bk-trust__card" key={item.title}>
                    <span className="bk-icon">
                      <item.icon size={22} aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bk-team">
          <div className="bk-rail">
            <div className="bk-team__intro">
              <div>
                <span className="bk-sub">Core Team</span>
                <h2 className="bk-title">The founding team behind MobPae</h2>
              </div>
              <p>
                A focused founding team across strategy, technology, legal, and
                people operations — building MobPae as an employer-first salary
                access platform.
              </p>
            </div>
            <div className="bk-team-grid">
              {team.map((member) => (
                <article className="bk-member" key={member.name}>
                  <Link to="/team">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    ) : (
                      <div className="bk-member__ph">{member.initials}</div>
                    )}
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </Link>
                  <div className="bk-member__socials">
                    <a
                      href="https://linkedin.com/company/mobpae"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-cta">
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

        <section className="bk-faq" id="faq">
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
              <p className="bk-faq__more">
                Need more detail? <Link to="/faqs">Read all FAQs</Link>
              </p>
            </div>
          </div>
        </section>

        <section id="enquiry" className="bk-enquiry">
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
                <Link to="/contact" className="bk-btn bk-btn--ghost">
                  Contact us <ArrowRight size={16} aria-hidden="true" />
                </Link>
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
      <HomeFooter />
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
