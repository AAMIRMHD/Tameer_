/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F9F8F6',
        gold: {
          100: '#F9F1D8',
          300: '#E7C77D',
          500: '#CBA85C',
          700: '#9C7A35'
        },
        ink: '#0B0D12'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(13, 16, 24, 0.08)',
        lift: '0 24px 80px rgba(13, 16, 24, 0.14)',
        glow: '0 0 40px rgba(203, 168, 92, 0.35)'
      },
      backgroundImage: {
        hero: 'radial-gradient(1200px 600px at 20% 10%, rgba(203,168,92,0.18), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(255,255,255,0.65), transparent 60%)',
        glass: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.12))'
      },
      borderRadius: {
        xl2: '1.4rem'
      }
    }
  },
  plugins: []
};
