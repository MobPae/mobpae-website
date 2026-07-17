import React from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const founders = [
  { photo: "/team/luhit-parajuli.png", initials: "LP", name: "Luhit Parajuli", role: "Co-Founder & Business Strategy", accent: "#315EFF" },
  { photo: "/team/jyotirmoy.png", initials: "JU", name: "Jyotirmoy Upadhaya", role: "Co-Founder & Technology Lead", accent: "#315EFF" },
  { photo: "/team/bharati-bhattarai.png", initials: "BB", name: "Bharati Bhattarai", role: "Admin & Legal Head", accent: "#0D9488" },
  { photo: null, initials: "AK", name: "Anurag Koirala", role: "Software Development", accent: "#7C3AED" },
];

// ── Design tokens ─────────────────────────────────────────────────────────────
const B = "#315EFF";
const T1 = "#0B0D12";
const T2 = "#5B6270";
const BG = "#F6F7F9";
const BD = "#E6E8EE";
const TEAL = "#0D9488";
const PURP = "#7C3AED";
const GREE = "#059669";

const W = (maxWidth: number | string): React.CSSProperties => ({
  maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth,
  margin: "0 auto",
  padding: "0 clamp(20px,5vw,32px)",
  width: "100%",
});

// ── Page ──────────────────────────────────────────────────────────────────────
export function AboutPage() {
  return (
    <div
      style={{
        fontFamily: "Manrope, ui-sans-serif, sans-serif",
        color: T1,
        background: "#fff",
      }}
    >
      <SiteNav />
      <main id="main-content">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg,#f0f4ff 0%,#fff 55%)",
          borderBottom: `1px solid ${BD}`,
          padding: "clamp(64px,9vw,100px) 0 clamp(48px,6vw,72px)",
        }}
      >
        <div style={W(1200)}>
          <p
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: B,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 14px",
            }}
          >
            About MobPae
          </p>
          <h1
            style={{
              fontSize: "clamp(36px,5.5vw,64px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: T1,
              margin: "0 0 16px",
              fontFamily: 'Manrope, ui-sans-serif, sans-serif',
              maxWidth: 700,
            }}
          >
            Your Trusted Financial Partner.
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: T2,
              maxWidth: 540,
              margin: 0,
            }}
          >
            Bridging the gap between payday and the moments that can't wait —
            without creating debt.
          </p>
        </div>
      </section>

      {/* ── Who we are ──────────────────────────────────────────────────────── */}
      <section
        style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}
      >
        <div style={W(1200)}>
          <div
            className="redesign-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px,6vw,88px)",
              alignItems: "start",
            }}
          >
            {/* Left: main copy */}
            <div>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: B,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 12px",
                }}
              >
                Who we are
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px,3.5vw,40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  margin: "0 0 24px",
                  fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  lineHeight: 1.1,
                }}
              >
                A fintech platform built around payroll, not credit.
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.78,
                    color: T2,
                    margin: 0,
                  }}
                >
                  MobPae is a fintech platform that enables salaried employees
                  to access their earned wages before payday through
                  employer-backed approvals. Our payroll-linked financial
                  wellness ecosystem bridges the gap between payday and
                  unexpected financial needs — without encouraging debt
                  dependency.
                </p>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.78,
                    color: T2,
                    margin: 0,
                  }}
                >
                  The platform creates a genuine win-win: employees receive
                  timely liquidity for real needs, employers improve retention
                  and productivity through a meaningful financial wellness
                  benefit, and capital partners benefit from better portfolio
                  quality through employer-assisted verification and automatic
                  salary deductions.
                </p>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.78,
                    color: T2,
                    margin: 0,
                  }}
                >
                  We believe the biggest risk in financial products is not
                  under-regulation — it's misaligned incentives. At MobPae, the
                  employer, the employee, and the platform all have a shared
                  interest in keeping access responsible, structured, and
                  sustainable.
                </p>
              </div>
            </div>

            {/* Right: vision card + problem card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Vision */}
              <div
                style={{
                  padding: "clamp(24px,3vw,36px)",
                  background: "#EEF2FF",
                  borderRadius: 16,
                  border: "1px solid #C7D5FF",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: B,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    margin: "0 0 10px",
                  }}
                >
                  Our vision
                </p>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: T1,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                    margin: "0 0 12px",
                    fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  }}
                >
                  Build India's most trusted employer-powered financial wellness
                  ecosystem.
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#4B5CAD",
                    margin: 0,
                  }}
                >
                  Enabling responsible financial access while fostering
                  sustainable and inclusive growth for the Indian workforce.
                </p>
              </div>

              {/* The problem we solve */}
              <div
                style={{
                  padding: "clamp(24px,3vw,36px)",
                  background: BG,
                  borderRadius: 16,
                  border: `1px solid ${BD}`,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: T2,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    margin: "0 0 10px",
                  }}
                >
                  The problem
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: T1,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.35,
                    margin: "0 0 12px",
                    fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  }}
                >
                  68% of Indian salaried workers face a financial crunch before
                  payday.
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: T2,
                    margin: 0,
                  }}
                >
                  Most turn to informal lending, family borrowing, or
                  high-interest credit — all of which add financial stress
                  rather than relieve it. MobPae provides a structured,
                  employer-backed alternative that keeps employees in control of
                  their own earned income.
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
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: B,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 10px",
              }}
            >
              How it works for everyone
            </p>
            <h2
              style={{
                fontSize: "clamp(26px,3.5vw,40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                margin: 0,
                fontFamily: 'Manrope, ui-sans-serif, sans-serif',
              }}
            >
              A model built for every stakeholder.
            </h2>
          </div>

          <div
            className="redesign-3col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: BD,
              border: `1px solid ${BD}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {[
              {
                color: B,
                bg: "#EEF2FF",
                label: "For Employees",
                icon: "👤",
                headline: "Liquidity without debt.",
                body: "Access up to a portion of wages already earned — not a loan, not interest-bearing credit. Employees get the cash they need without the repayment anxiety that comes with borrowing.",
                points: [
                  "No debt trap",
                  "Instant on approval",
                  "Payroll-linked repayment",
                ],
              },
              {
                color: TEAL,
                bg: "#F0FDFA",
                label: "For Employers",
                icon: "🏢",
                headline: "A real wellness benefit.",
                body: "Offer a meaningful financial benefit without becoming a lender. MobPae handles the entire workflow — approvals, disbursals, recovery — so HR teams stay focused on people, not paperwork.",
                points: [
                  "Zero capital required",
                  "Policy-controlled access",
                  "Better retention & trust",
                ],
              },
              {
                color: PURP,
                bg: "#F5F3FF",
                label: "For Capital Partners",
                icon: "📊",
                headline: "Structured, low-risk exposure.",
                body: "Employer-verified employees. Payroll-linked recovery. Short tenures under 30 days. The risk profile of MobPae-backed salary access is fundamentally different from unsecured consumer lending.",
                points: [
                  "Employer-verified pool",
                  "Auto payroll recovery",
                  "Short tenure exposure",
                ],
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#fff",
                  padding: "clamp(24px,3vw,36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "background 180ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = s.bg)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fff")
                }
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: s.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  }}
                >
                  {s.headline}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.72,
                    color: T2,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  {s.points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: T1,
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: s.bg,
                          border: `1.5px solid ${s.color}33`,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path
                            d="M1.5 4.5L3.5 6.5L7.5 2.5"
                            stroke={s.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
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
      <section
        style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}
      >
        <div style={W(1200)}>
          <div
            className="redesign-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px,6vw,80px)",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: B,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 12px",
                }}
              >
                Our approach
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px,3.5vw,40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  margin: "0 0 20px",
                  fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  lineHeight: 1.1,
                }}
              >
                Responsible by design, not by disclaimer.
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.78,
                  color: T2,
                  margin: "0 0 16px",
                }}
              >
                Every guardrail at MobPae — access caps, payroll linkage,
                employer approval, auto-recovery — is built into the product.
                Not mentioned in fine print.
              </p>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.78,
                  color: T2,
                  margin: 0,
                }}
              >
                We started with the belief that the right financial product for
                the Indian salaried workforce doesn't look like a loan — it
                looks like an extension of payroll. That philosophy shapes every
                feature we build.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  icon: "🔒",
                  title: "Employer-controlled access",
                  desc: "No employee can withdraw more than their configured earned-wage cap. Policy lives with the employer.",
                },
                {
                  icon: "🔄",
                  title: "Payroll-linked recovery",
                  desc: "Repayment happens automatically at the next salary cycle — no collections, no chasing, no defaults.",
                },
                {
                  icon: "📋",
                  title: "Full audit trail",
                  desc: "Every request, approval, disbursal and settlement is logged, timestamped and visible to the employer.",
                },
                {
                  icon: "💡",
                  title: "Zero debt dependency",
                  desc: "Employees access what they've already earned. There is no credit underwriting, no interest on earned amounts within the free threshold.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "16px 20px",
                    border: `1px solid ${BD}`,
                    borderRadius: 12,
                    transition:
                      "border-color 180ms ease, box-shadow 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#C7D5FF";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 16px rgba(49,94,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = BD;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>
                    {item.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: T1,
                        margin: "0 0 4px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.65,
                        color: T2,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The people ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: B,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 10px",
                }}
              >
                Who's behind it
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px,3.5vw,40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                }}
              >
                A small team building something we believe in.
              </h2>
            </div>
            <Link
              to="/team"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: B,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Meet the full team →
            </Link>
          </div>

          <div
            className="redesign-4col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {founders.map((f) => (
              <div key={f.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 84,
                    height: 84,
                    margin: "0 auto 14px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `1px solid ${BD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: f.photo ? "#fff" : `${f.accent}1A`,
                  }}
                >
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                    />
                  ) : (
                    <span style={{ fontSize: 22, fontWeight: 700, color: f.accent, fontFamily: 'Manrope, ui-sans-serif, sans-serif' }}>
                      {f.initials}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14.5, fontWeight: 600, color: T1, margin: "0 0 3px" }}>{f.name}</p>
                <p style={{ fontSize: 12.5, color: T2, margin: 0 }}>{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers / milestones ─────────────────────────────────────────────── */}
      <section style={{ background: T1, padding: "clamp(56px,8vw,80px) 0" }}>
        <div style={W(1200)}>
          <div
            className="redesign-4col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {[
              { n: "< 2 wks", l: "Employer go-live time" },
              { n: "60 sec", l: "Employee request time" },
              { n: "₹0", l: "Capital from employer" },
              { n: "100%", l: "HR-controlled approvals" },
            ].map((s) => (
              <div
                key={s.l}
                style={{ padding: "clamp(24px,3vw,36px)", textAlign: "center" }}
              >
                <p
                  style={{
                    fontSize: "clamp(28px,3.5vw,42px)",
                    fontWeight: 600,
                    color: "#fff",
                    margin: "0 0 6px",
                    letterSpacing: "-0.03em",
                    fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "clamp(56px,8vw,88px) 0" }}>
        <div style={W(1200)}>
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: B,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 10px",
              }}
            >
              What we stand for
            </p>
            <h2
              style={{
                fontSize: "clamp(26px,3.5vw,40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                margin: 0,
                fontFamily: 'Manrope, ui-sans-serif, sans-serif',
              }}
            >
              Our values.
            </h2>
          </div>

          <div
            className="redesign-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                color: B,
                bg: "#EEF2FF",
                title: "Transparency",
                desc: "Every approval, amount and timeline is visible to the employer and employee. No hidden fees. No opaque processes.",
              },
              {
                color: TEAL,
                bg: "#F0FDFA",
                title: "Responsibility",
                desc: "We build guardrails into the product, not just into the terms. Access caps, policy controls and auto-recovery are non-negotiable.",
              },
              {
                color: PURP,
                bg: "#F5F3FF",
                title: "Employer trust",
                desc: "Employers take accountability for their teams. We respect that by keeping them in control of every approval decision.",
              },
              {
                color: GREE,
                bg: "#F0FDF4",
                title: "Inclusive access",
                desc: "A salaried worker on ₹15,000/month deserves the same financial safety net as one on ₹1,50,000. We design for both.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  padding: "clamp(22px,3vw,32px)",
                  background: "#fff",
                  border: `1px solid ${BD}`,
                  borderRadius: 14,
                  display: "flex",
                  gap: 18,
                  transition: "box-shadow 180ms ease, border-color 180ms ease",
                }}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.boxShadow = `0 8px 28px ${v.color}14`;
                  (
                    e.currentTarget as HTMLElement
                  ).style.borderColor = `${v.color}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = BD;
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: v.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: v.color,
                      opacity: 0.85,
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: T1,
                      margin: "0 0 6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {v.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: T2,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
