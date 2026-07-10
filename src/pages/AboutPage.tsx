import React from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

// ── Design tokens ─────────────────────────────────────────────────────────────
const B    = "#315EFF";
const BH   = "#2A51E0";
const T1   = "#0B0D12";
const T2   = "#5B6270";
const BG   = "#F6F7F9";
const BD   = "#E6E8EE";
const TEAL = "#0D9488";
const PURP = "#7C3AED";
const GREE = "#059669";

const W = (maxWidth: number | string): React.CSSProperties => ({
  maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth,
  margin: "0 auto",
  padding: "0 clamp(20px,5vw,32px)",
  width: "100%",
});

// ── Hero image path — replace file at public/about/ to update ───────────────
const HERO_IMAGE = "/about/hero.svg";   // swap for a photo when ready

// ── Page ──────────────────────────────────────────────────────────────────────
export function AboutPage() {
  return (
    <div style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", color: T1, background: "#fff" }}>
      <SiteNav />

      {/* ── Hero with image + gradient overlay ────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "clamp(380px,55vw,580px)", overflow: "hidden" }}>
        {/* Background image — swap public/about/hero.jpg to change */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `#0B1428 url(${HERO_IMAGE}) center/cover no-repeat`,
        }} />

        {/* Gradient: transparent at top → near-white at bottom */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(11,13,18,0.22) 0%, rgba(11,13,18,0.55) 45%, rgba(11,13,18,0.88) 78%, #fff 100%)",
        }} />

        {/* Nav sits above — no extra padding needed */}

        {/* Headline anchored to bottom of hero */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <div style={W(1200)}>
            <div style={{ paddingBottom: "clamp(36px,5vw,56px)" }}>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 14px" }}>
                About MobPae
              </p>
              <h1 style={{
                fontSize: "clamp(36px,5.5vw,64px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#fff",
                margin: "0 0 16px",
                fontFamily: '"TASA Orbiter Display Medium", sans-serif',
                maxWidth: 700,
              }}>
                Your Trusted Financial Partner.
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 540, margin: 0 }}>
                Bridging the gap between payday and the moments that can't wait — without creating debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we are ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,88px)", alignItems: "start" }}>
            {/* Left: main copy */}
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>
                Who we are
              </p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 24px", fontFamily: '"TASA Orbiter Display Medium", sans-serif', lineHeight: 1.1 }}>
                A fintech platform built around payroll, not credit.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 15.5, lineHeight: 1.78, color: T2, margin: 0 }}>
                  MobPae is a fintech platform that enables salaried employees to access their earned wages before payday through employer-backed approvals. Our payroll-linked financial wellness ecosystem bridges the gap between payday and unexpected financial needs — without encouraging debt dependency.
                </p>
                <p style={{ fontSize: 15.5, lineHeight: 1.78, color: T2, margin: 0 }}>
                  The platform creates a genuine win-win: employees receive timely liquidity for real needs, employers improve retention and productivity through a meaningful financial wellness benefit, and capital partners benefit from better portfolio quality through employer-assisted verification and automatic salary deductions.
                </p>
                <p style={{ fontSize: 15.5, lineHeight: 1.78, color: T2, margin: 0 }}>
                  We believe the biggest risk in financial products is not under-regulation — it's misaligned incentives. At MobPae, the employer, the employee, and the platform all have a shared interest in keeping access responsible, structured, and sustainable.
                </p>
              </div>
            </div>

            {/* Right: vision card + problem card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Vision */}
              <div style={{ padding: "clamp(24px,3vw,36px)", background: "#EEF2FF", borderRadius: 16, border: "1px solid #C7D5FF" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Our vision</p>
                <p style={{ fontSize: 17, fontWeight: 600, color: T1, letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 12px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
                  Build India's most trusted employer-powered financial wellness ecosystem.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4B5CAD", margin: 0 }}>
                  Enabling responsible financial access while fostering sustainable and inclusive growth for the Indian workforce.
                </p>
              </div>

              {/* The problem we solve */}
              <div style={{ padding: "clamp(24px,3vw,36px)", background: BG, borderRadius: 16, border: `1px solid ${BD}` }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: T2, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>The problem</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: T1, letterSpacing: "-0.01em", lineHeight: 1.35, margin: "0 0 12px", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
                  68% of Indian salaried workers face a financial crunch before payday.
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: T2, margin: 0 }}>
                  Most turn to informal lending, family borrowing, or high-interest credit — all of which add financial stress rather than relieve it. MobPae provides a structured, employer-backed alternative that keeps employees in control of their own earned income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>
              How it works for everyone
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0, fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
              A model built for every stakeholder.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: BD, border: `1px solid ${BD}`, borderRadius: 16, overflow: "hidden" }}>
            {[
              {
                color: B,
                bg: "#EEF2FF",
                label: "For Employees",
                icon: "👤",
                headline: "Liquidity without debt.",
                body: "Access up to a portion of wages already earned — not a loan, not interest-bearing credit. Employees get the cash they need without the repayment anxiety that comes with borrowing.",
                points: ["No debt trap", "Instant on approval", "Payroll-linked repayment"],
              },
              {
                color: TEAL,
                bg: "#F0FDFA",
                label: "For Employers",
                icon: "🏢",
                headline: "A real wellness benefit.",
                body: "Offer a meaningful financial benefit without becoming a lender. MobPae handles the entire workflow — approvals, disbursals, recovery — so HR teams stay focused on people, not paperwork.",
                points: ["Zero capital required", "Policy-controlled access", "Better retention & trust"],
              },
              {
                color: PURP,
                bg: "#F5F3FF",
                label: "For Capital Partners",
                icon: "📊",
                headline: "Structured, low-risk exposure.",
                body: "Employer-verified employees. Payroll-linked recovery. Short tenures under 30 days. The risk profile of MobPae-backed salary access is fundamentally different from unsecured consumer lending.",
                points: ["Employer-verified pool", "Auto payroll recovery", "Short tenure exposure"],
              },
            ].map(s => (
              <div
                key={s.label}
                style={{ background: "#fff", padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", gap: 16, transition: "background 180ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = s.bg)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#fff")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.2, fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
                  {s.headline}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.72, color: T2, margin: 0 }}>{s.body}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                  {s.points.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: T1, fontWeight: 500 }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: s.bg, border: `1.5px solid ${s.color}33`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our approach ────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>
                Our approach
              </p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 20px", fontFamily: '"TASA Orbiter Display Medium", sans-serif', lineHeight: 1.1 }}>
                Responsible by design, not by disclaimer.
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.78, color: T2, margin: "0 0 16px" }}>
                Every guardrail at MobPae — access caps, payroll linkage, employer approval, auto-recovery — is built into the product. Not mentioned in fine print.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.78, color: T2, margin: 0 }}>
                We started with the belief that the right financial product for the Indian salaried workforce doesn't look like a loan — it looks like an extension of payroll. That philosophy shapes every feature we build.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "🔒", title: "Employer-controlled access", desc: "No employee can withdraw more than their configured earned-wage cap. Policy lives with the employer." },
                { icon: "🔄", title: "Payroll-linked recovery", desc: "Repayment happens automatically at the next salary cycle — no collections, no chasing, no defaults." },
                { icon: "📋", title: "Full audit trail", desc: "Every request, approval, disbursal and settlement is logged, timestamped and visible to the employer." },
                { icon: "💡", title: "Zero debt dependency", desc: "Employees access what they've already earned. There is no credit underwriting, no interest on earned amounts within the free threshold." },
              ].map(item => (
                <div
                  key={item.title}
                  style={{ display: "flex", gap: 16, padding: "16px 20px", border: `1px solid ${BD}`, borderRadius: 12, transition: "border-color 180ms ease, box-shadow 180ms ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C7D5FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(49,94,255,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BD; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: T1, margin: "0 0 4px" }}>{item.title}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: T2, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers / milestones ─────────────────────────────────────────────── */}
      <section style={{ background: T1, padding: "clamp(56px,8vw,80px) 0" }}>
        <div style={W(1200)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
            {[
              { n: "< 2 wks", l: "Employer go-live time"   },
              { n: "60 sec",  l: "Employee request time"   },
              { n: "₹0",      l: "Capital from employer"   },
              { n: "100%",    l: "HR-controlled approvals" },
            ].map(s => (
              <div key={s.l} style={{ padding: "clamp(24px,3vw,36px)", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 600, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.03em", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>{s.n}</p>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", margin: 0 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>
              What we stand for
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0, fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
              Our values.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { color: B,    bg: "#EEF2FF", title: "Transparency",      desc: "Every approval, amount and timeline is visible to the employer and employee. No hidden fees. No opaque processes." },
              { color: TEAL, bg: "#F0FDFA", title: "Responsibility",    desc: "We build guardrails into the product, not just into the terms. Access caps, policy controls and auto-recovery are non-negotiable." },
              { color: PURP, bg: "#F5F3FF", title: "Employer trust",    desc: "Employers take accountability for their teams. We respect that by keeping them in control of every approval decision." },
              { color: GREE, bg: "#F0FDF4", title: "Inclusive access",  desc: "A salaried worker on ₹15,000/month deserves the same financial safety net as one on ₹1,50,000. We design for both." },
            ].map(v => (
              <div
                key={v.title}
                style={{ padding: "clamp(22px,3vw,32px)", background: "#fff", border: `1px solid ${BD}`, borderRadius: 14, display: "flex", gap: 18, transition: "box-shadow 180ms ease, border-color 180ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${v.color}14`; (e.currentTarget as HTMLElement).style.borderColor = `${v.color}44`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = BD; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: v.color, opacity: 0.85 }} />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: T1, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{v.title}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: T2, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team teaser ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,80px) 0" }}>
        <div style={W(1200)}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            padding: "clamp(28px,4vw,44px)",
            background: BG,
            borderRadius: 20,
            border: `1px solid ${BD}`,
            flexWrap: "wrap",
          }}>
            {/* Founder avatars */}
            <div style={{ display: "flex", gap: -12, flexShrink: 0 }}>
              {/* Luhit — initials */}
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: B, color: "#fff", fontSize: 18, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "3px solid #fff", boxShadow: "0 4px 14px rgba(49,94,255,0.25)",
                flexShrink: 0,
              }}>LP</div>
              {/* Bharati — photo */}
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                overflow: "hidden", border: "3px solid #fff",
                boxShadow: "0 4px 14px rgba(13,148,136,0.25)",
                marginLeft: -16, flexShrink: 0,
              }}>
                <img
                  src="/team/bharati-bhattarai.png"
                  alt="Bharati Bhattarai"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>The people</p>
              <h2 style={{ fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.02em", fontFamily: '"TASA Orbiter Display Medium", sans-serif' }}>
                Two founders. Deep domain. One focus.
              </h2>
              <p style={{ fontSize: 14, color: T2, margin: 0 }}>
                Finance experience, engineering rigour, and a shared belief that India's salaried workforce deserves better financial tools.
              </p>
            </div>

            <a
              href="/team"
              style={{ height: 44, padding: "0 24px", background: B, color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", flexShrink: 0, transition: "background 150ms ease" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BH)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = B)}
            >
              Meet the team →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: T1, padding: "clamp(56px,8vw,80px) 0" }}>
        <div style={W(900)}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>
              Get started
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 16px", fontFamily: '"TASA Orbiter Display Medium", sans-serif', lineHeight: 1.1 }}>
              Ready to offer your team a smarter financial benefit?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: "0 0 32px" }}>
              We go live in under two weeks. No capital required from your side.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/#enquiry"
                style={{ height: 48, padding: "0 28px", background: B, color: "#fff", fontSize: 15, fontWeight: 600, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "background 150ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BH)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = B)}
              >
                Request a demo
              </a>
              <a
                href="/product"
                style={{ height: 48, padding: "0 28px", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 15, fontWeight: 600, borderRadius: 8, display: "inline-flex", alignItems: "center", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", transition: "background 150ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
