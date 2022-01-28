const UserService = require('../services/UserService')

/**
 * UserController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * 用户信息的增删改查、登录注册功能
 */
class UserController {
  /**
   * 路由:/api/user/current
   * 获取当前用户信息,未登录返回 undefined
   * 请求不需要携带其他参数，只需要token
   * @param ctx
   * @return {Promise<any>}
   */
  async current(ctx) {
    const result = await UserService.current(ctx)
    ctx.body = { result }
  }
  /**
   * 路由:/api/user/register
   * 通过用户名密码注册
   * 请求参数需要携带 username(用户名)必选  password(密码)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async register(ctx) {
    const { username, password } = ctx.request.body
    const result = await UserService.register(ctx, username, password)
    ctx.body = { result }
  }

  /**
   * 路由:/api/user/login_password
   * 通过用户名密码登录
   * 请求参数需要携带 username(用户名)必选  password(密码)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async loginByPassword(ctx) {
    const { username, password } = ctx.request.body

    const result = await UserService.loginByPassword(ctx, username, password)
    ctx.body = { result }
  }

  /**
   * 路由:/api/user/login_phone
   * 通过手机号码登录或注册，未注册的手机号则是注册并登录，已注册手机号为登录
   * 请求参数需要携带 phoneNumber(手机号码)必选  code(验证码)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async loginByPhone(ctx) {
    const { phoneNumber, code } = ctx.request.body
    const result = await UserService.loginByPhone(ctx, phoneNumber, code)
    ctx.body = { result }
  }
  /**
   * 路由:/api/user/send_sms
   * 发送验证码
   * 请求参数需要携带 phoneNumber(手机号码)必选   opts(选项)这个可选
   * @param ctx
   * @return {Promise<any>}
   */
  async sendSMS(ctx) {
    const { phoneNumber, opts = {} } = ctx.request.body
    const result = await UserService.sendSMS(ctx, phoneNumber, opts)
    ctx.body = { result }
  }

  /**
   * 路由:/api/user/change_password
   * 修改密码
   * 请求参数需要携带 newPassword(新密码)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async changePassword(ctx) {
    const { newPassword } = ctx.request.body
    const result = await UserService.changePassword(ctx, newPassword)
    ctx.body = { result }
  }

  /**
   * 路由:/api/user/user_update
   * 修改用户信息
   * 请求参数需要携带 user(用户对象) 可添加任何值
   * @param ctx
   * @return {Promise<any>}
   */
  async updateOne(ctx) {
    const { user } = ctx.request.body
    const result = await UserService.updateOne(ctx, user)
    ctx.body = { result }
  }

  /**
   * 路由:/api/user/logout
   * 登出
   * 请求不需要携带其他参数，只需要token
   * @param ctx
   * @return {Promise<any>}
   */
  async logout(ctx) {
    const result = await UserService.logout(ctx)
    ctx.body = { result }
  }
}

// 导出 Controller 的实例
module.exports = new UserController()
