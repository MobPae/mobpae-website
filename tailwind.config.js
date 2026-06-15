export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:         "#c4522a",
        "primary-mid":   "#d95a2e",
        "primary-light": "#fde8d8",
        dark:  "#0F172A",
        muted: "#64748B",
        soft:  "#faf7f5",
      },
      fontFamily: {
        sans:    ["Geist", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        display: ["Geist", "ui-sans-serif", "-apple-system", "system-ui", "sans-serif"],
        serif:   ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft:       "0 20px 60px rgba(15, 23, 42, 0.08)",
        terracotta: "0 8px 32px rgba(196, 82, 42, 0.28)",
        warm:       "0 8px 24px rgba(196, 82, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
