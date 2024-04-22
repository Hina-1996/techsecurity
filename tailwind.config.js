module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx}',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '2000px', // Corrected from 'large' to '2xl'
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Corrected font-family syntax
      },
      backgroundImage: {
        'cctv': "url('/resources/assets/images/cctv.jpg')",
        'control': "url('/resources/assets/images/controla.jpg')",
        'solar': "url('/resources/assets/images/solara.jpg')",
        'carpark': "url('/resources/assets/images/carpark.jpg')",
        'lock': "url('/resources/assets/images/lock.jpg')",
        'services': "url('/resources/assets/images/services.jpg')",
        'barriers': "url('/resources/assets/images/barriers.jpg')",
        'servicesnew': "url('/resources/assets/images/servicesnew.jpg')",
        'partners': "url('/resources/assets/images/partners.jpg')",
      },
      colors: {
        reddish: '#F54632',
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1rem',
    },
  },
  plugins: [],
}
