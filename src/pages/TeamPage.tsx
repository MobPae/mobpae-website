import React from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { HeroPanel, PageHero } from "../components/PageHero";

// ── Design tokens ─────────────────────────────────────────────────────────────
const B = "#315EFF";
const BH = "#2A51E0";
const T1 = "#0B0D12";
const T2 = "#5B6270";
const BG = "#F6F7F9";
const BD = "#E6E8EE";
const TEAL = "#0D9488";
const PURP = "#7C3AED";
const PAGE_MAX = 1840;

const W = (maxWidth: number | string): React.CSSProperties => ({
  maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
  width: "100%",
});

// ── Team data ─────────────────────────────────────────────────────────────────
type Member = {
  initials: string;
  photo: string | null;
  name: string;
  role: string;
  accent: string;
  bio: string;
};

const TEAM: Member[] = [
  {
    initials: "LP",
    photo: "/team/luhit-parajuli.png",
    name: "Luhit Parajuli",
    role: "Co-Founder & Business Strategy",
    accent: B,
    bio: "13+ years across banking, MSME advisory, and strategic growth. Shapes how MobPae is positioned, trusted, and scaled.",
  },
  {
    initials: "JU",
    photo: "/team/jyotirmoy.png",
    name: "Jyotirmoy Upadhaya",
    role: "Co-Founder & Technology Lead",
    accent: B,
    bio: "8+ years in software engineering and platform architecture. Builds the secure, scalable rails that MobPae runs on.",
  },
  {
    initials: "BB",
    photo: "/team/bharati-bhattarai.png",
    name: "Bharati Bhattarai",
    role: "Admin & Legal Head",
    accent: TEAL,
    bio: "7+ years in administration, legal compliance, and corporate governance. Keeps MobPae's regulatory foundations solid and operations running smoothly.",
  },
  {
    initials: "AK",
    photo: null,
    name: "Anurag Koirala",
    role: "Software Development",
    accent: PURP,
    bio: "1+ years in software development and designing.",
  },
];

const principles = [
  {
    n: "01",
    title: "Employer-first, always.",
    body: "Salary access without employer visibility is just another loan product. Every decision we make keeps the employer in control of policy, approval, and recovery.",
  },
  {
    n: "02",
    title: "Simple is the hard part.",
    body: "A worker requesting ₹5,000 before payday shouldn't navigate a 10-step app. We obsess over reducing friction for both employees and the HR teams that support them.",
  },
  {
    n: "03",
    title: "No debt trap. Ever.",
    body: "Earned wage access is not credit. We build every guardrail — access caps, payroll linkage, auto-recovery — to make sure it never becomes one.",
  },
];

// ── Avatar component ───────────────────────────────────────────────────────────
function Avatar({ member }: { member: Member }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, ${member.accent}22 0%, ${member.accent}44 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: member.accent,
          fontFamily: 'Manrope, ui-sans-serif, sans-serif',
          letterSpacing: "-0.02em",
          opacity: 0.7,
        }}
      >
        {member.initials}
      </span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function TeamPage() {
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

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people building
            <br />
            MobPae.
          </>
        }
        description="A small founding team combining financial services, platform engineering, legal operations and product execution for India's employer-powered wellness market."
      >
        <HeroPanel>
          <p style={{ margin: 0, color: B, fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Operating principles
          </p>
          <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
            {["Financial discipline", "Product clarity", "Employer trust", "Responsible access"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: `1px solid ${BD}` }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#315EFF", boxShadow: "0 0 0 5px rgba(49,94,255,0.16)" }} />
                <span style={{ color: T1, fontSize: 14, fontWeight: 800 }}>{item}</span>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      {/* ── Team grid ───────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "0 0 clamp(64px,9vw,100px)" }}>
        <div style={W(PAGE_MAX)}>
          <div
            className="redesign-4col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {TEAM.map((m) => (
              <div
                key={m.name + m.initials}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid ${BD}`,
                  transition: "box-shadow 200ms ease, transform 200ms ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 36px rgba(20,30,60,0.10)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Photo area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/4.5",
                    overflow: "hidden",
                    background: BG,
                  }}
                >
                  <Avatar member={m} />
                </div>

                {/* Info */}
                <div style={{ padding: "16px 18px 20px" }}>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: T1,
                      margin: "0 0 3px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: m.accent,
                      margin: "0 0 10px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {m.role}
                  </p>
                  <p
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.65,
                      color: T2,
                      margin: 0,
                    }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* ── Hiring card ─────────────────────────────────────────────── */}
            <Link
              to="/careers"
              style={{
                background: "#fff",
                borderRadius: 16,
                border: `2px dashed ${BD}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                textDecoration: "none",
                minHeight: 320,
                padding: 24,
                transition: "border-color 200ms ease, box-shadow 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = B;
                (
                  e.currentTarget as HTMLElement
                ).style.boxShadow = `0 8px 28px ${B}14`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = BD;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: B,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 28,
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                +
              </div>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: T1,
                    margin: "0 0 4px",
                  }}
                >
                  Join the team
                </p>
                <p
                  style={{
                    fontSize: 12.5,
                    color: T2,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  We're growing. See open roles →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Principles ──────────────────────────────────────────────────────── */}
      <section
        style={{ background: "#fff", padding: "clamp(56px,8vw,88px) 0" }}
      >
        <div style={W(PAGE_MAX)}>
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
              What drives us
            </p>
            <h2
              style={{
                fontSize: "clamp(32px,4.5vw,60px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: 0,
                fontFamily: 'Manrope, ui-sans-serif, sans-serif',
              }}
            >
              The principles we build by.
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
            {principles.map((p) => (
              <div
                key={p.n}
                style={{
                  background: "#fff",
                  padding: "clamp(24px,3vw,36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "background 180ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#FAFBFF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fff")
                }
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: B,
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.n}
                </span>
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
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.72,
                    color: T2,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DNA strip (dark) ────────────────────────────────────────────────── */}
      <section style={{ background: T1, padding: "clamp(48px,7vw,80px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div
            className="redesign-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px,5vw,80px)",
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
                Our DNA
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px,4.5vw,60px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "#fff",
                  margin: "0 0 16px",
                  fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                }}
              >
                Finance depth.
                <br />
                Engineering rigour.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                We came from industries where getting things wrong costs people
                real money. That shapes everything — from how we architect the
                platform to how we onboard an employer.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Banking & financial services", "🏦"],
                ["Scalable engineering platforms", "⚙️"],
                ["MSME & employer advisory", "🤝"],
                ["Responsible product design", "🎯"],
              ].map(([label, icon]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 18px",
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition:
                      "background 150ms ease, border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(49,94,255,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(49,94,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hiring CTA ──────────────────────────────────────────────────────── */}
      <section
        style={{ background: "#fff", padding: "clamp(56px,8vw,80px) 0" }}
      >
        <div style={W(PAGE_MAX)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 28,
              padding: "clamp(28px,4vw,44px)",
              background: BG,
              borderRadius: 20,
              border: `1px solid ${BD}`,
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
                  margin: "0 0 8px",
                }}
              >
                Join us
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px,3vw,38px)",
                  fontWeight: 800,
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontFamily: 'Manrope, ui-sans-serif, sans-serif',
                }}
              >
                We're building something early and important.
              </h2>
              <p style={{ fontSize: 14.5, color: T2, margin: 0 }}>
                If you care about fintech, product and responsible salary access
                — we'd love to hear from you.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              <Link
                to="/careers"
                style={{
                  height: 44,
                  padding: "0 22px",
                  background: B,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = BH)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = B)
                }
              >
                See open roles
              </Link>
              <a
                href="mailto:support@mobpae.com"
                style={{
                  height: 44,
                  padding: "0 22px",
                  background: "#fff",
                  color: T1,
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  border: `1px solid ${BD}`,
                  transition: "border-color 150ms ease, color 150ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = B;
                  (e.currentTarget as HTMLElement).style.color = B;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = BD;
                  (e.currentTarget as HTMLElement).style.color = T1;
                }}
              >
                Reach out directly
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
