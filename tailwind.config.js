const maeColorScales = {
  green: {
    50: '#F6FDE8',
    100: '#EBFBCC',
    200: '#D6F6A0',
    300: '#BAEE68',
    400: '#9BE033',
    500: '#7FC71B',
    600: '#619F11',
    700: '#457809',
    800: '#2F6F1B',
    900: '#044A28',
  },
  amber: {
    50: '#FFFCEB',
    100: '#FFF5C6',
    200: '#FFED93',
    300: '#FFDB4A',
    400: '#FFC820',
    500: '#F9A707',
    600: '#DD7F02',
    700: '#B75806',
    800: '#94440C',
    900: '#7A380D',
  },
  terracotta: {
    50: '#FEF0E3',
    100: '#FEEAD6',
    200: '#FBD1AD',
    300: '#F8B079',
    400: '#F48643',
    500: '#F1651E',
    600: '#E24B14',
    700: '#BC3712',
    800: '#952D17',
    900: '#782816',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mae-green': maeColorScales.green,
        'mae-amber': maeColorScales.amber,
        'mae-terracotta': maeColorScales.terracotta,
        role: maeColorScales.green,
        highlight: maeColorScales.amber,
        memory: maeColorScales.terracotta,
        bg: 'var(--color-canvas)',
        canvas: 'var(--color-canvas)',
        page: 'var(--color-page)',
        surface: 'var(--color-surface)',
        warm: 'var(--color-warm-surface)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        ink: 'var(--color-ink)',
        'ink-secondary': 'var(--color-ink-secondary)',
        muted: 'var(--color-muted)',
        mid: 'var(--color-mid)',
        brand: {
          DEFAULT: 'var(--color-brand)',
          soft: 'var(--color-brand-soft)',
          active: 'var(--color-brand-active)',
          contrast: 'var(--color-brand-contrast)',
        },
      },
      fontFamily: {
        serif: ['"F37 Bobby Trial"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        bobby: ['"F37 Bobby Trial"', 'Georgia', 'serif'],
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
