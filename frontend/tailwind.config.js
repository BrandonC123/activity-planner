/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,jsx,tsx}",
        "./src/pages/**/*.{js,jsx,tsx}",
        "./public/**/*.html",
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "landing-page": "url('/src/img/bg.png')",
            },
            translate: {
                "vert-cent": "transform: translateY(-50%)",
            },
        },
    },
    plugins: [],
};
