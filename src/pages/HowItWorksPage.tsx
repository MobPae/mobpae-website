import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { HeroPanel, PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardList,
  Landmark,
  Lock,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const STEPS_EMPLOYER = [
  {
    num: "01",
    title: "Employer onboards",
    body: "Sign up, verify your company, and connect your payroll or HR data. Takes less than a day.",
  },
  {
    num: "02",
    title: "Set your salary advance policy",
    body: "Define how much employees can access — a percentage of earned salary — and set any approval rules.",
  },
  {
    num: "03",
    title: "Invite your team",
    body: "Employees get a link to download the MobPae app. No paperwork, no bank visits.",
  },
  {
    num: "04",
    title: "Track & recover effortlessly",
    body: "Outstanding advances are recovered from the next payroll cycle. You maintain full visibility.",
  },
];

const STEPS_EMPLOYEE = [
  {
    num: "01",
    title: "Download the MobPae app",
    body: "Available on Android and iOS. Complete a quick KYC in minutes using your Aadhaar and PAN.",
  },
  {
    num: "02",
    title: "See your available limit",
    body: "Your limit is based on the salary you've already earned this month — not a credit score.",
  },
  {
    num: "03",
    title: "Request an advance",
    body: "Choose the amount, review the terms, and submit. Approvals typically happen within hours.",
  },
  {
    num: "04",
    title: "Money in your account",
    body: "Funds land directly in your linked bank account. Repaid automatically from your next salary.",
  },
];

const FAQS = [
  {
    q: "Is this a loan?",
    a: "No. A salary advance is access to wages you've already earned — not new debt. There is no interest on short-term advances.",
  },
  {
    q: "Does my employer see what I spend it on?",
    a: "No. Your employer sees only the advance amount and repayment status — not how you use the funds.",
  },
  {
    q: "What if I leave the company before repayment?",
    a: "Any outstanding advance is settled from your final settlement. Your employer's HR team is notified.",
  },
  {
    q: "Is there a fee?",
    a: "A small processing fee may apply depending on your employer's plan. This is always shown clearly before you confirm.",
  },
  {
    q: "How quickly do I receive the money?",
    a: "Typically within a few hours of approval. Bank transfer timelines may vary.",
  },
];

const FLOW = [
  { label: "Employer sets policy", icon: Building2 },
  { label: "Employee requests", icon: Smartphone },
  { label: "MobPae reviews", icon: CheckCircle2 },
  { label: "Funds disbursed", icon: Banknote },
  { label: "Payroll recovery", icon: RefreshCw },
];

const TRUST = [
  { icon: Lock, label: "End-to-end encryption" },
  { icon: Landmark, label: "NBFC partnership ready" },
  { icon: ClipboardList, label: "RBI-aligned compliance" },
  { icon: ShieldCheck, label: "Employer data privacy" },
];

const T1 = "var(--mp-ink)";
const T2 = "var(--mp-muted)";
const BLUE = "var(--mp-blue)";
const BD = "var(--mp-border)";
const PAGE_BG = "var(--mp-page)";
const PAGE_MAX = 1840;

const rail: React.CSSProperties = { maxWidth: PAGE_MAX, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)", width: "100%" };

function StepCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      className="group"
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "26px 24px",
        border: `1px solid ${BD}`,
        transition: "all 300ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 87, 255,0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 60px -24px rgba(0, 87, 255,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = BD;
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 400, color: BLUE, letterSpacing: ".08em", marginBottom: 14 }}>{num}</div>
      <h3 style={{ fontSize: 17, fontWeight: 400, margin: "0 0 10px", lineHeight: 1.35, color: T1 }}>{title}</h3>
      <p style={{ fontSize: 14, color: T2, lineHeight: 1.65, margin: 0 }}>{body}</p>
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="how-works-page" style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: T1, background: PAGE_BG, minHeight: "100vh" }}>
      <SiteNav />
      <main id="main-content">

      {/* Hero */}
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Salary advances{" "}
            <br />
            that work for everyone.
          </>
        }
        description="MobPae keeps the flow simple: employees request, employers approve, funds move after verification, and recovery stays linked to payroll."
        actions={
          <Link
            to="/#enquiry"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 48, padding: "0 24px", background: BLUE, color: "#fff", fontSize: 14, fontWeight: 400, borderRadius: 10, textDecoration: "none" }}
          >
            Request a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        }
      >
        <HeroPanel>
          <div style={{ display: "grid", gap: 14 }}>
            {["Request", "Employer approval", "Verification", "Disbursal", "Recovery"].map((step, index) => (
              <div key={step} style={{ display: "grid", gridTemplateColumns: "38px 1fr", gap: 14, alignItems: "center" }}>
                <span style={{ width: 38, height: 38, borderRadius: "50%", background: index === 1 ? BLUE : "#EEF2FF", color: index === 1 ? "#fff" : BLUE, display: "grid", placeItems: "center", fontSize: 12, fontWeight: 400 }}>
                  {index + 1}
                </span>
                <div>
                  <p style={{ margin: 0, color: T1, fontSize: 14.5, fontWeight: 400 }}>{step}</p>
                  <p style={{ margin: "3px 0 0", color: T2, fontSize: 12.5 }}>
                    {index === 0 ? "Employee starts the flow" : index === 1 ? "Employer remains in control" : index === 2 ? "MobPae validates readiness" : index === 3 ? "Funds move to bank" : "Auto-recovered on payday"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      {/* Flow diagram */}
      <section style={{ position: "relative", overflow: "hidden", padding: "64px clamp(20px,6vw,80px)", borderBottom: `1px solid ${BD}` }}>
        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 13, fontWeight: 400, letterSpacing: ".1em", textTransform: "uppercase", color: BLUE, marginBottom: 40 }}>
            The full picture
          </h2>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap", gap: 0 }}>
            {FLOW.map((step, i, arr) => (
              <div key={step.label} style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "0 18px", width: 116 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", color: BLUE, border: "1px solid rgba(0,87,255,0.15)" }}>
                    <step.icon size={24} aria-hidden="true" />
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 400, color: T1, textAlign: "center", lineHeight: 1.4 }}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: 32, height: 1, background: BD, flexShrink: 0, marginTop: 28 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section style={{ position: "relative", overflow: "hidden", padding: "72px clamp(20px,6vw,80px)" }}>
        <div style={{ position: "relative", ...rail, padding: 0 }}>
          <div style={{ marginBottom: 44 }}>
            <span style={{ display: "inline-block", background: "#EEF2FF", color: BLUE, fontSize: 12, fontWeight: 400, letterSpacing: ".08em", padding: "5px 13px", borderRadius: 100, marginBottom: 16, textTransform: "uppercase" }}>
              For Employers
            </span>
            <h2 style={{ fontSize: "clamp(24px,2.35vw,34px)", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.1, margin: "0 0 12px" }}>
              Set up in under a day
            </h2>
            <p style={{ fontSize: 16, color: T2, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
              No complex integrations required. MobPae connects with your existing payroll and HR data.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {STEPS_EMPLOYER.map((s) => (
              <StepCard key={s.num} {...s} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/employers" style={{ color: BLUE, fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              Learn more about the employer dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* For Employees */}
      <section style={{ position: "relative", overflow: "hidden", padding: "72px clamp(20px,6vw,80px)", borderTop: `1px solid ${BD}` }}>
        <div style={{ position: "relative", ...rail, padding: 0 }}>
          <div style={{ marginBottom: 44 }}>
            <span style={{ display: "inline-block", background: "#fff", color: BLUE, fontSize: 12, fontWeight: 400, letterSpacing: ".08em", padding: "5px 13px", borderRadius: 100, border: `1px solid rgba(0,87,255,0.2)`, marginBottom: 16, textTransform: "uppercase" }}>
              For Employees
            </span>
            <h2 style={{ fontSize: "clamp(24px,2.35vw,34px)", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.1, margin: "0 0 12px" }}>
              Your earned salary, on demand
            </h2>
            <p style={{ fontSize: 16, color: T2, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
              No credit check. No paperwork. Just access to money you've already earned.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {STEPS_EMPLOYEE.map((s) => (
              <StepCard key={s.num} {...s} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/employees" style={{ color: BLUE, fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              Learn more about the employee experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section style={{ padding: "64px clamp(20px,6vw,80px)", borderTop: `1px solid ${BD}` }}>
        <div style={{ ...rail, padding: 0, display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: 40, alignItems: "center" }} className="redesign-2col">
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.4vw,34px)", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.14, margin: "0 0 12px" }}>
              Built on trust and compliance
            </h2>
            <p style={{ fontSize: 15, color: T2, lineHeight: 1.7, margin: 0 }}>
              MobPae operates with NBFC partnership readiness, RBI-aligned data handling, and end-to-end encryption on all financial data.
            </p>
          </div>
          <div className="redesign-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {TRUST.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${BD}`, borderRadius: 14, padding: "14px 16px" }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: "#EEF2FF", color: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={18} aria-hidden="true" />
                </span>
                <span style={{ fontSize: 13.5, fontWeight: 400, color: T1 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px clamp(20px,6vw,80px)", borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,2.35vw,34px)", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.1, textAlign: "center", marginBottom: 44 }}>
            Common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 16, padding: "22px 24px", border: `1px solid ${BD}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 400, margin: "0 0 8px" }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: T2, lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link to="/faqs" style={{ color: BLUE, fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(46px,6vw,76px) clamp(20px,4vw,48px)" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maxWidth: PAGE_MAX,
            margin: "0 auto",
            borderRadius: 32,
            padding: "clamp(40px,6vw,64px)",
            background: BLUE,
            textAlign: "center",
            boxShadow: "0 30px 90px -58px rgba(8,11,22,0.6)",
          }}
        >
          <div style={{ position: "relative" }}>
            <h2 style={{ fontSize: "clamp(24px,2.35vw,34px)", fontWeight: 400, color: "#fff", letterSpacing: "-.02em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
              Join employers who offer their teams responsible, transparent salary access.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/#enquiry" style={{ height: 48, padding: "0 28px", background: "#fff", color: BLUE, fontSize: 14, fontWeight: 400, borderRadius: 10, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
                Request a demo
              </Link>
              <Link to="/faqs" style={{ height: 48, padding: "0 28px", background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 14, fontWeight: 400, borderRadius: 10, display: "inline-flex", alignItems: "center", textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
