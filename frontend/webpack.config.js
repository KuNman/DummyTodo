const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'prod'),
    port: 3000,
    hot: true,
    historyApiFallback: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: {
    index: path.join(__dirname, 'src/index.tsx')
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'prod'),
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    }),
  ],

  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],

    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components|prod)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            targets: {
              esmodules: true,
            },
          }
        }
      }
    ]
  }
}
