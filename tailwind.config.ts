import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F1E8",
        "paper-2": "#EDE7D9",
        ink: "#171717",
        "ink-soft": "#4A463E",
        primary: {
          DEFAULT: "#8B1E1E",
          dark: "#6E1616",
          light: "#A83333",
        },
        gold: {
          DEFAULT: "#C7A45D",
          dark: "#A9863F",
          light: "#DCC085",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "flow-dash": {
          to: { strokeDashoffset: "-100" },
        },
      },
      animation: {
        "flow-dash": "flow-dash 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
