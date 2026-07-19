// Subtle, continuous "ruled paper" texture used sparingly across the site as a shared brand accent.
export function GridPatternOverlay({
  opacity = 0.5,
  lineColor = "rgba(11,13,18,0.05)",
  size = 64,
  fade = true,
}: {
  opacity?: number;
  lineColor?: string;
  size?: number;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        WebkitMaskImage: fade ? "radial-gradient(ellipse at center, black 50%, transparent 95%)" : undefined,
        maskImage: fade ? "radial-gradient(ellipse at center, black 50%, transparent 95%)" : undefined,
      }}
    />
  );
}
