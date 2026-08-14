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

// const services = [
//   {
//     icon: WalletCards,
//     title: "Mobile Application",
//     body: "Transform your siness with consng Weshfixes",
//     href: "/product",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Employer Web App",
//     body: "Transform your siness with consng Weshfixes",
//     href: "/product",
//   },
//   {
//     icon: CalendarClock,
//     title: "Admin Console",
//     body: "Transform your siness with consng Weshfixes",
//     href: "/product",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Lender Platform",
//     body: "Transform your siness with consng Weshfixes",
//     href: "/product",
//   },
// ];
const services = [
  {
    icon: WalletCards,
    title: "Earned Wage Access",
    body: "Your salary, when you need it.",
    href: "/product",
  },
  {
    icon: ShieldCheck,
    title: "Employer Powered",
    body: "Built for modern workplaces.",
    href: "/product",
  },
  {
    icon: CalendarClock,
    title: "Payroll Integrated",
    body: "Seamless salary-linked access.",
    href: "/product",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Platform",
    body: "Secure, compliant, and reliable.",
    href: "/product",
  },
];

const cases = [
  {
    tag: "Employee",
    title: "Access Earned Wages With Greater Financial Confidence",
    href: "/blog",
    image: "/ref/project/h3_project_img01.jpg",
  },
  {
    tag: "Employer",
    title: "Support Financial Wellness Across Your Workforce",
    href: "/blog",
    image: "/ref/project/h3_project_img02.jpg",
  },
  {
    tag: "Partners",
    title: "Enable Responsible Finance Through Payroll Integration",
    href: "/blog",
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
    name: "Mr.Robey Alexa",
    role: "CEO, Xara Agency",
    photo: "/ref/images/testi_avatar04.png",
    quote:
      "Morem ipsum dolor sit amconsectetur adipiscing elitaaey um dolor sitter amet consect eturellam eu neque esacili facilisis vitae massa. Quisque",
  },
  {
    name: "Savannah Nguyen",
    role: "CEO, Xara Agency",
    photo: "/ref/images/testi_avatar02.png",
    quote:
      "Morem ipsum dolor sit amconsectetur adipiscing elitaaey um dolor sitter amet consect eturellam eu neque esacili facilisis vitae massa. Quisque",
  },
  {
    name: "Wade Warren",
    role: "CEO, Xara Agency",
    photo: "/ref/images/testi_avatar03.png",
    quote:
      "Morem ipsum dolor sit amconsectetur adipiscing elitaaey um dolor sitter amet consect eturellam eu neque esacili facilisis vitae massa. Quisque",
  },
  {
    name: "Courtney Henry",
    role: "CEO, Xara Agency",
    photo: "/ref/images/testi_avatar01.png",
    quote:
      "Morem ipsum dolor sit amconsectetur adipiscing elitaaey um dolor sitter amet consect eturellam eu neque esacili facilisis vitae massa. Quisque",
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
            MobPae
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
            <p className="bk-footer__title">About Company</p>
            <p>
              Your Trusted Financial Partner. Employer-powered salary access
              built for responsible liquidity, payroll clarity, and workforce
              wellbeing.
            </p>
            <div className="bk-follow">
              <span>Follow us On:</span>
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
              <i aria-hidden="true">
                <X size={16} />
              </i>
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
            <p>Gujarat, Ahmedabad - 382470</p>
            <div className="bk-contact-line">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:support@mobpae.com">support@mobpae.com</a>
            </div>
            <div className="bk-contact-line">
              <MapPin size={18} aria-hidden="true" />
              <span>Placeholder phone number: +123 888 9999</span>
            </div>
          </div>
        </div>
        <div className="bk-footer__bottom">
          <Link to="/" className="bk-logo" aria-label="MobPae home">
            MobPae
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
      <div className="bk-banner__hero">
        <img src="/ref/banner/h3_hero_img01.svg" alt="" />
        <img
          className="bk-banner__hero-float"
          src="/ref/banner/h3_hero_img02.svg"
          alt=""
        />
        <img
          className="bk-banner__hero-shape"
          src="/ref/banner/h3_hero_shape01.svg"
          alt=""
        />
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
              <h1>Your Trusted Financial Partner.</h1>
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
                  <div className="bk-clients__faces">
                    <img src="/ref/banner/banner__client.png" alt="" />
                  </div>
                  <div>
                    <strong>23M+</strong>
                    <p>Real Clients Reviews</p>
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
            <i aria-hidden="true">
              <X size={16} />
            </i>
          </div>
        </section>

        <section className="bk-services bk-py">
          <div className="bk-rail">
            <div className="bk-center">
              <span className="bk-sub">
                Features you’ll love and use every day
              </span>
              <h2 className="bk-title">
                Designed for the moments between salary and need.
              </h2>
            </div>
            <div className="bk-service-grid">
              {services.map((service) => (
                <article className="bk-service" key={service.title}>
                  <span className="bk-service__icon">
                    <service.icon
                      size={50}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </span>
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
              Discover Our Financial Services.{" "}
              <Link to="/product">Explore All Services</Link>
            </p>
          </div>
        </section>

        <section className="bk-about bk-py">
          <div className="bk-rail bk-split">
            <div className="bk-about__art">
              <img src="/ref/images/h3_about_img.png" alt="" />
            </div>
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
            <CaseSlider />
          </div>
        </section>

        <Counters />

        <section className="bk-team bk-py">
          <div className="bk-rail">
            <div className="bk-team__intro">
              <div>
                <span className="bk-sub">Core Team</span>
                <h2 className="bk-title">
                  Our expert team of professionals here for you
                </h2>
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
                  <div className="bk-member__socials" aria-hidden="true">
                    <LinkedInIcon />
                    <InstagramIcon />
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
              <h2>Let’s Request a Schedule For Free Consultation</h2>
              <div className="bk-cta__right">
                <div className="bk-cta__call">
                  <Phone
                    className="bk-cta__icon"
                    size={50}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <span>Call For More Info</span>
                    <a href="tel:+1238989444">+123 8989 444</a>
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
              <h2 className="bk-title">
                We are very glad to get client review
              </h2>
            </div>
            <div className="bk-quote-grid">
              {quotes.map((item) => (
                <article className="bk-quote" key={item.name}>
                  <div className="bk-quote__top">
                    <div className="bk-quote__author">
                      <span className="bk-avatar">
                        <img src={item.photo} alt="" />
                      </span>
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
                <h2>Get free marketing consultation today</h2>
                <p>
                  Vestibulum lectus mauris ultrices eros in. Cursus sit amet
                  dictum sit amet. Adipiscing.
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
