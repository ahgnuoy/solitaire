const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
			}
		]
	},
	mode: "development"
};