import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "main-color": "#193e5b",
                "secondary-color": "#04edae",
                "accent-color": "#F7F6FB",
                "button-normal-color": "#E58310",
                "button-hover-color": "#CE7C1D",
            },
            fontFamily: {
                sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                sm: "0.5rem",
                md: "0.5rem",
                lg: "0.5rem",
                xl: "0.5rem",
                "2xl": "0",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
