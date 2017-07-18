const Koa = require('koa')
// import koaWebpack from 'koa-webpack'
// const koaWebpack = require('koa-webpack')
// const devWebpack = require('./build/webpack.dev.conf')

const app = new Koa()

// app.use(koaWebpack({
//   config: devWebpack
// }))
app.use(ctx => {
  ctx.body = 'Hello koa2!'
})
// app.listen(3000)

module.exports = app
