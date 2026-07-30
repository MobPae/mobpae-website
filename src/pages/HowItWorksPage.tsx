import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Landmark,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

type FlowItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const flow: FlowItem[] = [
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

const employerSteps = [
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
];

const employeeSteps = [
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
];

const trustItems: FlowItem[] = [
  {
    icon: ShieldCheck,
    title: "Employer-powered",
    body: "The employer remains the first decision-maker, so access is responsible and controlled.",
  },
  {
    icon: CalendarClock,
    title: "Payroll aware",
    body: "Cutoff and payday dates decide whether recovery happens this cycle or the next.",
  },
  {
    icon: Landmark,
    title: "Capital partner ready",
    body: "Disbursal and settlement flows are designed for capital partner-backed operations.",
  },
  {
    icon: ClipboardCheck,
    title: "Traceable workflow",
    body: "Every meaningful action is visible across request, approval, disbursal and recovery.",
  },
];

function StepList({ items }: { items: typeof employerSteps }) {
  return (
    <div className="inner-step-list">
      {items.map((item) => (
        <article className="inner-step-row" key={item.number}>
          <span>{item.number}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function TrustCard({ icon: Icon, title, body }: FlowItem) {
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

export function HowItWorksPage() {
  return (
    <div className="inner-page">
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="How it works"
          title={
            <>
              Simple for employees.{" "}
              <br />
              Controlled for employers.
            </>
          }
          description="MobPae keeps salary access clear from the first request to the final recovery, with employer approval and payroll logic built into the flow."
          actions={
            <>
              <Link to="/#enquiry" className="premium-button">
                Request Demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/product"
                className="premium-button premium-button--ghost"
              >
                View Product
              </Link>
            </>
          }
        >
          <div className="queue-card">
            <div className="queue-card__header">
              <span className="queue-card__live" aria-hidden="true" />
              <p className="eyebrow">Live flow</p>
            </div>
            <div className="flow-timeline">
              {flow.slice(0, 4).map((item) => (
                <div className="flow-timeline__step" key={item.title}>
                  <span className="icon-bubble flow-timeline__icon">
                    <item.icon size={17} aria-hidden="true" />
                  </span>
                  <div className="flow-timeline__content">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        <section className="inner-section inner-section--white">
          <div className="site-rail">
            <div className="inner-section__heading inner-section__heading--center">
              <p className="eyebrow">Workflow overview</p>
              <h2>One clean movement from request to recovery.</h2>
              <p>
                Each stakeholder has a clear job. Employees request, employers
                approve, MobPae verifies and disburses, and recovery follows
                payroll.
              </p>
            </div>
            <div className="process-rail">
              {flow.map((item, index) => (
                <div className="process-rail__step" key={item.title}>
                  <span className="process-rail__node">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <small>0{index + 1}</small>
                    <p className="process-rail__step-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--soft">
          <div className="site-rail inner-section__split">
            <div className="inner-copy">
              <p className="eyebrow">For employers</p>
              <h2>Policy control before funds move.</h2>
              <p>
                Employers decide who is eligible and approve each request with
                the right salary and payroll context. MobPae handles the
                operational trail around it.
              </p>
              <ul className="inner-list">
                <li>
                  <span>✓</span>Payroll cutoff and salary date are respected
                </li>
                <li>
                  <span>✓</span>Request history stays visible before approval
                </li>
                <li>
                  <span>✓</span>Recovery and settlement status stay traceable
                </li>
              </ul>
            </div>
            <StepList items={employerSteps} />
          </div>
        </section>

        <section className="inner-section inner-section--navy">
          <div className="site-rail inner-section__split">
            <div className="inner-copy">
              <p className="eyebrow">For employees</p>
              <h2>A calm way to access earned salary.</h2>
              <p>
                Employees see their eligible amount, repayment date and platform
                fee before making a request. The flow stays transparent at every
                stage.
              </p>
              <ul className="inner-list">
                <li>
                  <span>✓</span>Clear amount and repayment visibility
                </li>
                <li>
                  <span>✓</span>No uncertainty after employer approval
                </li>
                <li>
                  <span>✓</span>Status updates from request to recovery
                </li>
              </ul>
            </div>
            <StepList items={employeeSteps} />
          </div>
        </section>

        <section className="inner-section inner-section--white">
          <div className="site-rail">
            <div className="inner-section__heading">
              <p className="eyebrow">Responsible by design</p>
              <h2>Built for trust, not impulse borrowing.</h2>
              <p>
                MobPae is intentionally employer-powered and payroll-linked.
                That keeps access useful for employees and controlled for
                companies.
              </p>
            </div>
            <div className="inner-card-grid inner-card-grid--four">
              {trustItems.map((item) => (
                <TrustCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--white">
          <div className="site-rail">
            <div className="inner-cta-card">
              <div>
                <p className="eyebrow">Ready for a walkthrough?</p>
                <h2>See the full approval and recovery flow.</h2>
                <p>
                  We will show how MobPae fits your payroll date, cutoff date,
                  employee eligibility and settlement process.
                </p>
              </div>
              <Link
                to="/#enquiry"
                className="premium-button premium-button--light"
              >
                Request Demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
