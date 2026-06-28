export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#5B3CE3",
        "primary-mid":   "#4E32CA",
        "primary-light": "#F0EDFF",
        dark:  "#111827",
        muted: "#6B7280",
        soft:  "#F8F9FC",
        brandDeep: "#111827",
        brand: {
          50: "#F7F7FF",
          100: "#F0EDFF",
          200: "#DED7FF",
          300: "#B9BBFF",
          400: "#9787FF",
          500: "#5B3CE3",
          600: "#6346EA",
          700: "#4E32CA",
          800: "#4648B5",
          900: "#36388F",
          950: "#24265F",
        },
        slate: {
          50: "#F8F9FC",
          100: "#F1F2F7",
          200: "#E5E6EE",
          300: "#D5D7E2",
          400: "#A8ABBA",
          500: "#8D90A3",
          600: "#6B7280",
          700: "#4C4E61",
          800: "#303246",
          900: "#23243A",
          950: "#111827",
        },
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["Inter", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:       "0 10px 32px rgba(16, 24, 40, 0.07)",
        brand: "0 14px 36px rgba(91, 60, 227, 0.16)",
        warm:       "0 14px 32px rgba(91, 60, 227, 0.12)",
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
