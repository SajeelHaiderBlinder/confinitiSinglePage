/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary_purple: "#8351a1",
      secondary_purple: "#be92d8",
      primary_pink: "#bf00c3",
      secondary_pink: "#efbdf0",
      yellow_shade: "#fcf8ca",
      white: "#ffffff",
      black_shade: "#1e1e1e",
      light_black_shade: "#4d4d4d",
      grey_shade: "#cfcfcf",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      animation: {
        bounce: "bounce 0.5s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
        },
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
