/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--color-canvas) / <alpha-value>)',
        panel: 'hsl(var(--color-panel) / <alpha-value>)',
        ink: 'hsl(var(--color-ink) / <alpha-value>)',
        'ink-muted': 'hsl(var(--color-ink-muted) / <alpha-value>)',
        line: 'hsl(var(--color-line) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-2': 'hsl(var(--color-accent-2) / <alpha-value>)',
        glow: 'hsl(var(--color-glow) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        display: ['"Fraunces"', 'ui-serif', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      boxShadow: {
        soft: '0 30px 80px -60px rgba(10, 12, 18, 0.6)',
        glow: '0 0 0 1px hsl(var(--color-accent) / 0.35), 0 0 40px -10px hsl(var(--color-glow) / 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseCopper: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        'pulse-copper': 'pulseCopper 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

