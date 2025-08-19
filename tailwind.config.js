// tailwind.config.js
module.exports = {
  content: [
    "./index.html",             // Vite root HTML file
    "./src/**/*.{js,ts,jsx,tsx}" // All React/Vite source files
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  };
  