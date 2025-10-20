/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0A0A0F',
        'cyber-dark': '#131320',
        'cyber-navy': '#1E213F',
        'cyber-gray': '#2C2C3B',
        'cyber-light': '#E6E6EC',
        'neon-blue': '#05D9E8',
        'neon-purple': '#AD1AAF',
        'neon-pink': '#FF3864',
        'neon-green': '#39FF14',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-mono)', 'monospace'],
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'flow': 'flow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 4px rgba(5, 217, 232, 0.3), 0 0 11px rgba(5, 217, 232, 0.3)' },
          '100%': { textShadow: '0 0 8px rgba(5, 217, 232, 0.6), 0 0 20px rgba(5, 217, 232, 0.6)' },
        },
        flow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.neon-blue"), 0 0 10px rgba(5, 217, 232, 0.5)',
        'neon-green': '0 0 5px theme("colors.neon-green"), 0 0 10px rgba(57, 255, 20, 0.5)',
        'neon-pink': '0 0 5px theme("colors.neon-pink"), 0 0 10px rgba(255, 56, 100, 0.5)',
      },
    },
  },
  plugins: [],
};
