import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

// ── design tokens ─────────────────────────────────────────────────────────────
const B  = "#315EFF";
const BH = "#2A51E0";
const T1 = "#0B0D12";
const T2 = "#5B6270";
const T3 = "#8A90A0";
const BG = "#F6F7F9";
const BD = "#E6E8EE";
const BT = "rgba(49,94,255,0.08)";

const W = (maxWidth: number | string, extraStyle?: React.CSSProperties): React.CSSProperties => ({
  maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth,
  margin: "0 auto",
  padding: `0 clamp(20px,5vw,32px)`,
  width: "100%",
  ...extraStyle,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", background: BT, color: B, fontSize: 11.5, fontWeight: 700, borderRadius: 999, letterSpacing: "0.05em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export function ProductPage() {
  return (
    <div style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: T1, background: "#fff" }}>
      <SiteNav />
      <ProductHero />
      <ForEmployeesSection />
      <ForEmployersSection />
      <ForNbfcSection />
      <DisbursementSection />
      <ComplianceSection />
      <ProductFinalCta />
      <SiteFooter />
    </div>
  );
}

// ── 1. Hero ───────────────────────────────────────────────────────────────────
function ProductHero() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px,8vw,112px) 0", textAlign: "center" }}>
      <div style={W(900)}>
        <Pill>Product</Pill>
        <h1 style={{ fontSize: "clamp(40px,5.5vw,68px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 24px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
          One ecosystem.<br />Three stakeholders. One outcome.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: T2, maxWidth: 680, margin: "0 auto" }}>
          MobPae connects employees and employers in a single controlled workflow — from request to disbursal to settlement, with full visibility at every step.
        </p>
      </div>
    </section>
  );
}

// ── 2. For Employees ──────────────────────────────────────────────────────────
function ForEmployeesSection() {
  const points = [
    "See exactly how much you're eligible to access before requesting.",
    "Requests are approved by your employer — not a faceless algorithm.",
    "Repayment happens automatically from your next salary. No manual payments.",
  ];
  return (
    <section id="employees" style={{ background: BG, padding: "clamp(48px,7vw,96px) 0" }}>
      <div style={W(1200)}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Pill>For employees</Pill>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "16px 0 16px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
              Access wages you've already earned
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: T2, marginBottom: 24 }}>
              When you need money before payday, MobPae gives you access to what you've already earned — no loans, no interest if within your limit, no debt trap.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {points.map(p => (
                <li key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: BT, color: B, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14.5, color: T2, lineHeight: 1.6 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Pay cycle summary card */}
          <div>
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BD}`, padding: 28, boxShadow: "0 24px 60px -20px rgba(20,30,60,0.14)", maxWidth: 360 }}>
              <p style={{ fontSize: 12, color: T3, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20 }}>This pay cycle</p>
              {[
                { label: "Earned so far",        value: "₹14,200" },
                { label: "Available to access",  value: "₹8,400",  highlight: true },
                { label: "Payday",               value: "July 31" },
              ].map(row => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: `1px solid ${BD}` }}>
                  <span style={{ fontSize: 14, color: T2 }}>{row.label}</span>
                  <span style={{ fontSize: 15, fontWeight: row.highlight ? 700 : 500, color: row.highlight ? B : T1 }}>{row.value}</span>
                </div>
              ))}
              <a href="/#enquiry" style={{ display: "block", marginTop: 20, height: 44, background: B, color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, textAlign: "center", lineHeight: "44px", textDecoration: "none" }}>
                Withdraw now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 3. For Employers ──────────────────────────────────────────────────────────
function ForEmployersSection() {
  const points = [
    "Single integration — connect payroll data once and go live in days.",
    "Full approval control — every request is reviewed against your policy before funds move.",
    "Usage caps protect employees from over-borrowing and protect you from liability.",
  ];
  const queue = [
    { name: "Priya Sharma", amount: "₹6,000", status: "Auto-approved" },
    { name: "Rahul Mehta",  amount: "₹3,500", status: "Auto-approved" },
    { name: "Anjali Patel", amount: "₹9,200", status: "Pending review" },
  ];
  return (
    <section id="employers" style={{ background: "#fff", padding: "clamp(48px,7vw,96px) 0" }}>
      <div style={W(1200)}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Mockup first */}
          <div>
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BD}`, padding: 24, boxShadow: "0 24px 60px -20px rgba(20,30,60,0.14)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: T1, margin: "0 0 16px" }}>Approval queue</p>
              {queue.map(r => (
                <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: `1px solid ${BD}` }}>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 600, color: T1, margin: 0 }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: T2, margin: "2px 0 0" }}>{r.amount}</p>
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: r.status === "Auto-approved" ? B : T3, background: r.status === "Auto-approved" ? BT : BG, borderRadius: 999, padding: "4px 12px" }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Pill>For employers</Pill>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "16px 0 16px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
              Retention benefit, zero cash burden
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: T2, marginBottom: 24 }}>
              MobPae lets you offer meaningful financial wellness as a workplace benefit — without changing payroll operations or taking on any liquidity risk.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {points.map(p => (
                <li key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: BT, color: B, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14.5, color: T2, lineHeight: 1.6 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 4. For Capital Partners ───────────────────────────────────────────────────
function ForNbfcSection() {
  const points = [
    "Short-tenure exposure: average duration under 30 days, reducing portfolio risk.",
    "Employer-verified employees — salary confirmation before disbursal, not after.",
    "Payroll-linked repayment: recoveries happen automatically, not through collections.",
  ];
  const portfolioRows = [
    { label: "Avg. exposure duration", value: "< 30 days" },
    { label: "Verification source",    value: "Employer payroll" },
    { label: "Repayment method",       value: "Payroll deduction" },
  ];
  return (
    <section id="nbfc" style={{ background: BG, padding: "clamp(48px,7vw,96px) 0" }}>
      <div style={W(1200)}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Pill>For capital partners</Pill>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "16px 0 16px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
              Low-risk, short-tenure portfolio
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: T2, marginBottom: 24 }}>
              Capital partners fund disbursals into a verified, employer-backed pool. The risk profile is fundamentally different from unsecured consumer lending.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {points.map(p => (
                <li key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: BT, color: B, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14.5, color: T2, lineHeight: 1.6 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Portfolio snapshot card */}
          <div>
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BD}`, padding: 28, boxShadow: "0 24px 60px -20px rgba(20,30,60,0.14)", maxWidth: 360 }}>
              <p style={{ fontSize: 12, color: T3, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20 }}>Portfolio snapshot</p>
              {portfolioRows.map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: `1px solid ${BD}` }}>
                  <span style={{ fontSize: 14, color: T2 }}>{r.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: T1 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. Disbursement ───────────────────────────────────────────────────────────
function DisbursementSection() {
  const steps = [
    { n: "01", label: "Request",  desc: "Employee submits a request with amount and purpose." },
    { n: "02", label: "Verify",   desc: "Employer confirms salary and eligibility in real time." },
    { n: "03", label: "Approve",  desc: "Employer or auto-policy approves based on configured rules." },
    { n: "04", label: "Disburse", desc: "Capital partner funds the approved amount to the employee." },
    { n: "05", label: "Settle",   desc: "Employer settles with the capital partner post-payroll deduction." },
  ];
  return (
    <section id="disbursement" style={{ background: "#fff", padding: "clamp(48px,7vw,96px) 0" }}>
      <div style={W(1200)}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "0 0 14px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
            How disbursement works
          </h2>
          <p style={{ fontSize: 15.5, color: T2, margin: 0 }}>Five transparent steps — from employee request to full settlement.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
          {steps.map(s => (
            <div key={s.n} style={{ borderRadius: 16, border: `1px solid ${BD}`, padding: "20px 18px", textAlign: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${B}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: B }}>{s.n}</span>
              </div>
              <p style={{ fontSize: 14.5, fontWeight: 700, color: T1, margin: "0 0 6px" }}>{s.label}</p>
              <p style={{ fontSize: 12.5, color: T2, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. Compliance ─────────────────────────────────────────────────────────────
function ComplianceSection() {
  const cards = [
    { title: "Structured capital only", body: "All disbursals are funded through vetted capital partners. No unregistered lending." },
    { title: "Capped earned-only access", body: "Employees can only access a configured percentage of wages already earned. Over-access is technically impossible." },
    { title: "Data protected end-to-end", body: "Salary and personal data is encrypted in transit and at rest. Role-based access with complete audit trails and no third-party data sharing." },
  ];
  return (
    <section id="compliance" style={{ background: BG, padding: "clamp(48px,7vw,96px) 0" }}>
      <div style={W(900)}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "0 0 14px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
            Built on responsible lending principles
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {cards.map(c => (
            <div key={c.title} style={{ background: "#fff", borderRadius: 16, border: `1px solid ${BD}`, padding: "24px 20px" }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: T1, margin: "0 0 10px" }}>{c.title}</p>
              <p style={{ fontSize: 13.5, color: T2, lineHeight: 1.65, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function ProductFinalCta() {
  return (
    <section style={{ background: "linear-gradient(180deg, #F2F5FF 0%, #FFFFFF 100%)", padding: "clamp(64px,8vw,112px) 0", textAlign: "center" }}>
      <div style={W(720)}>
        <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.015em", margin: "0 0 16px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
          Ready to get started?
        </h2>
        <p style={{ fontSize: 16.5, color: T2, marginBottom: 36 }}>
          Talk to our team to see how MobPae fits your payroll cycle and employee count.
        </p>
        <a
          href="/#enquiry"
          style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 32px", background: B, color: "#fff", fontWeight: 700, fontSize: 15.5, borderRadius: 8, textDecoration: "none", transition: "background 120ms ease, transform 120ms ease" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = BH; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = B; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          Request a demo
        </a>
      </div>
    </section>
  );
}
