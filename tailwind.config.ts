import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#022c22',
          primary: '#059669',
          light: '#f0fdf4',
          cream: '#fdfbf7',
          stone: '#a8a29e'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif']
      }
    }
  },
  plugins: []
} satisfies Config
