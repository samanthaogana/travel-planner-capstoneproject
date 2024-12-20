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
      mintBlue: "#1b8a76"
    }
    }
  },
  plugins: [],
}

