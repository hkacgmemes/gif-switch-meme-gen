module.exports = {
  sourceMap: true,
  plugins: [
    require('autoprefixer')({
      browsers: [
        "iOS >= 9",
        "Safari >= 9",
      ]
    })
  ]
}
