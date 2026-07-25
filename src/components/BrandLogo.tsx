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
        src="/logo-horizontal.png"
        alt="MobPae"
        className={`${iconClassName} w-auto flex-shrink-0`}
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}
