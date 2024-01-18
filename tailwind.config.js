const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#e3eceb',
        'text': '#772867',
        'content': '#b66487',
        'primary': '#130505',
        'secondary': '#868b92',
        'grey':"#6a6d72"
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.custom-size': {
          height: '50%',
          width: '75%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
