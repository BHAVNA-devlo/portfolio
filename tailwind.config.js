/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: 'rgb(var(--color-void) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        carbon: 'rgb(var(--color-carbon) / <alpha-value>)',
        glass: 'rgba(var(--color-glass) / 0.62)',
        mint: 'rgb(var(--color-mint) / <alpha-value>)',
        acid: 'rgb(var(--color-acid) / <alpha-value>)',
        fog: 'rgb(var(--color-fog) / <alpha-value>)',
        steel: 'rgb(var(--color-steel) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 45px rgb(var(--color-mint) / 0.20)',
        acid: '0 0 36px rgb(var(--color-acid) / 0.18)',
        insetGlass: 'inset 0 1px 0 rgba(255,255,255,var(--glass-border-opacity, 0.08))',
      },
      backgroundImage: {
        radialNoise:
          'radial-gradient(circle at 20% 10%, rgb(var(--color-mint) / 0.13), transparent 32%), radial-gradient(circle at 78% 30%, rgb(var(--color-acid) / 0.10), transparent 28%), radial-gradient(circle at 50% 95%, rgb(var(--color-fog) / 0.08), transparent 34%)',
      },
    },
  },
  plugins: [],
};
