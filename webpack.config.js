module.exports = {
	entry: __dirname + "/client/src/index.jsx",
	output: {
		path: __dirname + "/client/dist",
    filename: "bundle.js"
	},
	module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        // include: "./client/src/index.jsx",
        use: {
          loader: "babel-loader", 
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}