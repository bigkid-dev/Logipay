/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#1E3A5F',
          600: '#152E4D',
          700: '#0F2238',
          800: '#091828',
          900: '#0A1628',
          950: '#050D18',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        brand: {
          orange: '#00897b',
          'orange-light': '#4db6ac',
          'orange-dark': '#00574b',
          sky: '#38BDF8',
          navy: '#0A1628',
          'navy-mid': '#1E3A5F',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'card': '0 4px 24px rgba(10, 22, 40, 0.08)',
        'card-hover': '0 12px 40px rgba(10, 22, 40, 0.16)',
        'glow': '0 0 40px rgba(249, 115, 22, 0.3)',
        'glow-sky': '0 0 40px rgba(56, 189, 248, 0.2)',
      }
    },
  },
  plugins: [],
}
