const Koa = require('koa')
const router = require('./routes')
const app = new Koa()
const cors = require('@koa/cors')

app.use(cors())
app.use(async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    // 抛出的错误可以附带 status 字段，代表 http 状态码
    // 若没有提供，则默认状态码为 500，代表服务器内部错误
    console.log(err)
    ctx.status = err.status || 500
    ctx.body = {
      success: false,
      message: err.message
    }
  }
})

// 为应用使用路由定义
app.use(router.routes())


module.exports = app
