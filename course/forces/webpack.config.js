const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
		publicPath: "build/"
	},
	mode: "development",
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js%/,
				exclude: /node_modules/,
				query: {
					presets: ["es2015"]	
				}
			}
		],	
	}
}
