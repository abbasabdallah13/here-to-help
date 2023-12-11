import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-one': '#3939AC',
        'primary-gray': '#D9D9D9',
        'blue-gray': '#9696C5',
        'dark-gray': '#909090',
        'logo-yellow': '#C4A60B'
      },
      fontFamily: {
        'monda': 'Monda',
        'mogra': 'Mogra',
        'monteserrat': 'Montserrat Variable',
        'moulpali': 'Moulpali'
      },
      screens: {
        '2xl': '1800px',
        '2400': '2400px',
        '4k': '2560px'
      }
    },
  },
  plugins: [],
}
export default config
