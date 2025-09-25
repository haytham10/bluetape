/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b9dbff',
          300: '#8cc2ff',
          400: '#5aa2ff',
          500: '#2b7aff',
          600: '#1f5fe6',
          700: '#1a4bb8',
          800: '#183f93',
          900: '#173874',
        },
        accent: {
          50: '#fff4eb',
          100: '#ffe6d1',
          200: '#ffc7a0',
          300: '#ffa06a',
          400: '#ff7a3a',
          500: '#ff5a14',
          600: '#e34409',
          700: '#bd3509',
          800: '#9a2d0e',
          900: '#7e290f',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)',
        elevated: '0 20px 40px -20px rgba(0,0,0,0.25)',
        innerGlow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(1200px 600px at 50% -100px, rgba(59,130,246,0.15), transparent), radial-gradient(800px 400px at 80% 0%, rgba(249,115,22,0.12), transparent)',
        'grid': 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '24px 24px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2.5rem',
        },
      },
    },
  },
  plugins: [],
};
