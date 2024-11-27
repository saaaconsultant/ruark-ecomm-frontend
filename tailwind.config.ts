import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],                  // Body text
        heading: ['"ITC Novarese"', 'serif'],               // Headings
        subheading: ['Montserrat', 'sans-serif'],           // Subheadings
        nav: ['Montserrat', 'sans-serif'],                  // Navigation
        button: ['"Avenir Next"', 'sans-serif'],           // Buttons
        productTitle:["Instrument Sans", 'sans-serif'],    // Product
      },
      
      animation: {
        marquee: 'marquee 0s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
