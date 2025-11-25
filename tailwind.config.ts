import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['var(--font-karla)'],
        mabry: ['var(--font-mabry)'],
        circular: ['var(--font-circular)'],
      },
      fontWeight: {
        'circular-medium': '700',
        'circular-bold': '800',
      }
    },
  },
  plugins: [],
};
export default config;