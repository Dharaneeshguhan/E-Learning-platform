/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          hover: '#4338ca'
        },
        secondary: '#6b7280',
        dark: {
          bg: '#1f2937',
          text: '#1f2937'
        },
        light: {
          bg: '#ffffff',
          text: '#f9fafb'
        }
      },
      boxShadow: {
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
