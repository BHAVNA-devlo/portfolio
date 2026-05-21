/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#050506',
        graphite: '#10100f',
        carbon: '#171615',
        glass: 'rgba(16, 16, 15, 0.62)',
        mint: '#f3c969',
        acid: '#ff6b3d',
        fog: '#e6e1d7',
        steel: '#8c867c',
      },
      boxShadow: {
        glow: '0 0 45px rgba(243, 201, 105, 0.20)',
        acid: '0 0 36px rgba(255, 107, 61, 0.18)',
        insetGlass: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        radialNoise:
          'radial-gradient(circle at 20% 10%, rgba(243,201,105,.13), transparent 32%), radial-gradient(circle at 78% 30%, rgba(255,107,61,.10), transparent 28%), radial-gradient(circle at 50% 95%, rgba(230,225,215,.08), transparent 34%)',
      },
    },
  },
  plugins: [],
};
