const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$|\.scss|\.sass/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              modules: true,
              includePaths: ["absolute/path/a", "absolute/path/b"],
              localIdentName: "[name]__[local]___[hash:base64:5]",
              implementation: require("sass")
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
};
