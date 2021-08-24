module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    // No need while using "jit" mode.
    // variants: {
    //     extend: {
    //         backgroundColor: ["disabled", "focus", "active"],
    //         backgroundBlendMode: ["hover", "focus", "active"],
    //         textColor: ["disabled"],
    //         opacity: ["active", "disabled"],
    //         cursor: ["disabled", "hover", "focus"],
    //     },
    // },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require("tailwindcss-children"),
    ],
};
