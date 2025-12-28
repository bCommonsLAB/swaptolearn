/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Relume UI Theme-Konfiguration
      colors: {
        'border-primary': 'var(--border-primary)',
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
      },
    },
  },
  plugins: [],
}

