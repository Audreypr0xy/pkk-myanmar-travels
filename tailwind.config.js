
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E7D32',
          greenDark: '#1B5E20',
          greenLight: '#E8F5E9',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 4px 20px -6px rgba(46, 125, 50, 0.12)',
        cardHover: '0 12px 32px -8px rgba(46, 125, 50, 0.25)',
      },
    },
  },
  plugins: [],
}
