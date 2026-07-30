import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HeroPanel, PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

type Surface = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const surfaces: Surface[] = [
  {
    icon: Smartphone,
    title: "Employee App",
    body: "Employees complete setup, request access, track approvals and see repayment details in one place.",
  },
  {
    icon: Building2,
    title: "Employer Portal",
    body: "Employers approve requests with salary context, payroll dates, request history and policy controls.",
  },
  {
    icon: ShieldCheck,
    title: "Admin Console",
    body: "MobPae manages verification, platform fee review, disbursal, recovery and settlement operations.",
  },
  {
    icon: Landmark,
    title: "Capital Partner Layer",
    body: "Capital partner-ready rails support structured disbursals, portfolio visibility and payroll-linked repayment.",
  },
];

const productFlow = [
  {
    icon: Smartphone,
    title: "Setup",
    body: "Employee completes KYC and bank verification.",
  },
  {
    icon: Wallet,
    title: "Request",
    body: "Eligible amount, due date and payable amount are shown upfront.",
  },
  {
    icon: Building2,
    title: "Approve",
    body: "Employer reviews salary context before the request moves forward.",
  },
  {
    icon: BadgeCheck,
    title: "Verify",
    body: "Admin checks platform fee readiness and final request status.",
  },
  {
    icon: Banknote,
    title: "Disburse",
    body: "Funds move to the verified bank account and recovery is scheduled.",
  },
];

const employeeFeatures: Surface[] = [
  {
    icon: Wallet,
    title: "Clear eligibility",
    body: "Employees see what they can access, what is already used and what remains available.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent request terms",
    body: "Amount, date, fee and repayment information are visible before submission.",
  },
  {
    icon: RefreshCw,
    title: "Automatic recovery",
    body: "Repayment happens through salary, so employees do not need manual payment follow-ups.",
  },
];

const employerFeatures: Surface[] = [
  {
    icon: Users,
    title: "Team visibility",
    body: "Employers can review salary requests with employee details and request history.",
  },
  {
    icon: FileCheck2,
    title: "Policy controls",
    body: "Eligibility, access percentage and request limits stay aligned with company rules.",
  },
  {
    icon: Landmark,
    title: "Settlement clarity",
    body: "Payroll recoveries and settlement records stay connected for operational tracking.",
  },
];

const adminFeatures: Surface[] = [
  {
    icon: ShieldCheck,
    title: "Verification workflow",
    body: "KYC, bank account, platform fee and disbursal checks sit in one operational layer.",
  },
  {
    icon: BadgeCheck,
    title: "Audit trail",
    body: "Every status movement can be reviewed without relying on manual spreadsheets.",
  },
  {
    icon: Banknote,
    title: "Revenue visibility",
    body: "Platform fee and financial reporting are designed for clean business tracking.",
  },
];

function ProductSurfaceSection({
  eyebrow,
  title,
  body,
  items,
  tone = "white",
  panelTone = "navy",
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: Surface[];
  tone?: "white" | "soft";
  panelTone?: "sky" | "navy" | "white";
}) {
  return (
    <section
      className={`inner-section product-surface-section product-surface-section--${tone}`}
    >
      <div className="site-rail product-surface-layout">
        <div className="inner-copy product-surface-copy">
          <p className="eyebrow">{eyebrow}</p>
          <span className="product-surface-kicker">MobPae surface</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div
          className={`product-surface-panel product-surface-panel--${panelTone}`}
          aria-label={`${eyebrow} capabilities`}
        >
          {items.map((item, index) => (
            <article className="product-surface-row" key={item.title}>
              <span className="product-surface-row__icon">
                <item.icon size={21} aria-hidden="true" />
              </span>
              <div>
                <small>0{index + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductFlowSummary() {
  return (
    <section className="inner-section inner-section--navy product-flow-section">
      <div className="site-rail">
        <div className="inner-section__heading inner-section__heading--center">
          <p className="eyebrow">Core flow</p>
          <h2>Designed around approval, not impulse access.</h2>
          <p>
            MobPae gives employees speed, but the system still respects employer
            approval, verification, payroll cutoff and repayment discipline.
          </p>
        </div>
        <div className="inner-flow-strip">
          {productFlow.map((item, index) => (
            <article className="inner-flow-node" key={item.title}>
              <item.icon size={23} aria-hidden="true" />
              <small>0{index + 1}</small>
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductEcosystemSection() {
  return (
    <section className="inner-section inner-section--white">
      <div className="site-rail">
        <div className="inner-section__heading">
          <p className="eyebrow">Product ecosystem</p>
          <h2>Four surfaces working as one operating system.</h2>
          <p>
            The product is intentionally connected. Every dashboard exists to
            support a single responsible flow from request to recovery.
          </p>
        </div>
        <div className="system-quadrant">
          {surfaces.map((surface) => (
            <div className="system-quadrant__cell" key={surface.title}>
              <span className="icon-bubble">
                <surface.icon size={21} aria-hidden="true" />
              </span>
              <h3>{surface.title}</h3>
              <p>{surface.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPage() {
  return (
    <div className="inner-page">
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Product"
          title={
            <>
              One platform.{" "}
              <br />
              Every stakeholder aligned.
            </>
          }
          description="MobPae connects the employee app, employer approval flow, admin operations and capital partner readiness into one payroll-linked financial wellness ecosystem."
          actions={
            <>
              <Link to="/#enquiry" className="premium-button">
                Request Demo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/how-it-works"
                className="premium-button premium-button--ghost"
              >
                How It Works
              </Link>
            </>
          }
        >
          <HeroPanel>
            <p className="eyebrow">Connected workflow</p>
            <div className="inner-preview-list">
              {[
                "Employee setup",
                "Employer approval",
                "Admin disbursal",
                "Payroll recovery",
              ].map((item, index) => (
                <div className="inner-preview-row" key={item}>
                  <div>
                    <p>{item}</p>
                    <span>
                      {index === 0
                        ? "Identity and bank readiness"
                        : index === 1
                        ? "Salary context before approval"
                        : index === 2
                        ? "Final verification before payout"
                        : "Cycle-based recovery"}
                    </span>
                  </div>
                  <b>0{index + 1}</b>
                </div>
              ))}
            </div>
          </HeroPanel>
        </PageHero>

        <ProductEcosystemSection />
        <ProductFlowSummary />
        <ProductSurfaceSection
          eyebrow="Employee app"
          title="A calm employee experience."
          body="The employee app keeps everything understandable: setup, eligibility, request status, repayment and activity history."
          items={employeeFeatures}
          tone="soft"
          panelTone="sky"
        />
        <ProductSurfaceSection
          eyebrow="Employer portal"
          title="Employer control without payroll disruption."
          body="Employers stay in the approval loop and keep visibility across requests, recoveries and settlement-ready records."
          items={employerFeatures}
          tone="white"
          panelTone="navy"
        />
        <ProductSurfaceSection
          eyebrow="Admin console"
          title="Admin operations built for financial discipline."
          body="MobPae's admin layer keeps verification, disbursal, revenue and audit workflows ready for pilot operations."
          items={adminFeatures}
          tone="soft"
          panelTone="white"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
