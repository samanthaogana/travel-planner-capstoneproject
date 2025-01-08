/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  media: false,
  theme: {
    extend: {
    fontFamily: {
      greatVibes: ["Great Vibes"],
      poppins: ["Poppins"]
    },
    colors: {
      yellowOrange: "#FFA500",
      mintBlue: "#3b8bd3",
      seaBlue: "#2A9B84",
      ghostWhite: "#f7f7f7"
    }
    }
  },
  plugins: [],
}

