/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1175px",
        xl: "1240px",
      },
    },
    colors: {
      body: "#000D38A1",
      black: "#000000",
      white: {
        DEFAULT: "#FFFFFF",
        secondary: "#F8F8F8",
      },
      light: "#F4F3FF",
      gray: {
        DEFAULT: "#4f4f4f",
        dark: "#000D38A1",
        light: "#F4F3FF",
      },
      primary: {
        DEFAULT: "#04055E",
        light: "#333388",
      },
      secondary: {
        light: "#DD1C1A26",
        DEFAULT: "#DD1C1A",
        dark: "#A31211",
      },

      transparent: "#00000000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      // sans: ["DM Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
