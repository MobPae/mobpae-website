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
  MessageSquare,
  Phone,
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
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3.16V21H7V8.48Zm6.32 0H9.5V21h3.77v-6.19c0-3.44 4.48-3.72 4.48 0V21H21v-7.93c0-6.17-6.91-5.94-7.68-2.91V8.48Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
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
    body: "Employees request salary they have already earned, with eligibility visible before they commit.",
    href: "/employees",
  },
  {
    icon: ShieldCheck,
    title: "Employer approvals",
    body: "HR stays in control. Requests move only after the employer reviews salary context and policy.",
    href: "/employers",
  },
  {
    icon: CalendarClock,
    title: "Payroll-linked recovery",
    body: "Cutoff, payday, platform fee, and repayment stay aligned to the employer payroll cycle.",
    href: "/how-it-works",
  },
  {
    icon: BadgeCheck,
    title: "Verified disbursal",
    body: "KYC, bank details, and fee status are checked before funds move to the employee account.",
    href: "/product",
  },
];

const cases = [
  {
    tag: "Employers",
    title: "Offer salary access without becoming a lender",
    href: "/employers",
    tone: "bk-ph",
  },
  {
    tag: "Employees",
    title: "Request earned wages in a 60-second guided flow",
    href: "/employees",
    tone: "bk-ph bk-ph--amber",
  },
  {
    tag: "Workflow",
    title: "From request to payroll recovery in one operating layer",
    href: "/how-it-works",
    tone: "bk-ph bk-ph--mint",
  },
  {
    tag: "Product",
    title: "Four surfaces, one source of truth for approvals",
    href: "/product",
    tone: "bk-ph bk-ph--lilac",
  },
  {
    tag: "Story",
    title: "Built for responsible liquidity between salary days",
    href: "/about",
    tone: "bk-ph",
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
    role: "Placeholder employer review",
    initials: "HL",
    quote:
      "The strongest part of MobPae is that the employer remains in control. It feels like a benefit, not a credit product running outside HR.",
  },
  {
    name: "Payroll Manager",
    role: "Placeholder operations review",
    initials: "PM",
    quote:
      "Payroll date visibility solves a real confusion point. Employees understand when repayment happens before they request money.",
  },
  {
    name: "People Partner",
    role: "Placeholder wellness review",
    initials: "PP",
    quote:
      "The product is practical because it speaks to all three sides: employee need, employer approval, and capital risk quality.",
  },
  {
    name: "Finance Controller",
    role: "Placeholder finance review",
    initials: "FC",
    quote:
      "Approvals, disbursals, and recoveries stay traceable. That is what makes earned wage access usable at company scale.",
  },
];

const posts = [
  {
    title: "Earned wage access basics for modern employers",
    href: "/blog",
    tone: "bk-ph",
    date: "Placeholder date",
  },
  {
    title: "How payroll-aware recovery keeps salary cycles intact",
    href: "/blog",
    tone: "bk-ph bk-ph--mint",
    date: "Placeholder date",
  },
  {
    title: "Designing employee wellness without informal borrowing",
    href: "/blog",
    tone: "bk-ph bk-ph--amber",
    date: "Placeholder date",
  },
];

const marqueeItems = [
  "Earned Wage Access",
  "Employer Approvals",
  "Payroll Recovery",
  "Employee Wellness",
  "Verified Disbursal",
  "Audit-ready Records",
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
            MobPae
          </Link>
          <nav className="bk-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={location.pathname === link.href ? "page" : undefined}
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
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav id="bk-mobile-navigation" className="bk-mobile" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/#enquiry" className="bk-btn" onClick={() => setOpen(false)}>
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
            <p className="bk-footer__title">About Company</p>
            <p>
              Your Trusted Financial Partner. Employer-powered salary access built for
              responsible liquidity, payroll clarity, and workforce wellbeing.
            </p>
            <div className="bk-follow">
              <span>Follow us On:</span>
              <a href="https://linkedin.com/company/mobpae" target="_blank" rel="noreferrer" aria-label="MobPae on LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/mobpae/" target="_blank" rel="noreferrer" aria-label="MobPae on Instagram">
                <InstagramIcon />
              </a>
              <i aria-hidden="true"><X size={16} /></i>
            </div>
          </div>
          <div>
            <p className="bk-footer__title">Information</p>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="bk-footer__title">Quick links</p>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/employers">For Employers</Link></li>
              <li><Link to="/employees">For Employees</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <p className="bk-footer__title">Contact</p>
            <p>Gujarat, Ahmedabad - 382470</p>
            <div className="bk-contact-line">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:support@mobpae.com">support@mobpae.com</a>
            </div>
            <div className="bk-contact-line">
              <MapPin size={18} aria-hidden="true" />
              <span>Placeholder phone number</span>
            </div>
          </div>
        </div>
        <div className="bk-footer__bottom">
          <Link to="/" className="bk-logo" aria-label="MobPae home">
            MobPae
          </Link>
          <p>Copyright © {new Date().getFullYear()} MobPae | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

function HeroArt() {
  return (
    <div className="bk-banner__art" aria-hidden="true">
      <svg className="bk-banner__blob" viewBox="0 0 520 460" fill="none">
        <ellipse cx="280" cy="240" rx="190" ry="180" fill="#dbe6ff" />
        <circle cx="270" cy="210" r="128" fill="#0047ff" opacity="0.18" />
        <rect x="168" y="96" width="210" height="268" rx="36" fill="#fff" stroke="#dfe1ed" />
        <rect x="188" y="128" width="170" height="18" rx="9" fill="#e7eeff" />
        <rect x="188" y="160" width="132" height="14" rx="7" fill="#f0f3ff" />
        <rect x="188" y="196" width="170" height="72" rx="16" fill="#0047ff" />
        <rect x="204" y="214" width="90" height="10" rx="5" fill="#fff" opacity="0.7" />
        <rect x="204" y="234" width="58" height="16" rx="8" fill="#ffb930" />
        <rect x="188" y="286" width="80" height="48" rx="12" fill="#f5f6fc" />
        <rect x="278" y="286" width="80" height="48" rx="12" fill="#f5f6fc" />
        <circle cx="420" cy="86" r="28" fill="#ffb930" />
        <circle cx="92" cy="320" r="18" fill="#0047ff" />
      </svg>
      <div className="bk-float-card bk-float-card--tl">
        <ShieldCheck size={18} />
        Employer verified
      </div>
      <div className="bk-float-card bk-float-card--br">
        <CalendarClock size={18} />
        Payday aware
      </div>
      <span className="bk-shape bk-shape--dot" />
      <span className="bk-shape bk-shape--ring" />
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
      else if (window.matchMedia("(max-width: 1199.98px)").matches) setPerView(2);
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
          {cases.map((item) => (
            <article className="bk-case" key={item.title}>
              <div className="bk-case__thumb">
                <div className={item.tone} aria-hidden="true" />
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
          onClick={() => setIndex((value) => Math.max(0, Math.min(maxIndex, value) - 1))}
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
    []
  );

  return (
    <section className="bk-counters">
      <div className="bk-rail bk-counter-grid" ref={ref}>
        {stats.map((stat) => (
          <article className="bk-counter" key={stat.label}>
            <span className="bk-icon">
              <stat.icon size={26} aria-hidden="true" />
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
              <h1>Your trusted financial partner for earned wages</h1>
              <p>
                MobPae helps salaried employees access earned wages before payday through
                employer-backed approvals, partner lenders, and payroll-linked recovery.
              </p>
              <div className="bk-banner__bottom">
                <Link to="/#enquiry" className="bk-btn">
                  Request Demo <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <div className="bk-clients">
                  <div className="bk-clients__faces" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div>
                    <strong>HR-first</strong>
                    <p>Employer-controlled access</p>
                  </div>
                </div>
              </div>
            </div>
            <HeroArt />
          </div>
          <div className="bk-social">
            <span>Follow us</span>
            <a href="https://linkedin.com/company/mobpae" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/mobpae/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <i aria-hidden="true"><X size={16} /></i>
          </div>
        </section>

        <section className="bk-services bk-py">
          <div className="bk-rail">
            <div className="bk-center">
              <span className="bk-sub">Our Service</span>
              <h2 className="bk-title">We provide salary access that works for workforces</h2>
            </div>
            <div className="bk-service-grid">
              {services.map((service) => (
                <article className="bk-service" key={service.title}>
                  <span className="bk-icon">
                    <service.icon size={28} aria-hidden="true" />
                  </span>
                  <h3>
                    <Link to={service.href}>{service.title}</Link>
                  </h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
            <p className="bk-services__foot">
              Discover our earned wage access platform.{" "}
              <Link to="/product">Explore All Services</Link>
            </p>
          </div>
        </section>

        <section className="bk-about bk-py">
          <div className="bk-rail bk-split">
            <div className="bk-about__art" aria-hidden="true">
              <div className="bk-about__panel" />
            </div>
            <div className="bk-about__copy">
              <span className="bk-sub">Who we are</span>
              <h2 className="bk-title">Reason for choosing employer-powered salary access</h2>
              <p>
                MobPae is not a disconnected set of dashboards. It is one payroll-aware flow where
                enquiry, approval, disbursal, recovery, and settlement share the same source of truth.
              </p>
              <Link className="bk-about-card" to="/employers">
                <div className="bk-about-card__left">
                  <span className="bk-icon">
                    <ShieldCheck size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>Employer control</h3>
                    <p>Policy, approval, and recovery stay with HR — never outside the company.</p>
                  </div>
                </div>
                <span className="bk-about-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link className="bk-about-card" to="/how-it-works">
                <div className="bk-about-card__left">
                  <span className="bk-icon">
                    <CalendarClock size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>Payroll clarity</h3>
                    <p>Employees see payday, cutoff, and repayment before they request access.</p>
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
              <span className="bk-sub">Why Choose Us</span>
              <h2 className="bk-title">Empowering workplaces with responsible salary access</h2>
              <p>
                Give employees a calmer way to handle salary gaps while keeping approval, recovery,
                and settlement workflows structured for employers.
              </p>
              <ul className="bk-checks">
                <li>
                  <Check size={16} aria-hidden="true" /> No employer capital required
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Every approval and disbursal logged
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Recovery aligned to payroll cutoff
                </li>
              </ul>
              <Link to="/contact" className="bk-btn">
                Need a consultancy <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="bk-choose__art" aria-hidden="true">
              <div className="bk-choose__stack" />
              <span className="bk-choose__orbit bk-choose__orbit--a" />
              <span className="bk-choose__orbit bk-choose__orbit--b" />
            </div>
          </div>
        </section>

        <section className="bk-cases bk-pb">
          <div className="bk-rail">
            <div className="bk-cases-head">
              <span className="bk-sub">Our Case Studies</span>
              <h2 className="bk-title">A systematic approach to earned wage access</h2>
            </div>
          </div>
          <div className="bk-wide">
            <CaseSlider />
          </div>
        </section>

        <Counters />

        <section className="bk-team bk-py">
          <div className="bk-rail">
            <div className="bk-team__intro">
              <div>
                <span className="bk-sub">Core Team</span>
                <h2 className="bk-title">Our expert team of professionals here for you</h2>
              </div>
              <p>
                A focused founding team across strategy, technology, legal, and people operations —
                building MobPae as an employer-first salary access platform.
              </p>
            </div>
            <div className="bk-team-grid">
              {team.map((member) => (
                <article className="bk-member" key={member.name}>
                  <Link to="/team">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} width={148} height={148} loading="lazy" />
                    ) : (
                      <div className="bk-member__ph">{member.initials}</div>
                    )}
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </Link>
                  <div className="bk-member__socials" aria-hidden="true">
                    <LinkedInIcon />
                    <InstagramIcon />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-cta bk-py" style={{ paddingBottom: 0 }}>
          <div className="bk-rail">
            <div className="bk-cta__inner">
              <h2>Let’s request a schedule for a free consultation</h2>
              <div className="bk-cta__right">
                <div className="bk-cta__call">
                  <span className="bk-cta__icon">
                    <Phone size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <span>Call For More Info</span>
                    <a href="mailto:support@mobpae.com">support@mobpae.com</a>
                  </div>
                </div>
                <Link to="/#enquiry" className="bk-btn bk-btn--ghost">
                  Read More <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bk-quotes bk-py">
          <div className="bk-rail">
            <div className="bk-center">
              <span className="bk-sub">Our Testimonials</span>
              <h2 className="bk-title">We are very glad to get client review</h2>
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
                  <MessageSquare className="bk-quote__mark" size={42} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bk-marquee" aria-hidden="true">
          <div className="bk-marquee__row">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="bk-marquee__item" key={`${item}-${index}`}>
                <Star className="bk-star" size={16} fill="currentColor" /> {item}
              </span>
            ))}
          </div>
          <div className="bk-marquee__row bk-marquee__row--rev">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="bk-marquee__item" key={`rev-${item}-${index}`}>
                <Star className="bk-star" size={16} fill="currentColor" /> {item}
              </span>
            ))}
          </div>
        </section>

        <section className="bk-blog bk-py">
          <div className="bk-rail">
            <div className="bk-team__intro">
              <div>
                <span className="bk-sub">Our Latest Blogs</span>
                <h2 className="bk-title">Get more updates for news & articles</h2>
              </div>
              <p>
                Notes on salary access, payroll, and employee wellness. Longer-form MobPae
                articles will live here — these cards are placeholders until publish.
              </p>
            </div>
            <div className="bk-blog-grid">
              {posts.map((post) => (
                <article className="bk-post" key={post.title}>
                  <Link to={post.href} className="bk-post__thumb">
                    <div className={post.tone} aria-hidden="true" />
                    <span className="bk-post__chip">Business</span>
                  </Link>
                  <div className="bk-post__author">
                    <span className="bk-avatar" style={{ width: 36, height: 36, fontSize: 12 }}>
                      MP
                    </span>
                    <span>
                      By <b>MobPae Team</b>
                    </span>
                  </div>
                  <h3>
                    <Link to={post.href}>{post.title}</Link>
                  </h3>
                  <div className="bk-post__meta">
                    <span>{post.date}</span>
                    <span>Comment: 0</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="bk-enquiry">
          <div className="bk-rail">
            <div className="bk-enquiry__inner">
              <div className="bk-enquiry__copy">
                <h2>Get a free MobPae consultation today</h2>
                <p>
                  Share the basics and our team will schedule a focused call for your payroll,
                  HR, and employee wellness requirements.
                </p>
                <Link to="/contact" className="bk-btn bk-btn--ghost">
                  Contact With Us <ArrowRight size={16} aria-hidden="true" />
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
                      placeholder="E-mail *"
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
                    placeholder="Comments"
                    rows={4}
                    required
                  />
                </Field>
                {success ? <p className="bk-status bk-status--ok">{success}</p> : null}
                {error ? <p className="bk-status bk-status--err">{error}</p> : null}
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
