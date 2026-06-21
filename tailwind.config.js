export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#0F8F72",
        "primary-mid":   "#086A56",
        "primary-light": "#E9F8F3",
        dark:  "#101828",
        muted: "#667085",
        soft:  "#F6F9F8",
        emeraldDeep: "#04352D",
        emerald: {
          50: "#F0FAF7",
          100: "#D8F2EA",
          200: "#B7E7D8",
          300: "#83D5BF",
          400: "#45B99A",
          500: "#159A7B",
          600: "#0F8F72",
          700: "#0B735D",
          800: "#095C4B",
          900: "#074A3D",
          950: "#04352D",
        },
      },
      fontFamily: {
        sans:    ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["DM Sans", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:       "0 10px 32px rgba(16, 24, 40, 0.07)",
        emerald: "0 14px 36px rgba(15, 143, 114, 0.2)",
        warm:       "0 14px 32px rgba(8, 106, 86, 0.12)",
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
