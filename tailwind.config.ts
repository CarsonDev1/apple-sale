import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        
      },
      keyframes: {
        ripple: {
          '0%': {
            width: '100%',
            height: '100%',
            opacity: '1',
          },
          '100%': {
            width: '170%',
            height: '170%',
            opacity: '0',
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '10%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '20%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '30%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '40%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '50%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
