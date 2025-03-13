import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        wiggle2: {
          "0%, 100%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(0)" },
        }
        
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease forwards',
        fadeOutUp: 'fadeOutUp 1s ease forwards',
        wiggle: "wiggle 7s ease-in-out infinite", // Slow movement with easing
        wiggle2: "wiggle2 7s ease-in-out infinite", // Slow movement with easing
      },



    },
  },
  plugins: [],
} satisfies Config;
