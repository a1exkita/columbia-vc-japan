module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    dark: "#111111",
                    border: "#333333",
                    text: "#8B8F97",
                },
                blue: {
                    highlight: "#35F3FF",
                    homeblue: "#358EFF",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Cormorant Garamond", "serif"],
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 1s ease-out",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
