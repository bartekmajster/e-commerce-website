const Path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/scripts/index.js')
	},
	output: {
		path: Path.join(__dirname, '../build'),
		filename: 'js/[name].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			{from: Path.resolve(__dirname, '../public'), to: 'public'}
		]),
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, '../src/index.html')
		})
	],
	resolve: {
		modules: [Path.resolve(__dirname, '../src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			reducers: Path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				}/*,
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}*/
				]
			}
		]
	}
};
