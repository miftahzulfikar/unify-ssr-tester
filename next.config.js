// next.config.js
const withTM = require("next-transpile-modules")([
  "unify-react-mobile",
  "unify-react-desktop",
  "unify-token",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["url-loader"],
    });

    return config;
  },
});
