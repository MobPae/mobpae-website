export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#c4522a",
        "primary-mid":   "#d95a2e",
        "primary-light": "#fde8d8",
        dark:  "#1c1209",
        muted: "#6b5e53",
        soft:  "#faf7f5",
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:       "0 20px 60px rgba(28, 18, 9, 0.08)",
        terracotta: "0 8px 32px rgba(196, 82, 42, 0.28)",
        warm:       "0 8px 24px rgba(196, 82, 42, 0.18)",
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
