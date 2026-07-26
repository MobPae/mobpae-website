import React from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { HeroPanel, PageHero } from "../components/PageHero";

const B    = "var(--mp-blue)";
const BH   = "var(--mp-blue-700)";
const T1   = "var(--mp-ink)";
const T2   = "var(--mp-muted)";
const BG   = "var(--mp-page)";
const BD   = "var(--mp-border)";
const PAGE_MAX = 1840;

const W = (maxWidth: number | string): React.CSSProperties => ({
  maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
  width: "100%",
});

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "clamp(26px,2.8vw,38px)",
  fontWeight: 400,
  letterSpacing: "-0.03em",
  lineHeight: 1.12,
  margin: 0,
  fontFamily: "Inter, ui-sans-serif, sans-serif",
};

function Check() {
  return (
    <div style={{ width: 24, height: 24, borderRadius: 6, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke={B} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function EmployersPage() {
  const queue = [
    { name: "Priya Sharma",  amount: "₹6,000", status: "Auto-approved", blue: true  },
    { name: "Rahul Mehta",   amount: "₹3,500", status: "Auto-approved", blue: true  },
    { name: "Anjali Patel",  amount: "₹9,200", status: "Pending review", blue: false },
  ];

  return (
    <div style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: T1, background: "#fff" }}>
      <SiteNav />
      <main id="main-content">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="For employers"
        title={
          <>
            A financial benefit{" "}
            <br />
            your team will use.
          </>
        }
        description="Give employees on-demand salary access with employer-controlled approval, payroll-linked recovery, and clear visibility across the cycle."
        actions={
          <>
            <Link
              to="/#enquiry"
              style={{ height: 48, padding: "0 24px", background: B, color: "#fff", fontSize: 14, fontWeight: 400, borderRadius: 10, display: "inline-flex", alignItems: "center", textDecoration: "none" }}
            >
              Request a demo
            </Link>
            <a
              href="mailto:support@mobpae.com"
              style={{ height: 48, padding: "0 24px", background: "#fff", color: T1, fontSize: 14, fontWeight: 400, borderRadius: 10, display: "inline-flex", alignItems: "center", textDecoration: "none", border: `1px solid ${BD}` }}
            >
              Talk to us
            </a>
          </>
        }
      >
        <HeroPanel>
          <p style={{ fontSize: 12, color: B, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 18px" }}>Approval queue</p>
          {queue.map(r => (
            <div key={r.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "14px 0", borderTop: `1px solid ${BD}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 400, color: B }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 400, color: T1, margin: 0 }}>{r.name}</p>
                  <p style={{ fontSize: 12.5, color: T2, margin: "3px 0 0" }}>{r.amount}</p>
                </div>
              </div>
              <span style={{ fontSize: 11.5, fontWeight: 400, color: B, background: "#EEF2FF", borderRadius: 999, padding: "6px 10px", whiteSpace: "nowrap" }}>{r.status}</span>
            </div>
          ))}
        </HeroPanel>
      </PageHero>

      {/* ── Benefits ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>
              Why employers choose MobPae
            </p>
            <h2 style={sectionTitleStyle}>
              No risk. No overhead. Real impact.
            </h2>
          </div>

          <div className="redesign-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "No employer cash required",     desc: "Salary access is funded through structured capital partnerships. Your payroll and cash flow are never touched.", accent: B,    accentBg: "#EEF2FF" },
              { title: "Policy-driven auto-approvals",  desc: "Set rules once — eligibility limits, frequency caps, department rules. Approvals run themselves.",              accent: B, accentBg: "#EEF2FF" },
              { title: "Zero payroll disruption",       desc: "MobPae integrates with your HR system. Recovery happens at payroll — no manual reconciliation.",                accent: B, accentBg: "#EEF2FF" },
              { title: "Full audit trail",              desc: "Every request, approval, disbursal, and recovery is logged. Exportable at any time.",                           accent: B,    accentBg: "#EEF2FF" },
              { title: "Proven retention benefit",      desc: "Financial stress is a top driver of attrition. Giving employees access to earned wages reduces both.",          accent: B, accentBg: "#EEF2FF" },
              { title: "Setup in days, not months",     desc: "One integration. Onboarding support included. Your team is live before the next pay cycle.",                    accent: B, accentBg: "#EEF2FF" },
            ].map(b => (
              <div
                key={b.title}
                style={{ padding: "24px", background: b.accentBg, borderRadius: 16, transition: "box-shadow 180ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(20,30,60,0.07)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                <p style={{ fontSize: 15, fontWeight: 400, color: T1, margin: "0 0 8px" }}>{b.title}</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: T2, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>
              How it works
            </p>
            <h2 style={sectionTitleStyle}>
              Live in four steps.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { n: "01", title: "Sign up & integrate",      desc: "Connect your HR or payroll system via our API or flat-file upload. Takes less than a day." },
              { n: "02", title: "Set your policy",          desc: "Define eligibility rules, access limits, and approval workflows. You stay in control." },
              { n: "03", title: "Employees access wages",   desc: "Employees request earned advances through the MobPae app — approved instantly against your policy." },
              { n: "04", title: "Auto-recovery at payroll", desc: "Accessed amounts are deducted at the next pay cycle. No manual work on your end." },
            ].map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: "flex", gap: 24, alignItems: "flex-start",
                  padding: "24px",
                  background: "#fff",
                  borderRadius: i === 0 ? "16px 16px 0 0" : i === 3 ? "0 0 16px 16px" : 0,
                  border: `1px solid ${BD}`,
                  borderBottom: i < 3 ? "none" : `1px solid ${BD}`,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 400, color: B, letterSpacing: "0.1em", minWidth: 28, paddingTop: 3 }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 400, color: T1, margin: "0 0 4px" }}>{s.title}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: T2, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ──────────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>
              Trust & security
            </p>
            <h2 style={{ fontSize: "clamp(26px,2.8vw,38px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.12, color: T1, margin: 0, fontFamily: 'Inter, ui-sans-serif, sans-serif' }}>
              Built to be trusted.
            </h2>
          </div>
          <div className="redesign-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { accent: B,    accentBg: "#EEF2FF", title: "Secured capital model",    desc: "Salary access funded through structured partnerships. Your payroll never leaves your control." },
              { accent: B, accentBg: "#EEF2FF", title: "Employer-verified access", desc: "Every employee is authenticated via their employer before access is granted." },
              { accent: B, accentBg: "#EEF2FF", title: "Encrypted end-to-end",     desc: "Data encrypted in transit and at rest. Role-based access with full audit logs." },
            ].map(i => (
              <div key={i.title} style={{ background: i.accentBg, borderRadius: 16, padding: "24px 22px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: i.accent, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 5v4c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V5L8 2z" stroke="#fff" strokeWidth="1.5" fill="none" /></svg>
                </div>
                <p style={{ fontSize: 15, fontWeight: 400, color: T1, margin: "0 0 8px" }}>{i.title}</p>
                <p style={{ fontSize: 13.5, color: T2, lineHeight: 1.65, margin: 0 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,80px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 28,
            padding: "clamp(28px,4vw,48px)",
            background: BG, borderRadius: 20, border: `1px solid ${BD}`,
          }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 400, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
                Get started
              </p>
              <h2 style={{ ...sectionTitleStyle, fontSize: "clamp(24px,2.6vw,36px)", margin: "0 0 16px" }}>
                Ready to offer salary access to your team?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {[
                  "No cash commitment from your company",
                  "Setup and onboarding support included",
                  "Live before your next pay cycle",
                ].map(p => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Check />
                    <p style={{ fontSize: 13.5, color: T2, margin: 0 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              <Link
                to="/#enquiry"
                style={{ height: 46, padding: "0 24px", background: B, color: "#fff", fontSize: 14, fontWeight: 400, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "background 150ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BH)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = B)}
              >
                Request a demo
              </Link>
              <a
                href="mailto:support@mobpae.com"
                style={{ height: 46, padding: "0 24px", background: "#fff", color: T1, fontSize: 14, fontWeight: 400, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", border: `1px solid ${BD}`, transition: "border-color 150ms ease, color 150ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = B; (e.currentTarget as HTMLElement).style.color = B; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BD; (e.currentTarget as HTMLElement).style.color = T1; }}
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  );
}
