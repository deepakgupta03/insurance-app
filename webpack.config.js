const path = require("path");
module.exports = {
  entry: {
    "bundle.js": [
      path.resolve(__dirname, "dist/insurance-app/polyfills.js"),
      path.resolve(__dirname, "dist/insurance-app/styles.css"),
      path.resolve(__dirname, "dist/insurance-app/main.js"),
    ],
  },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};