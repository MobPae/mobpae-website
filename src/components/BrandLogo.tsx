type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
};

export function BrandLogo({
  className = "",
  iconClassName = "h-6",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/brand/mobpae-logo.svg"
        alt="MobPae"
        className={`${iconClassName} w-auto flex-shrink-0`}
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}
