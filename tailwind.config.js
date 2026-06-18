export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#10b981",
        "primary-mid":   "#059669",
        "primary-light": "#d1fae5",
        dark:  "#0f172a",
        muted: "#64748b",
        soft:  "#f8faf7",
        emeraldDeep: "#064e3b",
      },
      fontFamily: {
        sans:    ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:       "0 24px 80px rgba(15, 23, 42, 0.08)",
        emerald: "0 18px 46px rgba(16, 185, 129, 0.28)",
        warm:       "0 18px 42px rgba(6, 78, 59, 0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.55s ease both",
        "fade-in":    "fade-in 0.5s ease both",
        "scale-in":   "scale-in 0.5s ease both",
      },
    },
  },
  plugins: [],
};
