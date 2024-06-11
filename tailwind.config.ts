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
        'gradient-to-bg': 'linear-gradient(to bottom, rgb(91, 192, 190,0.6) 1%, #052C26 100%)'

      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
      },
      boxShadow: {
        'custom': '0 3px 4px 0 rgba(103, 230, 216, 0.6)',
        'button' : '0 0 20px 0 rgba(111, 255, 233, 0.5)',
      },
      fontFamily: {
        'train-one': ['Train One', 'sans-serif'],
        'sarabun':['Sarabun','sans-serif']

      },
      transitionProperty: {
        'height': 'height'
    },
    },
  },
  plugins: [],
};
export default config;
