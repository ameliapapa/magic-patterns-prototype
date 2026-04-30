/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f8f6f2',
        surface: '#fffffe',
        warm: '#e8e1d7',
        border: 'rgba(138, 116, 103, 0.2)',
        'border-strong': 'rgba(138, 116, 103, 0.25)',
        ink: '#2d2d2a',
        'ink-secondary': '#1f1b16',
        muted: '#6b6660',
        mid: '#404040',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        lora: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        pill: '999px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pb-safe': { 'padding-bottom': 'env(safe-area-inset-bottom)' },
        '.pt-safe': { 'padding-top': 'env(safe-area-inset-top)' },
        '.font-opsz-14': { 'font-variation-settings': "'opsz' 14" },
        '.font-opsz-9': { 'font-variation-settings': "'opsz' 9" },
      })
    },
  ],
}
