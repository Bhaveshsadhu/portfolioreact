/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 45px rgba(96, 165, 250, 0.25)',
      },
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(94,234,212,0.15))',
      },
    },
  },
  plugins: [],
}
