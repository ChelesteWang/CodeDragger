const app = require('./src/app')
// 导出 HTTP handler, koa 对象不可直接作为 HTTP handler, 需要调用 callback() 获取
module.exports = app.callback()
