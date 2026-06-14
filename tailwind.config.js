/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F1",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1B1B2F",
          muted: "#6B6F8A",
          soft: "#9296AC",
        },
        line: "#E4DFD3",
        quantum: {
          DEFAULT: "#3454D1",
          50: "#EEF1FC",
          100: "#D6DEF8",
          600: "#3454D1",
          700: "#2A41A8",
        },
        collapse: {
          DEFAULT: "#E8542E",
          50: "#FDEEE9",
          600: "#E8542E",
        },
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
