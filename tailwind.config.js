/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins',
      },
      maxWidth: {
        sm: '577px',
        '3xl': '1743px',
        77: '301px',
      },
      width: {
        '45079/50000': '90.158%',
        90: '357px',
        77: '301px',
        830: '830px',
      },
      height: {
        15: '60px',
        141: '564px',
        320: '320px',
        323: '323px',
        1500: '1500px',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        lg: '10px',
      },
      colors: {
        'regal-blue': '#1597E4',
        grey: '#7A7A7A',
        alert: '#D86161',
        lightwhite: '#DADEDF',
      },
      gap: {
        21: '83.118px',
      },
      padding: {
        30: '30px',
        44: '44.882px',
        49: '49px',
        85: '85px',
      },
    },
  },
  plugins: [],
};
