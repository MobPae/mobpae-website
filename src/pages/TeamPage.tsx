import React from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { HeroPanel, PageHero } from "../components/PageHero";

// ── Design tokens ─────────────────────────────────────────────────────────────
const B = "var(--mp-blue)";
const BH = "var(--mp-blue-700)";
const T1 = "var(--mp-ink)";
const T2 = "var(--mp-muted)";
const BG = "var(--mp-page)";
const BD = "var(--mp-border)";
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
    accent: B,
    bio: "7+ years in administration, legal compliance, and corporate governance. Keeps MobPae's regulatory foundations solid and operations running smoothly.",
  },
  {
    initials: "JB",
    photo: "/team/junu.png",
    name: "Junu Bhattarai",
    role: "HR & Digital Marketing Lead",
    accent: B,
    bio: "Leads HR operations and digital marketing, connecting MobPae's people processes with how the product reaches employers and employees.",
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
        loading="lazy"
        decoding="async"
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
          fontSize: 42,
          fontWeight: 400,
          color: member.accent,
          fontFamily: 'Inter, ui-sans-serif, sans-serif',
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
        fontFamily: "Inter, ui-sans-serif, sans-serif",
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
            The people building{" "}
            <br />
            MobPae.
          </>
        }
        description="A small founding team combining financial services, platform engineering, legal operations and product execution for India's employer-powered wellness market."
      >
        <HeroPanel>
          <p style={{ margin: 0, color: B, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Operating principles
          </p>
          <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
            {["Financial discipline", "Product clarity", "Employer trust", "Responsible access"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: `1px solid ${BD}` }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#0057FF", boxShadow: "0 0 0 5px rgba(0, 87, 255,0.16)" }} />
                <span style={{ color: T1, fontSize: 14, fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </div>
        </HeroPanel>
      </PageHero>

      {/* ── Team grid ───────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: "0 0 clamp(64px,9vw,100px)" }}>
        <div style={W(PAGE_MAX)}>
          <div
            className="redesign-3col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
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
                      fontWeight: 400,
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
                      fontWeight: 400,
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
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                +
              </div>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
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
                fontWeight: 400,
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
                fontSize: "clamp(24px,2.35vw,34px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
                margin: 0,
                fontFamily: 'Inter, ui-sans-serif, sans-serif',
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
                    fontWeight: 400,
                    color: B,
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.n}
                </span>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily: 'Inter, ui-sans-serif, sans-serif',
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

      {/* ── DNA strip ───────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(44px,6vw,72px) 0" }}>
        <div style={W(PAGE_MAX)}>
          <div
            className="redesign-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(28px,4vw,64px)",
              alignItems: "center",
              border: "1px solid rgba(0, 87, 255,0.12)",
              borderRadius: 20,
              background: "#F8FAFF",
              padding: "clamp(24px,3vw,40px)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 400,
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
                  fontSize: "clamp(20px,1.55vw,25px)",
                  fontWeight: 400,
                  letterSpacing: "-0.012em",
                  lineHeight: 1.24,
                  color: T1,
                  margin: "0 0 14px",
                  fontFamily: 'Inter, ui-sans-serif, sans-serif',
                }}
              >
                Finance depth.{" "}
                <br />
                Engineering rigour.
              </h2>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.68,
                  color: T2,
                  margin: 0,
                }}
              >
                We came from industries where getting things wrong costs people
                real money. That shapes everything, from how we architect the
                platform to how we onboard an employer.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Banking & financial services", "01"],
                ["Scalable engineering platforms", "02"],
                ["MSME & employer advisory", "03"],
                ["Responsible product design", "04"],
              ].map(([label, icon]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 18px",
                    background: "#F8FAFF",
                    borderRadius: 10,
                    border: `1px solid ${BD}`,
                    transition:
                      "background 150ms ease, border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#F2F6FF";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0, 87, 255,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#F8FAFF";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      BD;
                  }}
                >
                  <span style={{ minWidth: 28, fontSize: 11, letterSpacing: "0.1em", color: B }}>{icon}</span>
                  <span
                    style={{
                      fontSize: 14,
                      color: T1,
                      fontWeight: 400,
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
                  fontWeight: 400,
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
                  fontSize: "clamp(24px,2.6vw,34px)",
                  fontWeight: 400,
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontFamily: 'Inter, ui-sans-serif, sans-serif',
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
                  fontWeight: 400,
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
                  fontWeight: 400,
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
