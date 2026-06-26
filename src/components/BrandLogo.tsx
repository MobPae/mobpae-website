type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
};

export function BrandLogo({
  className = "",
  iconClassName = "h-8",
  wordmarkClassName = "text-[15px]",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-icon.svg"
        alt=""
        aria-hidden="true"
        className={`${iconClassName} w-auto flex-shrink-0`}
        style={{ objectFit: "contain" }}
      />
      <span
        className={`${wordmarkClassName} font-[700] leading-none tracking-normal text-[#191A2E]`}
      >
        MobPae
      </span>
    </span>
  );
}
