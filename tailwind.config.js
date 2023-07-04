/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          accent: '#14bf6d',
          dark: '#212529',
          light: '#f8f9fa',
          // Additional light theme colors
          success: '#00C853',
          warning: '#FFD600',
          error: '#FF1744',
          info: '#2979FF',
        },
        // Dark theme colors
        dark: {
          accent: '#14bf6d',
          dark: '#212529',
          light: '#f8f9fa',
          // Additional dark theme colors
          success: '#198754',
          warning: '#ffc107',
          error: '#dc3545',
          info: '#0dcaf0',
        },
      },
    },
  },
  plugins: [],
}