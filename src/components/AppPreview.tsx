type AppPreviewProps = {
  className?: string;
  priority?: boolean;
};

export function AppPreview({ className = "", priority = false }: AppPreviewProps) {
  return (
    <div className={`app-preview hero-device ${className}`} aria-hidden="true">
      <span className="hero-device__button hero-device__button--left" />
      <span className="hero-device__button hero-device__button--right" />
      <div className="hero-device__screen">
        <img
          src="/product-shots/dashboard.png"
          alt=""
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <span className="hero-device__notch" />
      <span className="hero-device__shine" />
    </div>
  );
}
