const isProd = process.env.NODE_ENV === 'production';

const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');

const nextConfig = {
	assetPrefix: isProd ? 'https://hkacgmemes.github.io/gif-switch-meme-gen/' : '',
};

module.exports = withImages(withCSS(withSass(nextConfig)));