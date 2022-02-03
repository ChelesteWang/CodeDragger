const inspirecloud = require('@byteinspire/api')

/**
 * 用户业务
 * Service 是业务具体实现，由 Controller 或其它 Service 调用
 * 提供用户系统服务
 */
class UserService {
  /**
   * 获取当前用户状态
   * @param ctx
   * @return {Promise<any>}
   */
  async current(ctx) {
    const info = await inspirecloud.user.current(ctx)
    if (!info) {
      const error = new Error('User not logged in')
      error.status = 401
      throw error
    }
    return {
      success: true,
      info
    }
  }

  /**
   * 通过密码注册
   * @return {Promise<any>}
   * @param ctx
   * @param username 用户名
   * @param password 密码
   */
  async register(ctx, username, password) {
    const info = await inspirecloud.user.register(ctx, username, password)

    return {
      success: true,
      info
    }
  }
  /**
   * 通过密码登录
   * @param ctx Koa 上下文
   * @param username 用户名
   * @param password 密码
   * @return {Promise<any>}
   */
  async loginByPassword(ctx, username, password) {
    const info = await inspirecloud.user.login(ctx, username, password)
    return {
      success: true,
      info
    }
  }

  /**
   * 发送短信验证码
   * @param ctx Koa 上下文
   * @param phoneNumber 手机号码
   * @param opts  对象 选项 可选 {region:CN(中国) or US(美国)}
   * @return {Promise<any>}
   */
  async sendSMS(ctx, phoneNumber, opts) {
    const info = await inspirecloud.user.sendSMS(ctx, phoneNumber, opts)
    return {
      success: true,
      info
    }
  }
  /**
   * 修改登录密码
   * @param ctx Koa 上下文
   * @param newPassword
   * @return {Promise<any>}
   */
  async changePassword(ctx, newPassword) {
    const info = await inspirecloud.user.changePassword(ctx, newPassword)
    return {
      success: true,
      info
    }
  }
  /**
   * 修改用户信息
   * @param ctx Koa 上下文
   * @param user 用户对象 用于信息更新 可增加用户表属性
   * @return {Promise<any>}
   */
  async updateOne(ctx, user) {
    const info = await inspirecloud.user.updateOne(ctx, user)
    return {
      success: true,
      info
    }
  }

  /**
   * 通过手机号码登录
   * @param ctx Koa 上下文
   * @param phoneNumber 手机号码
   * @param code 验证码
   * @return {Promise<any>}
   */
  async loginByPhone(ctx, phoneNumber, code) {
    const info = await inspirecloud.user.loginByPhone(ctx, phoneNumber, code)
    return {
      success: true,
      info
    }
  }

  /**
   * 登出
   * @return {Promise<any>} 返回实际插入数据库的数据，会增加_id，createdAt和updatedAt字段
   * @param ctx
   */
  async logout(ctx) {
    const data = await inspirecloud.user.logout(ctx)
    return {
      success: true,
      data
    }
  }
}
// 导出 Service 的实例
module.exports = new UserService()
