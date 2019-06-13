const path = require("path");

module.exports = {
  name: "react-practice",
  mode: "development",
  devtool: "eval",
  entry: {}, // 입력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  } // 출력
};
