import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileCheck2,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { PageHero } from "../components/PageHero";

type Card = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const benefits: Card[] = [
  {
    icon: Landmark,
    title: "No employer cash burden",
    body: "Salary access is funded through structured capital partnerships, so payroll cash flow stays untouched.",
  },
  {
    icon: BadgeCheck,
    title: "Employer stays in control",
    body: "Every request follows your policy, salary context and approval rules before funds move.",
  },
  {
    icon: Clock3,
    title: "Payroll-linked recovery",
    body: "Recoveries align with cutoff and payday logic, reducing manual follow-up and reconciliation.",
  },
  {
    icon: FileCheck2,
    title: "Audit-ready operations",
    body: "Approvals, disbursals, recoveries and settlements remain traceable across the full cycle.",
  },
  {
    icon: Users,
    title: "Retention benefit",
    body: "Employees get practical liquidity support without pushing the company into lending operations.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible access",
    body: "Limits, verification and payroll recovery keep the product useful without encouraging debt dependency.",
  },
];

const steps = [
  {
    number: "01",
    title: "Onboard the company",
    body: "MobPae captures payroll date, cutoff date, policies and employer verification details.",
  },
  {
    number: "02",
    title: "Set access rules",
    body: "Define eligibility, access percentage, request limits and approval ownership for your workforce.",
  },
  {
    number: "03",
    title: "Review employee requests",
    body: "Employer approval happens first, with salary context and request history visible before any admin action.",
  },
  {
    number: "04",
    title: "Recover through salary",
    body: "Approved advances are recovered in the correct payroll cycle and included in settlement reporting.",
  },
];

const queue = [
  { name: "Priya Sharma", amount: "₹6,000", status: "Ready", tone: "green" },
  { name: "Rahul Mehta", amount: "₹3,500", status: "Policy match", tone: "blue" },
  { name: "Anjali Patel", amount: "₹9,200", status: "Review", tone: "amber" },
];

function BenefitCard({ icon: Icon, title, body }: Card) {
  return (
    <article className="inner-card inner-card--sky">
      <span className="icon-bubble">
        <Icon size={21} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export function EmployersPage() {
  return (
    <div className="inner-page">
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="For employers"
          title={
            <>
              A financial benefit{" "}
              <br />
              your team can trust.
            </>
          }
          description="Offer responsible earned salary access with employer approval, payroll-linked recovery, and clear visibility across every request."
          actions={
            <>
              <Link to="/#enquiry" className="premium-button">
                Request Demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/how-it-works"
                className="premium-button premium-button--ghost"
              >
                See the flow
              </Link>
            </>
          }
        >
          <div className="queue-card">
            <div className="queue-card__header">
              <span className="queue-card__live" aria-hidden="true" />
              <p className="eyebrow">Approval queue</p>
            </div>
            <div className="queue-card__list">
              {queue.map((item) => (
                <div className="queue-card__row" key={item.name}>
                  <span className="queue-card__avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <div className="queue-card__meta">
                    <p>{item.name}</p>
                    <span>{item.amount}</span>
                  </div>
                  <b className={`queue-card__status queue-card__status--${item.tone}`}>
                    {item.status}
                  </b>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        <section className="inner-section inner-section--white">
          <div className="site-rail">
            <div className="inner-section__heading">
              <p className="eyebrow">Why employers choose MobPae</p>
              <h2>No risk. No overhead. Real workforce value.</h2>
              <p>
                MobPae is designed as a practical workplace benefit:
                employer-controlled, payroll-aware, and easy to operate without
                becoming a lending function.
              </p>
            </div>
            <div className="inner-card-grid">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--navy">
          <div className="site-rail inner-section__split">
            <div className="inner-copy">
              <p className="eyebrow">Employer workflow</p>
              <h2>Clear approvals before money moves.</h2>
              <p>
                Employers remain the first decision-maker. MobPae handles the
                operational rails around verification, disbursal visibility,
                recovery and reporting.
              </p>
              <ul className="inner-list">
                <li>
                  <span>✓</span>Salary context visible before approval
                </li>
                <li>
                  <span>✓</span>Payroll cutoff and payday logic respected
                </li>
                <li>
                  <span>✓</span>Settlement reports aligned to recoveries
                </li>
              </ul>
            </div>
            <div className="inner-step-list">
              {steps.map((step) => (
                <article className="inner-step-row" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--soft">
          <div className="site-rail">
            <div className="inner-section__heading inner-section__heading--center">
              <p className="eyebrow">Security and clarity</p>
              <h2>Built for payroll teams, finance teams and founders.</h2>
              <p>
                The experience stays simple for employees while employers keep
                the policy, approval and recovery controls they need.
              </p>
            </div>
            <div className="inner-card-grid inner-card-grid--four">
              {[
                "Role-based access",
                "Encrypted employee data",
                "Approval audit trail",
                "Recovery visibility",
              ].map((item) => (
                <article className="inner-card inner-card--sky" key={item}>
                  <span className="icon-bubble">
                    <ShieldCheck size={20} aria-hidden="true" />
                  </span>
                  <h3>{item}</h3>
                  <p>
                    Designed to keep financial access controlled, visible and
                    responsible.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
