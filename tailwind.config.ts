import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005792', // Parthos blue from the image
          50: '#e6f0f9',
          100: '#cce0f3',
          200: '#99c2e6',
          300: '#66a3da',
          400: '#3385cd',
          500: '#005792',
          600: '#004675',
          700: '#003458',
          800: '#00233a',
          900: '#00111d',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        foreground: {
          light: '#333333',
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;