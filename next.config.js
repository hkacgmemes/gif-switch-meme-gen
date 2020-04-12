const isProd = process.env.NODE_ENV === 'production';

const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');

const nextConfig = {
	assetPrefix: isProd ? 'https://hkacgmemes.github.io/gif-switch-meme-gen/' : '',
	// webpack: function (config) {
	// 	config.module.rules.push({
	// 		test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
	// 		use: {
	// 		loader: 'url-loader',
	// 		  options: {
	// 		    limit: 100000,
	// 		    name: '[name].[ext]'
	// 		  }
	// 		}
	// 	})
	// 	return config
	// },
};

module.exports = withImages(withCSS(withSass(nextConfig)));