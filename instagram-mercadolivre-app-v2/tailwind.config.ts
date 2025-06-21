import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Habilita a estratégia de classe para o modo escuro
  theme: {
    extend: {
      colors: {
        // Modo Claro
        'nude-light': '#F5F5DC',       // Bege como base clara
        'areia-light': '#F4A460',     // Areia para acentos
        'texto-base-light': '#333333', // Texto escuro sobre fundo claro

        // Modo Escuro
        'cinza-fundo-dark': '#1A1A1A', // Um cinza bem escuro para o fundo
        'cinza-elemento-dark': '#2D2D2D', // Um cinza para superfícies de elementos
        'nude-dark': '#D2B48C',        // Tan (pode ser um nude mais escuro ou areia)
        'areia-dark': '#A0522D',      // Sienna (um tom de areia/marrom mais escuro)
        'texto-base-dark': '#E0E0E0',  // Texto claro sobre fundo escuro
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
