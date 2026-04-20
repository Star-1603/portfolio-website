/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
  background: '#0a0a0c',
  foreground: '#e5e7eb',

  primary: {
    500: '#8b5cf6', // muted violet
  },

  accent: {
    500: '#3b82f6', // soft blue
  }
},
    fontFamily: {
  mono: ["'Azeret Mono'", 'monospace'],   // was DM Mono
  serif: ["'Cormorant'", 'serif'],         // was Cormorant Garamond
},
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'softer': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};