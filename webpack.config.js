const path = require("path");
module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    // ローカルのサーバーが参照するディレクトリ
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/, //.tsが拡張子で終わるファイルをコンパイル・テスト対象とする
        loader: "ts-loader",
      },
    ],
  },
};
