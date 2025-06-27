/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#0a192f',
        },
        secondary: {
          light: '#2563eb',
          dark: '#64ffda',
        },
        tertiary: {
          light: '#f1f5f9',
          dark: '#112240',
        },
        textPrimary: {
          light: '#1e293b',
          dark: '#e2e8f0',
        },
        textSecondary: {
          light: '#64748b',
          dark: '#94a3b8',
        },
        accent: {
          light: '#3b82f6',
          dark: '#38bdf8',
        },
      },
      boxShadow: {
        'custom': '0 0 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 