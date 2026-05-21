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
        void: '#050807',
        graphite: '#0b1110',
        carbon: '#111a18',
        glass: 'rgba(11, 17, 16, 0.58)',
        mint: '#75f4c8',
        acid: '#c8ff66',
        fog: '#c9d8d0',
        steel: '#72847c',
      },
      boxShadow: {
        glow: '0 0 45px rgba(117, 244, 200, 0.20)',
        acid: '0 0 36px rgba(200, 255, 102, 0.18)',
        insetGlass: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        radialNoise:
          'radial-gradient(circle at 20% 10%, rgba(117,244,200,.12), transparent 32%), radial-gradient(circle at 78% 30%, rgba(200,255,102,.10), transparent 28%), radial-gradient(circle at 50% 95%, rgba(96,255,202,.10), transparent 34%)',
      },
    },
  },
  plugins: [],
};
