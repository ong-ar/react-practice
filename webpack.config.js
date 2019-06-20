const path = require("path");

module.exports = {
  name: "react-practice",
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["./client"]
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // preset == plugins
          plugins: []
        }
        // jsx 파일은 babel-loader
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/"
  } // 출력
};
