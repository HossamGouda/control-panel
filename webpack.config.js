var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    "assets/js/banner": "./src/assets/js/banner.js",
    "assets/js/chart": "./src/assets/js/chart.js",
    "assets/js/tabs": "./src/assets/js/tabs.js",
    "assets/js/upload": "./src/assets/js/upload.js",
  },
  output: {
    path: path.join(__dirname, "/app"),
    publicPath: "/",
    filename: "[name].js",
  },


  stats: "errors-only",

  devServer: {
    static: {
      directory: path.join(__dirname, " /app"),
    },

    compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /fonts/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /images/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["app", "assets/js/banner", "assets/js/tabs", "assets/js/chart"],
    }),

    new HtmlWebpackPlugin({
      filename: "add-product.html",
      template: "./src/add-product.html",
      chunks: ["app", "assets/js/upload"],
    }),

    new HtmlWebpackPlugin({
      filename: "add-user.html",
      template: "./src/add-user.html",
      chunks: ["app", "assets/js/upload"],
    }),

    new HtmlWebpackPlugin({
      filename: "orders.html",
      template: "./src/orders.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "products.html",
      template: "./src/products.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "users.html",
      template: "./src/users.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/actions.html",
      template: "./src/components/actions.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/banner.html",
      template: "./src/components/banner.html",
      chunks: ["app", "assets/js/banner"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/button.html",
      template: "./src/components/button.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/card.html",
      template: "./src/components/card.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/chart.html",
      template: "./src/components/chart.html",
      chunks: ["app", "assets/js/chart"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/help.html",
      template: "./src/components/help.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/list.html",
      template: "./src/components/list.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/sidebar.html",
      template: "./src/components/sidebar.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/summary.html",
      template: "./src/components/summary.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/table.html",
      template: "./src/components/table.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/tabs.html",
      template: "./src/components/tabs.html",
      chunks: ["app", "assets/js/tabs"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/textfield.html",
      template: "./src/components/textfield.html",
      chunks: ["app"],
    }),

    new HtmlWebpackPlugin({
      filename: "components/upload.html",
      template: "./src/components/upload.html",
      chunks: ["app", "assets/js/upload"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/sidebar.html"),
      location: "sidebar",
      template_filename: [
        "index.html",
        "add-user.html",
        "add-product.html",
        "orders.html",
        "products.html",
        "users.html",
      ],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/help.html"),
      location: "help",
      template_filename: [
        "index.html",
        "add-user.html",
        "add-product.html",
        "orders.html",
        "products.html",
        "users.html",
      ],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/banner.html"),
      location: "banner",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/chart.html"),
      location: "chart",
      template_filename: ["index.html"],
    }),

    new MiniCssExtractPlugin({filename: "assets/css/styles.css"}),

    new OptimizeCSSAssetsPlugin({}),
  ],
};
