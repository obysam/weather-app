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
      },
      colors: {
        'blue-300': '#86a6da',
        'blue-500': '#3b82f6',
        'blue-900': '#1e3a8a',
        'gray-300': '#d1d5db',
        'gray-200': '#1e3a8a',
        'gray-500': '#6b7280',
      },
    },
  },
  plugins: [],
};
export default config;
