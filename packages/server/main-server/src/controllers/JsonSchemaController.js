const JsonSchemaService = require('../services/JsonSchemaService')
const UserService = require('../services/UserService')

/**
 * JsonSchemaController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * jsonSchema 控制
 */
class JsonSchemaController {


  /**
   * 根据token查找user
   * @return user
   * @param ctx Koa 的上下文参数
   */
  async checkUser(ctx) {
    const { info: user } = await UserService.current(ctx)
    if (!user) {
      const error = new Error(`user not find`)
      error.status = 401
      throw error
    }
    return user
  }

  /**
   * 列出所有JsonSchema
   * 响应格式
   * {
   *   list: [JsonSchema1, JsonSchema2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async listAll(ctx) {
    const list = await JsonSchemaService.listAll()
    ctx.body = { list }
  }

  /**
   * 列出所有JsonSchema
   * 响应格式
   * {
   *   list: [JsonSchema1, JsonSchema2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async findByUser(ctx) {
    const user = await this.checkUser(ctx)
    const list = await JsonSchemaService.findByUser(user)
    ctx.body = { list }
  }

  /**
   * 创建一条JsonSchema
   * 传 name，json，携带token
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async create(ctx) {
    const { name, json } = ctx.request.body
    const user = await this.checkUser(ctx)
    const result = await JsonSchemaService.create({ name, json, user })
    ctx.body = { result }
  }

  /**
   * 删除一条JsonSchema
   * 传 name，json，携带token
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async delete(ctx) {
    const id = ctx.params.id
    const user = this.checkUser(ctx)
    const jsonSchema = JsonSchemaService.findByID(id)
    if (jsonSchema.user !== user) {
      const error = new Error(`Insufficient permissions`)
      error.status = 403
      throw error
    }
    await JsonSchemaService.delete(id)
    ctx.body = { ok: true }
  }

  /**
   * 删除所有JsonSchema
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async deleteAll(ctx) {
    await JsonSchemaService.deleteAll()
    ctx.body = { ok: true }
  }


  /**
   * 更新json_schema
   * 传 name，json，携带token
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async update(ctx) {
    const id = ctx.params.id
    const { updater} = ctx.request.body
    const user = await this.checkUser(ctx)
    const jsonSchema = JsonSchemaService.findByID(id)
    if (jsonSchema.user !== user) {
      const error = new Error(`Insufficient permissions`)
      error.status = 403
      throw error
    }
    const result = await JsonSchemaService.update(id, updater)
    ctx.body = { result }
  }


}

// 导出 Controller 的实例
module.exports = new JsonSchemaController()
