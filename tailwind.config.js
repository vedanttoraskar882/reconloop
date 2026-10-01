/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f6',
          500: '#0e87ea',
          600: '#026ac8',
          700: '#0354a1',
          800: '#074785',
          900: '#0c3b6e',
          950: '#082549',
        },
        navy: {
          800: '#14213d',
          850: '#101a30',
          900: '#0b1329',
          950: '#070d1e',
        },
        slate: {
          850: '#152033',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -2px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 12px 35px -4px rgba(15, 23, 42, 0.1)',
        'glow': '0 0 30px -5px rgba(14, 135, 234, 0.3)',
      }
    },
  },
  plugins: [],
}
