import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

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

const T1 = "#0B0D12";
const T2 = "#5B6270";
const BLUE = "#315EFF";
const BG = "#F6F7F9";
const BD = "#E6E8EE";

export function HowItWorksPage() {
  return (
    <div style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: T1, background: "#fff", minHeight: "100vh" }}>
      <SiteNav />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#f0f4ff 0%,#fff 55%)", borderBottom: `1px solid ${BD}`, padding: "72px clamp(20px,6vw,80px) 64px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "#EEF2FF", color: BLUE, fontSize: 12, fontWeight: 600, letterSpacing: ".08em", padding: "4px 12px", borderRadius: 100, marginBottom: 20, textTransform: "uppercase" }}>
            How It Works
          </span>
          <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-.02em", margin: "0 0 20px" }}>
            Salary advances that work for<br />everyone
          </h1>
          <p style={{ fontSize: 17, color: T2, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}>
            MobPae connects employers and employees on a single platform — making earned salary access transparent, instant, and stress-free.
          </p>
          <a
            href="/#enquiry"
            style={{ display: "inline-flex", alignItems: "center", height: 44, padding: "0 24px", background: BLUE, color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
          >
            Request a demo
          </a>
        </div>
      </section>

      {/* Flow diagram */}
      <section style={{ padding: "64px clamp(20px,6vw,80px)", borderBottom: `1px solid ${BD}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 13, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: T2, marginBottom: 32 }}>
            The full picture
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 0 }}>
            {[
              { label: "Employer sets policy", icon: "🏢" },
              { label: "Employee requests", icon: "📱" },
              { label: "MobPae reviews", icon: "✅" },
              { label: "Funds disbursed", icon: "💸" },
              { label: "Payroll recovery", icon: "🔄" },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "20px 16px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 500, color: T2, textAlign: "center", maxWidth: 80, lineHeight: 1.4 }}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: 32, height: 2, background: BD, flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section style={{ padding: "72px clamp(20px,6vw,80px)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ display: "inline-block", background: "#EEF2FF", color: BLUE, fontSize: 12, fontWeight: 600, letterSpacing: ".08em", padding: "4px 12px", borderRadius: 100, marginBottom: 14, textTransform: "uppercase" }}>
              For Employers
            </span>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 12px" }}>
              Set up in under a day
            </h2>
            <p style={{ fontSize: 16, color: T2, lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
              No complex integrations required. MobPae connects with your existing payroll and HR data.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {STEPS_EMPLOYER.map((s) => (
              <div key={s.num} style={{ background: BG, borderRadius: 16, padding: "28px 24px", border: `1px solid ${BD}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: BLUE, letterSpacing: ".06em", marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px", lineHeight: 1.35 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T2, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/employers" style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Learn more about the employer dashboard →
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${BD}` }} />

      {/* For Employees */}
      <section style={{ padding: "72px clamp(20px,6vw,80px)", background: BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ display: "inline-block", background: "#fff", color: BLUE, fontSize: 12, fontWeight: 600, letterSpacing: ".08em", padding: "4px 12px", borderRadius: 100, border: `1px solid #C7D4FF`, marginBottom: 14, textTransform: "uppercase" }}>
              For Employees
            </span>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 12px" }}>
              Your earned salary, on demand
            </h2>
            <p style={{ fontSize: 16, color: T2, lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
              No credit check. No paperwork. Just access to money you've already earned.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {STEPS_EMPLOYEE.map((s) => (
              <div key={s.num} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: `1px solid ${BD}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: BLUE, letterSpacing: ".06em", marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px", lineHeight: 1.35 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T2, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/employees" style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Learn more about the employee experience →
            </a>
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section style={{ padding: "64px clamp(20px,6vw,80px)", background: "#fff", borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 12px" }}>
              Built on trust and compliance
            </h2>
            <p style={{ fontSize: 15, color: T2, lineHeight: 1.7, margin: 0 }}>
              MobPae operates with NBFC partnership readiness, RBI-aligned data handling, and end-to-end encryption on all financial data.
            </p>
          </div>
          {[
            { icon: "🔒", label: "End-to-end encryption" },
            { icon: "🏦", label: "NBFC partnership ready" },
            { icon: "📋", label: "RBI-aligned compliance" },
            { icon: "🛡️", label: "Employer data privacy" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: T1 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px clamp(20px,6vw,80px)", background: BG }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", textAlign: "center", marginBottom: 48 }}>
            Common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 14, padding: "22px 24px", border: `1px solid ${BD}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 8px" }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: T2, lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="/faqs" style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              See all FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px clamp(20px,6vw,80px)", background: BLUE, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, color: "#fff", letterSpacing: "-.02em", margin: "0 0 16px" }}>
          Ready to get started?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
          Join employers who offer their teams responsible, transparent salary access.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/#enquiry" style={{ height: 46, padding: "0 28px", background: "#fff", color: BLUE, fontSize: 14, fontWeight: 600, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            Request a demo
          </a>
          <a href="/faqs" style={{ height: 46, padding: "0 28px", background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
            Read FAQs
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
