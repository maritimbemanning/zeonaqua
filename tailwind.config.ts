import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zeon: {
          navy: {
            DEFAULT: '#283e56',
            dark: '#182533',
            light: '#385779',
          },
          cream: '#fef4e8',
          gray: '#e6e6e6',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)'],
      },
    },
  },
  plugins: [],
};
export default config;
