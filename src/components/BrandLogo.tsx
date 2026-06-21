type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
};

export function BrandLogo({
  className = "",
  iconClassName = "h-9 w-9",
  wordmarkClassName = "text-[15px]",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/mobpae-icon-color.svg"
        alt=""
        aria-hidden="true"
        className={`${iconClassName} flex-shrink-0`}
      />
      <span
        className={`${wordmarkClassName} font-[700] leading-none tracking-[0.1em] text-[#101828]`}
      >
        MOBPAE
      </span>
    </span>
  );
}
