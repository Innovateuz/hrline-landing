/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366F1",
          50: "#EEF0FF",
          100: "#E0E3FF",
          200: "#C4C9FF",
          300: "#A5ABFF",
          400: "#8B8FFA",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#292766",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          deep: "#6D28D9",
        },
        ink: {
          DEFAULT: "#0F1017",
          soft: "#1C1D2A",
          muted: "#3A3B4A",
        },
        mist: {
          DEFAULT: "#F7F8FC",
          100: "#F1F2F8",
          200: "#E7E9F2",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        h2: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        glass: "0 1px 1px rgba(255,255,255,0.6) inset, 0 20px 50px -20px rgba(79,70,229,0.25)",
        float: "0 30px 80px -30px rgba(30,27,75,0.35)",
        glow: "0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px -15px rgba(99,102,241,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(1.5deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        scan: "scan 2.6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};
