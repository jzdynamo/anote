module.exports = {
  entry: {
    app: './web/main.jsx',
  },
  output: {
    path: './web/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
    ]
  }
};
