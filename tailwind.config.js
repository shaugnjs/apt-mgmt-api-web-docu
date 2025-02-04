/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#3B82F6',
          'secondary': '#1E293B',
        },
      },
    },
    plugins: [],
  }