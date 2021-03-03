module.exports = {
  lintOnSave: false,
}

if (process.env.NODE_ENV === 'production') {
  module.exports.publicPath = '/todo-vuedue'
}
