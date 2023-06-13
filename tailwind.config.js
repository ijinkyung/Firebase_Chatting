module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screen: {
      xl: '1280px',
    },
    colors: {
      DarkBlue: '#7895B2',
      LightBlue: '#AEBDCA',
      DarkBeige: '#E8DFCA',
      LightBeige: '#F5EFE6',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
