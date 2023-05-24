/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'mm': '375px',
        // => @media (min-width: 768px) { ... }

        'ml': '425px',
        // => @media (min-width: 1024px) { ... }

        'md': '768px',
        // => @media (min-width: 1280px) { ... }

        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#00878A",
        secondary: "#E6F3F3",
        "primary-light": "#00878A",
        "primary-dark": "#004446",
        "btn-base": "#00888B",

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
