console.log("ON WEBPACK", __dirname);
const path = require("path");
const sourcePath = path.join(__dirname, "src");

const config = {
  entry: path.resolve(sourcePath, "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  }
};
module.exports = config;
