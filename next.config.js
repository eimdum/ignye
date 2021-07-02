const ESLintPlugin = require("eslint-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.plugins.push(
                new ESLintPlugin({
                    files: "src/**/*.{js,jsx,json,ts,tsx}",
                    exclude: ["node_modules", ".next", "public"],
                    lintDirtyModulesOnly: true
                }),
                new ErrorOverlayPlugin(),
            );
        }

        return config;
    },
};
