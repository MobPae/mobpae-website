export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#7679FF",
        "primary-mid":   "#5659D9",
        "primary-light": "#ECEBFF",
        dark:  "#191A2E",
        muted: "#62657A",
        soft:  "#F8F9FC",
        emeraldDeep: "#24265F",
        emerald: {
          50: "#F7F7FF",
          100: "#ECEBFF",
          200: "#D8D7FF",
          300: "#B9BBFF",
          400: "#999CFF",
          500: "#7679FF",
          600: "#686BEF",
          700: "#5659D9",
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
          600: "#62657A",
          700: "#4C4E61",
          800: "#303246",
          900: "#23243A",
          950: "#191A2E",
        },
      },
      fontFamily: {
        sans:    ["Manrope", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["Manrope", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["Manrope", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:       "0 10px 32px rgba(16, 24, 40, 0.07)",
        emerald: "0 14px 36px rgba(118, 121, 255, 0.2)",
        warm:       "0 14px 32px rgba(86, 89, 217, 0.12)",
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
