import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
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
            padding: "2rem",
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
