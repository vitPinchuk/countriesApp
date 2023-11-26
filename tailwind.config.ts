import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animation: {
      shimmer: 'shimmer 2s linear infinite forwards',
    },
    backgroundImage: {
      shimmer:
        'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    },
    keyframes: {
      shimmer:{
        '0%' : { "background-position": "-468px 0"},
        '100%': {"background-position": "468px 0"}
      },
    },
  },
  plugins: [],
}
export default config
