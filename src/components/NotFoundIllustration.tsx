export function NotFoundIllustration() {
  return (
    <svg
      viewBox="0 0 400 360"
      width="100%"
      height="auto"
      role="img"
      aria-label="A pin that has wandered off a dotted path"
    >
      <text
        x="200"
        y="230"
        textAnchor="middle"
        fontSize="180"
        fontWeight="400"
        fill="var(--mp-blue)"
        opacity="0.08"
        style={{ fontFamily: "inherit", letterSpacing: "-0.04em" }}
      >
        404
      </text>

      <circle cx="308" cy="70" r="5" fill="var(--mp-sky)" opacity="0.55" />
      <circle cx="72" cy="120" r="4" fill="var(--mp-blue)" opacity="0.3" />
      <circle cx="336" cy="220" r="3" fill="var(--mp-blue)" opacity="0.4" />
      <circle cx="54" cy="270" r="5" fill="var(--mp-sky)" opacity="0.45" />

      <path
        d="M60 210 C 130 150, 200 260, 270 190 S 330 120, 300 95"
        fill="none"
        stroke="var(--mp-border)"
        strokeWidth="3"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />

      <g transform="translate(275,60) rotate(24)">
        <path
          d="M0 0C-16.6 0-30 13.4-30 30c0 22.5 30 46 30 46s30-23.5 30-46C30 13.4 16.6 0 0 0Z"
          fill="var(--mp-blue)"
        />
        <circle cx="0" cy="29" r="11" fill="#fff" />
        <text
          x="0"
          y="34"
          textAnchor="middle"
          fontSize="15"
          fontWeight="600"
          fill="var(--mp-blue)"
        >
          ?
        </text>
      </g>
    </svg>
  );
}
