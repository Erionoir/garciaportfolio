/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zzz-green': '#D2F500', // The iconic neon lime
        'zzz-black': '#0A0A0A',
        'zzz-dark': '#141414',
        'zzz-orange': '#FF4D00',
        'zzz-yellow': '#FFD600',
        'zzz-cyan': '#00F0FF',
        'zzz-grey': '#B8B8B8',
      },
      fontFamily: {
        'display': ['Teko', 'sans-serif'],
        'body': ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'halftone': "radial-gradient(circle, #000 1px, transparent 1px)",
        'stripes-black': "repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)",
        'stripes-yellow': "repeating-linear-gradient(45deg, #FFD600, #FFD600 10px, transparent 10px, transparent 20px)",
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-fast': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [],
}