import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
        },
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "100px",
      },
    },
  },
  plugins: [],
};
export default config;
