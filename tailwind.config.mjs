/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,ts,tsx,js,jsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      colors: {
        'bg-primary-light': '#ffffff',
        'text-primary-light': '#262626',
        'text-secondary-light': '#525252',
        'border-primary-light': '#d4d4d4',
        'accent-light': '#0284c7',

        'bg-primary-dark': '#121212',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',
        'text-primary-dark': '#f5f5f5',
        'text-secondary-dark': '#a3a3a3',
        'border-primary-dark': '#404040',
        'accent-dark': '#0ea5e9',
      },
    },
  },
  plugins: [],
};
