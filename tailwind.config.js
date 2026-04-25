/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "hokage-red": "#C41E3A",
        "hokage-crimson": "#8B0000",
        "hokage-gold": "#FFD700",
        "hokage-charcoal": "#1A1A1A",
        "hokage-dark": "#111111",
        "hokage-gray": "#2D2D2D",
        "hokage-light": "#E5E5E5",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "Oswald", "sans-serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
