const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const webpackBaseConfig = require('./webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
	entry: {
    app: path.resolve(__dirname, '..', 'src/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
      'immutable'
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  },

	plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  
    new ExtractTextPlugin('[name].[chunkhash:8].css'), 
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash:8].js'
    }),

    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
	]
})