import {
  ArrowRight,
  Building2,
  CalendarClock,
  Landmark,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

const team = [
  {
    initials: "LP",
    photo: "/team/luhit-parajuli.png",
    name: "Luhit Parajuli",
    role: "Co-Founder & Business Strategy",
  },
  {
    initials: "JU",
    photo: "/team/jyotirmoy.png",
    name: "Jyotirmoy Upadhaya",
    role: "Co-Founder & Technology Lead",
  },
  {
    initials: "BB",
    photo: "/team/bharati-bhattarai.png",
    name: "Bharati Bhattarai",
    role: "Admin & Legal Head",
  },
  {
    initials: "JB",
    photo: "/team/junu.png",
    name: "Junu Bhattarai",
    role: "HR & Digital Marketing Lead",
  },
];

const model = [
  {
    icon: WalletCards,
    title: "Employees",
    body: "Timely liquidity without informal borrowing pressure.",
  },
  {
    icon: Building2,
    title: "Employers",
    body: "A workplace benefit that keeps approvals in their hands.",
  },
  {
    icon: Landmark,
    title: "Capital partners",
    body: "Better context through employer-assisted verification.",
  },
];

const principles = [
  "Responsible access",
  "Transparent recovery",
  "Employer-powered trust",
  "Built for Indian payroll",
];

export function AboutPage() {
  return (
    <div className="marketing-site story-led-page">
      <SiteNav />
      <main id="main-content">
        <section className="story-led-hero">
          <div className="site-rail story-led-hero__grid">
            <figure className="story-led-media">
              <picture>
                <source
                  media="(max-width: 720px)"
                  srcSet="/about/our-story-cover-mobile.png"
                />
                <source
                  type="image/webp"
                  srcSet="/about/our-story-cover.webp"
                />
                <img
                  src="/about/our-story-cover.png"
                  alt="MobPae story visual for employer-powered financial wellness"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
              <div className="story-led-hero__copy">
                <h1>Built for the salary gap between paydays.</h1>
                <p>
                  MobPae exists for the space between salary earned and salary
                  paid.
                </p>
              </div>
              <figcaption>
                Employer-powered salary access, designed around real payroll
                cycles.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="story-led-strip">
          <div className="site-rail story-led-strip__grid">
            <h2>Built around the real salary cycle.</h2>
            <p>
              Employer-backed approvals, capital partnerships and payroll-linked
              recovery create a controlled financial wellness layer for salaried
              teams.
            </p>
          </div>
        </section>

        <section className="story-led-model">
          <div className="site-rail">
            <div className="story-led-section-head">
              <p className="eyebrow">The model</p>
              <h2>One flow connecting every stakeholder.</h2>
            </div>

            <div className="story-led-model__grid">
              {model.map(({ icon: Icon, title, body }, index) => (
                <article className="story-led-model__item" key={title}>
                  <span>{`0${index + 1}`}</span>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-led-vision">
          <div className="site-rail story-led-vision__grid">
            <div className="story-led-vision__visual" aria-hidden="true">
              <div className="story-led-vision__card story-led-vision__card--top">
                <ShieldCheck size={22} />
                <span>Employer powered</span>
              </div>
              <div className="story-led-vision__card story-led-vision__card--center">
                <Sparkles size={28} />
                <strong>Financial wellness ecosystem</strong>
              </div>
              <div className="story-led-vision__card story-led-vision__card--bottom">
                <CalendarClock size={22} />
                <span>Payroll aware</span>
              </div>
            </div>

            <div className="story-led-vision__copy">
              <p className="eyebrow">Our vision</p>
              <h2>
                Building India’s employer-powered financial wellness ecosystem.
              </h2>
              <div className="story-led-principles">
                {principles.map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="story-led-team">
          <div className="site-rail">
            <div className="story-led-section-head">
              <p className="eyebrow">The people</p>
              <h2>Meet our team.</h2>
            </div>

            <div className="story-led-team__grid">
              {team.map((member) => (
                <article className="story-led-team__item" key={member.name}>
                  <div className="story-led-team__avatar">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span>{member.initials}</span>
                    )}
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>

            <Link to="/team" className="text-link story-led-team__link">
              Meet the full team <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
