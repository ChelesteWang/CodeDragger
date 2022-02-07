const JsonSchemaService = require('../services/JsonSchemaService')
const UserService = require('../services/UserService')

/**
 * JsonSchemaController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * jsonSchema 控制
 */
class JsonSchemaController {
  /**
   * 列出所有JsonSchema
   * 响应格式
   * {
   *   list: [JsonSchema1, JsonSchema2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async listAll(ctx) {
    const result = await JsonSchemaService.listAll()
    ctx.body = { result }
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
    const { info: user } = await UserService.current(ctx)
    const result = await JsonSchemaService.findByUser(user)
    ctx.body = { result }
  }
  /**
   * 列出所有JsonSchema
   * 响应格式
   * {
   *   list: [JsonSchema1, JsonSchema2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async findByID(ctx) {
    const id = ctx.params.id
    const result = await JsonSchemaService.findByID(id)
    ctx.body = { result }
  }

  /**
   * 创建一条JsonSchema
   * 传 name，jsonSchema，携带token
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async create(ctx) {
    const { name, jsonSchema } = ctx.request.body
    const { info: user } = await UserService.current(ctx)
    const result = await JsonSchemaService.create({ name, jsonSchema, user })
    ctx.body = { result }
  }

  /**
   * 删除一条JsonSchema
   * 传 name，jsonSchema，携带token
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async delete(ctx) {
    const id = ctx.params.id
    const { info: user } = await UserService.current(ctx)
    const { info: data } = await JsonSchemaService.findByID(id)

    if (data.user._id !== user._id) {
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
   * 传 name，jsonSchema，携带token
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async updateOne(ctx) {
    const id = ctx.params.id
    const { updater } = ctx.request.body
    const { info: user } = await UserService.current(ctx)
    const { info: data } = await JsonSchemaService.findByID(id)
    if (data.user._id !== user._id) {
      const error = new Error(`Insufficient permissions`)
      error.status = 403
      throw error
    }
    updater.user = user
    const result = await JsonSchemaService.updateOne(id, updater)
    ctx.body = { result }
  }
}

// 导出 Controller 的实例
module.exports = new JsonSchemaController()
