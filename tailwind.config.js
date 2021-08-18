module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ["disabled", "focus", "active"],
            backgroundBlendMode: ["hover", "focus", "active"],
            textColor: ["disabled"],
            opacity: ["active"],
            cursor: ["disabled", "hover", "focus"],
        },
    },
    plugins: [],
};
