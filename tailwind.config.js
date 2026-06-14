export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0047AB",
        "primary-mid": "#007FFF",
        "primary-light": "#ddeeff",
        dark: "#0F172A",
        muted: "#64748B",
        soft: "#F8FAFC",
        blue: {
          50:  "#f0f5ff",
          100: "#ddeeff",
          200: "#bad5ff",
          300: "#7eb8ff",
          400: "#4da6ff",
          500: "#007FFF",
          600: "#0047AB",
          700: "#00358a",
          800: "#002b7a",
          900: "#001845",
        },
      },
      fontFamily: {
        sans:    ["Geist", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["Geist", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft:   "0 20px 60px rgba(15, 23, 42, 0.08)",
        cobalt: "0 8px 32px rgba(0, 71, 171, 0.25)",
        azure:  "0 8px 24px rgba(0, 127, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
