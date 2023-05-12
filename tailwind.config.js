/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./slides/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
                serif: [...defaultTheme.fontFamily.serif],
                mono: [...defaultTheme.fontFamily.mono],
            },
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                        "blockquote p:first-of-type::before": {
                            content: "",
                        },
                        "blockquote p:last-of-type::after": {
                            content: "",
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
