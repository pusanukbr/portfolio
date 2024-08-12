/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    content: [
      './src/*.js',
      './src/*.jsx',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/**/*.html'
    ],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'bg': '#282C33',
      'primary': '#C778DD',
      'grey': '#ABB2BF',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '700',
    },
    extend: {
      translate: {
        '50': '-50%',
      }
    }
  },
  plugins: [],
}

