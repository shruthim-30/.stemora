/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // The original site switches to its mobile layout at 900px
    screens: { sm: "640px", md: "901px", lg: "1100px" },
    extend: {
      colors: {
        navy: "#0D2136",
        teal: "#1FAFA9",
        tealD: "#0F7F7B",
        gold: "#F2AA1F",
        paper: "#F7FAFB",
        grid: "#DCE8EB",
        mut: "#4d6275",
        slate: "#3b5a76",
        mist: "#c6d4e0",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      borderWidth: { 3: "3px", 2.5: "2.5px" },
      boxShadow: {
        hard: "4px 4px 0 #0D2136",
        hard5: "5px 5px 0 #0D2136",
        hard6: "6px 6px 0 #0D2136",
        hard8: "8px 8px 0 #0D2136",
        dash: "8px 8px 0 #1FAFA9",
      },
    },
  },
  plugins: [],
};
