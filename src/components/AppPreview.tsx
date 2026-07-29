type AppPreviewProps = {
  className?: string;
  priority?: boolean;
};

export function AppPreview({ className = "", priority = false }: AppPreviewProps) {
  return (
    <div className={`app-preview hero-device ${className}`}>
      <span className="hero-device__button hero-device__button--left" aria-hidden="true" />
      <span className="hero-device__button hero-device__button--right" aria-hidden="true" />
      <div className="hero-device__screen">
        <img
          src="/product-shots/dashboard.png"
          alt="MobPae employee app dashboard showing available salary advance, limit, and recent activity"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <span className="hero-device__notch" aria-hidden="true" />
      <span className="hero-device__shine" aria-hidden="true" />
    </div>
  );
}
