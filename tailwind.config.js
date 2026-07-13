/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          text: "rgb(var(--color-brand-text) / <alpha-value>)",
          leather: "rgb(var(--color-brand-leather) / <alpha-value>)",
          terracotta: "rgb(var(--color-brand-terracotta) / <alpha-value>)",
          white: "rgb(var(--color-brand-white) / <alpha-value>)",
          offwhite: "rgb(var(--color-brand-offwhite) / <alpha-value>)",
          suede: "rgb(var(--color-brand-suede) / <alpha-value>)",
        },
        background: {
          clean: "rgb(var(--color-background-clean) / <alpha-value>)",
          deep: "rgb(var(--color-background-deep) / <alpha-value>)",
          institutional:
            "rgb(var(--color-background-institutional) / <alpha-value>)",
          neutral: "rgb(var(--color-background-neutral) / <alpha-value>)",
          cardDark: "rgb(var(--color-background-card-dark) / <alpha-value>)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        ui: ["var(--font-ui)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        structural: "0px",
        button: "4px",
        "button-lg": "8px",
      },
      borderColor: {
        stitch: "rgb(var(--color-brand-suede) / <alpha-value>)",
      },
      boxShadow: {
        soft: "rgba(27, 13, 7, 0.05) 0px 0px 30px 0px",
        cta: "rgba(212, 118, 59, 0.15) 0px 30px 60px 0px",
      },
      transitionDuration: {
        smooth: "300ms",
        reveal: "500ms",
      },
      transitionTimingFunction: {
        smooth: "ease-in-out",
      },
    },
  },
  plugins: [],
};
