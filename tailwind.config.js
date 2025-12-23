/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderBrandTertiary: "var(--sds-color-border-brand-tertiary)",
        buttonBrandDefault: "var(--sds-color-background-brand-default)",
        colorTextDefault: 'var(--sds-color-text-default-default)',
        colorTableHoverTertiary: "var(--sds-color-table-hover-tertiary)",
        colorTextDefaultSecondary: "var(--sds-color-text-default-secondary)"
      },
    },
  },
  plugins: [],
}