import type { ReactNode } from "react";

type PageHeroTone = "light" | "soft" | "dark";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  tone?: PageHeroTone;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  actions,
  tone = "soft",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="site-rail page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="page-hero__actions">{actions}</div> : null}
        </div>
        {children ? <div className="page-hero__aside">{children}</div> : null}
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
  return <div className={`hero-panel hero-panel--${tone}`}>{children}</div>;
}
