import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-gray': {
        '50': '#f2f2fb',
        '100': '#e8e8f7',
        '200': '#d5d5f0',
        '300': '#bebce5',
        '400': '#a7a0d9',
        '500': '#9688cc',
        '600': '#856fbc',
        '700': '#725ea4',
        '800': '#5d4e85',
        '900': '#4d446b',
        '950': '#241f31',
    },
      }
    },
  },
  plugins: [],
} satisfies Config;
