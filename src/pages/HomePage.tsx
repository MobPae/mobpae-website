import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Banknote,
  CalendarClock,
  Check,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Star,
  WalletCards,
  X,
} from "lucide-react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "../hooks/useInView";
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

const cases = [
  {
    tag: "Employees",
    title: "Access earned wages with greater financial confidence",
    href: "/employees",
    image: "/ref/project/h3_project_img01.jpg",
  },
  {
    tag: "Employers",
    title: "Support financial wellness across your workforce",
    href: "/employers",
    image: "/ref/project/h3_project_img02.jpg",
  },
  {
    tag: "Partners",
    title: "Enable responsible finance through payroll integration",
    href: "/product",
    image: "/ref/project/h3_project_img03.jpg",
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

const quotes = [
  {
    name: "HR Lead",
    role: "Manufacturing employer",
    initials: "HR",
    quote:
      "Approvals stay with us. Employees get help before payday, and recovery sits in the next salary cycle.",
  },
  {
    name: "People Ops",
    role: "IT services employer",
    initials: "PO",
    quote:
      "We wanted a benefit people would actually use, without turning HR into a lending desk.",
  },
  {
    name: "Plant Manager",
    role: "Logistics employer",
    initials: "PM",
    quote:
      "Go-live was straightforward. Eligibility, requests, and settlements are visible in one place.",
  },
  {
    name: "CHRO",
    role: "Retail employer",
    initials: "CH",
    quote:
      "₹0 capital from our side, and employees stop waiting until payday for genuine emergencies.",
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
        src="/ref/banner/h3_hero_img01.svg"
        alt="Employee reviewing earned wages from a laptop"
        width={596}
        height={544}
      />
      <img
        className="bk-banner__orbit"
        src="/ref/banner/h3_hero_img02.svg"
        alt=""
        aria-hidden="true"
      />
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

function WhyArt() {
  return (
    <div className="bk-about__art">
      <div className="bk-why-stage">
        <img
          className="bk-why-stage__scene"
          src="/home/why-mobpae-art.jpg"
          alt="Illustrated payday scene with salary access, a calendar, and rupee coins"
          width={1536}
          height={1024}
        />
        <div className="bk-why-phone" aria-hidden="true">
          <img
            src="/product-shots/dashboard.png"
            alt=""
            width={800}
            height={1847}
          />
        </div>
        <div className="bk-why-chip bk-why-chip--a">
          <span>Available today</span>
          <strong>₹4,200</strong>
        </div>
        <div className="bk-why-chip bk-why-chip--b">
          <span>Settles on payday</span>
          <strong>Automatic</strong>
        </div>
        <div className="bk-why-chip bk-why-chip--c">
          <span>Employer capital</span>
          <strong>₹0</strong>
        </div>
      </div>
    </div>
  );
}

function CaseSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (typeof window.matchMedia !== "function") {
        setPerView(3);
        return;
      }
      if (window.matchMedia("(max-width: 767.98px)").matches) setPerView(1);
      else if (window.matchMedia("(max-width: 1199.98px)").matches)
        setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, cases.length - perView);
  const activeIndex = Math.min(index, maxIndex);

  return (
    <>
      <div className="bk-cases__viewport">
        <div
          className="bk-cases__track"
          style={{
            ["--bk-per" as string]: String(perView),
            transform: `translateX(calc(${activeIndex} * -1 * ((100% + 30px) / ${perView})))`,
          }}
        >
          {cases.map((item, caseIndex) => (
            <article className="bk-case" key={`${item.title}-${caseIndex}`}>
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
      </div>
      <div className="bk-cases__nav">
        <button
          type="button"
          className="bk-nav-btn"
          aria-label="Previous case studies"
          onClick={() =>
            setIndex((value) => Math.max(0, Math.min(maxIndex, value) - 1))
          }
        >
          <ArrowRight size={18} style={{ transform: "rotate(180deg)" }} />
        </button>
        <button
          type="button"
          className="bk-nav-btn"
          aria-label="Next case studies"
          onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
}

function Counters() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  const stats = useMemo(
    () => [
      { icon: Banknote, value: "< 2 wks", label: "Employer go-live time" },
      { icon: WalletCards, value: "60 sec", label: "Employee request time" },
      { icon: ShieldCheck, value: "₹0", label: "Employer capital required" },
      { icon: BadgeCheck, value: "100%", label: "HR-controlled approvals" },
    ],
    [],
  );

  return (
    <section className="bk-counters">
      <div className="bk-rail bk-counter-grid" ref={ref}>
        {stats.map((stat) => (
          <article className="bk-counter" key={stat.label}>
            <span className="bk-counter__icon">
              <stat.icon size={56} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <strong>{inView ? stat.value : "—"}</strong>
              <p>{stat.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
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
              <div className="bk-banner__bottom">
                <Link to="/#enquiry" className="bk-btn">
                  Request Demo <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <div className="bk-clients">
                  <div>
                    <strong>₹0</strong>
                    <p>Employer capital required</p>
                  </div>
                </div>
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
                <span className="bk-sub">
                  Features you’ll love and use every day
                </span>
                <h2 className="bk-title">
                  Designed for the moments between salary and need.
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

        <section className="bk-about bk-py">
          <div className="bk-rail bk-split">
            <WhyArt />
            <div className="bk-about__copy">
              <span className="bk-sub">WHY MOBPAE?</span>
              <h2 className="bk-title">Financial Wellness Beyond Payday</h2>
              <p>
                Help employees access earned wages before payday while improving
                financial well-being, productivity, and workplace satisfaction.
              </p>
              <Link className="bk-about-card" to="/about">
                <div className="bk-about-card__left">
                  <span className="bk-icon">
                    <ShieldCheck size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>Access Salary Early</h3>
                    <p>
                      View available earnings and request funds anytime before
                      payday.
                    </p>
                  </div>
                </div>
                <span className="bk-about-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link className="bk-about-card" to="/about">
                <div className="bk-about-card__left">
                  <span className="bk-icon">
                    <CalendarClock size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>Automatic Payroll Settlement</h3>
                    <p>
                      Repayment is seamlessly deducted during the next payroll
                      cycle.
                    </p>
                  </div>
                </div>
                <span className="bk-about-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bk-choose bk-pb">
          <div className="bk-rail bk-split">
            <div className="bk-choose__copy">
              <span className="bk-sub">HOW IT WORKS?</span>
              <h2 className="bk-title">Access Your Salary Before Payday</h2>
              <p>
                Get secure access to earned wages through a simple
                employer-powered process designed for employees and businesses.
              </p>
              <ul className="bk-checks">
                <li>
                  <Check size={16} aria-hidden="true" /> Earn salary throughout
                  the month
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Request access to
                  available earnings
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Automatic settlement on
                  payday
                </li>
              </ul>
              <Link to="/contact" className="bk-btn">
                Get Started <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="bk-choose__art">
              <img src="/ref/images/choose_img01.svg" alt="" />
              <img src="/ref/images/choose_img02.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="bk-cases bk-pb">
          <div className="bk-rail">
            <div className="bk-cases-head">
              <span className="bk-sub">OUR ECOSYSTEM</span>
              <h2 className="bk-title">
                A Win-Win Model For Employees, Employers & Partners
              </h2>
            </div>
          </div>
          <div className="bk-wide">
            <div className="bk-cases__wrap">
              <CaseSlider />
            </div>
          </div>
        </section>

        <Counters />

        <section className="bk-team bk-py">
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

        <section className="bk-quotes bk-py">
          <div className="bk-rail">
            <div className="bk-center">
              <span className="bk-sub">Employer voices</span>
              <h2 className="bk-title">What teams look for in salary access</h2>
            </div>
            <div className="bk-quote-grid">
              {quotes.map((item) => (
                <article className="bk-quote" key={item.name}>
                  <div className="bk-quote__top">
                    <div className="bk-quote__author">
                      <span className="bk-avatar">{item.initials}</span>
                      <div>
                        <h3>{item.name}</h3>
                        <small>{item.role}</small>
                      </div>
                    </div>
                    <div className="bk-stars" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star key={star} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p>“{item.quote}”</p>
                  <img
                    className="bk-quote__mark"
                    src="/ref/icons/quote02.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </article>
              ))}
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
