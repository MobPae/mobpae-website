import {
  Building2,
  CalendarClock,
  Landmark,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

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
    title: "NBFC partners",
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
            <div className="story-led-hero__copy">
              <p className="eyebrow">Our Story</p>
              <h1>Built for the salary gap.</h1>
              <p>
                MobPae exists for the space between salary earned and salary paid.
              </p>
            </div>

            <figure className="story-led-media">
              <img
                src="/about/mobpae-story-visual.png"
                alt="A salaried employee in a calm office with payroll and employer approval visuals"
              />
              <figcaption>
                Employer-powered salary access, designed around real payroll cycles.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="story-led-strip">
          <div className="site-rail story-led-strip__grid">
            <h2>Built around the real salary cycle.</h2>
            <p>
              Employer-backed approvals, NBFC partnerships and payroll-linked recovery create a
              controlled financial wellness layer for salaried teams.
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
              <h2>Building India’s employer-powered financial wellness ecosystem.</h2>
              <div className="story-led-principles">
                {principles.map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
