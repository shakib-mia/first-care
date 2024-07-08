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
        lg: "1000px",
        xl: "1240px",
      },
    },
    colors: {
      body: "#000D38A1",
      white: {
        DEFAULT: "#FFFFFF",
        secondary: "#F8F8F8",
      },
      light: "#F4F3FF",
      gray: "#4f4f4f",
      primary: {
        DEFAULT: "#04055E",
        light: "#333388",
      },
      secondary: {
        DEFAULT: "#DD1C1A",
        dark: "#A31211",
      },

      transparent: "#00000000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
