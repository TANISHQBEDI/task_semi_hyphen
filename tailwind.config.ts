import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my":"url('/bg.png')",
        'gradient-to-text': 'linear-gradient(to bottom, #6FFFE9 100%, #052C26 100%)',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
      },
    },
  },
  plugins: [],
};
export default config;
