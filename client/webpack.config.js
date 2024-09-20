const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const configByMode = isDev
  ? { mode: "development", devtool: "inline-source-map" }
  : {};

module.exports = {
  ...configByMode,
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src", "Components"),
      "@themes": path.resolve(__dirname, "src", "themes"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", "css", "scss"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /(\.module\.css|\.module\.scss)$/i,
      },
      {
        test: /(\.module\.css|\.module\.scss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        exclude: /\.(png)$/,
        use: [{ loader: "@svgr/webpack" }],
      },
      {
        loader: require.resolve("file-loader"),
        exclude: /\.(js|mjs|jsx|ts|tsx|css|scss|html|json)$/,
        options: {
          name: "[name].[hash:8].[ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    host: "0.0.0.0",
    port: 3000,
    // open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    !isDev ? new MiniCssExtractPlugin() : undefined,
  ],
};
