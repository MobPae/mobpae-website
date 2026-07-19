import type { CSSProperties, ReactNode } from "react";

const PAGE_MAX = 1840;

type PageHeroTone = "light" | "soft" | "dark";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  tone?: PageHeroTone;
};

const rail: CSSProperties = {
  maxWidth: PAGE_MAX,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
  width: "100%",
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  actions,
  tone = "light",
}: PageHeroProps) {
  const isDark = tone === "dark";
  const background = isDark
    ? "radial-gradient(circle at 82% 18%, rgba(49,94,255,0.34), transparent 32%), radial-gradient(circle at 16% 78%, rgba(124,58,237,0.2), transparent 32%), linear-gradient(135deg, #080B16 0%, #0B1028 54%, #171033 100%)"
    : tone === "soft"
      ? "linear-gradient(180deg, #F7F8FC 0%, #FFFFFF 100%)"
      : "#FFFFFF";

  return (
    <section
      className="page-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background,
        color: isDark ? "#fff" : "#0B0D12",
        padding: "clamp(58px,7vw,96px) 0 clamp(50px,6vw,82px)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid #E6E8EE",
      }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "96px 96px",
              maskImage:
                "radial-gradient(circle at 50% 35%, rgba(0,0,0,0.85), transparent 70%)",
              opacity: 0.26,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-8vw",
              bottom: "-24%",
              width: "44vw",
              minWidth: 420,
              aspectRatio: "1",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.11)",
              boxShadow: "inset 0 0 90px rgba(49,94,255,0.2)",
              opacity: 0.55,
            }}
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 12%, rgba(49,94,255,0.08), transparent 34%), radial-gradient(circle at 10% 88%, rgba(203,212,255,0.22), transparent 30%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div style={{ ...rail, position: "relative", zIndex: 1 }}>
        <div
          className={children ? "redesign-2col" : undefined}
          style={{
            display: "grid",
            gridTemplateColumns: children
              ? "minmax(0,0.92fr) minmax(320px,0.72fr)"
              : "minmax(0,920px)",
            gap: "clamp(32px,5vw,76px)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 16px",
                color: isDark ? "#CBD4FF" : "#315EFF",
                fontSize: 11.5,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </p>
            <h1
              style={{
                margin: 0,
                maxWidth: 880,
                fontSize: "clamp(36px,5vw,68px)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                fontFamily: "Manrope, ui-sans-serif, sans-serif",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                margin: "24px 0 0",
                maxWidth: 660,
                color: isDark ? "rgba(255,255,255,0.76)" : "#5B6270",
                fontSize: "clamp(15px,1.5vw,18px)",
                fontWeight: 500,
                lineHeight: 1.78,
              }}
            >
              {description}
            </p>
            {actions ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 34,
                }}
              >
                {actions}
              </div>
            ) : null}
          </div>

          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function HeroPanel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: PageHeroTone;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className="motion-reveal"
      style={{
        border: isDark
          ? "1px solid rgba(255,255,255,0.14)"
          : "1px solid #E6E8EE",
        background: isDark
          ? "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.055))"
          : "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        borderRadius: 28,
        padding: "clamp(20px,3vw,32px)",
        boxShadow: isDark
          ? "0 34px 90px rgba(0,0,0,0.28)"
          : "0 24px 70px rgba(17,24,39,0.08)",
        backdropFilter: isDark ? "blur(18px)" : undefined,
        WebkitBackdropFilter: isDark ? "blur(18px)" : undefined,
      }}
    >
      {children}
    </div>
  );
}
