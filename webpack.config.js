const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack =  require('webpack');


module.exports = {
  entry: {
      'app':'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase:'./dist',
    hot:true
},
  module:{
      rules: [
          {
              test:/\.css$/,
              use:[
                  'style-loader',
                  'css-loader'
              ]
          },//css
          {
              test:/\.(png|svg|jpg|gif)$/,
              use:[
                  'file-loader'
              ]
          },//picture

      ]
  },
  devtool: 'inline-source-map',
  
  plugins : [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title:'My hello'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

  ],
};