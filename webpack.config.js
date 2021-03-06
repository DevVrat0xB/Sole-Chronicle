const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(ttf|svg)$/,
        exclude: /node_modules/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + "/public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
