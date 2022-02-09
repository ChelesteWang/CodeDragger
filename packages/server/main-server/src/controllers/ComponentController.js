const ComponentService = require('../services/ComponentService')

/**
 * ComponentController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * Component 控制
 */
class ComponentController {
  /**
   * 列出所有JsonSchema
   * 响应格式
   * {
   *   list: [JsonSchema1, JsonSchema2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async listAll(ctx) {
    const result = await ComponentService.listAll()
    ctx.body = { result }
  }

  /**
   * 列出所有Component
   * 响应格式
   * {
   *   list: [Component1,Component2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async findByID(ctx) {
    const id = ctx.params.id
    const result = await ComponentService.findByID(id)
    ctx.body = { result }
  }

  /**
   * 创建一条Component
   * 传 name,jsonSchema,icon,key ,desc
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async create(ctx) {
    const { name, jsonSchema, icon, key, desc } = ctx.request.body
    const result = await ComponentService.create({
      name,
      jsonSchema,
      icon,
      key,
      desc
    })
    ctx.body = { result }
  }

  /**
   * 删除一条component
   *
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async delete(ctx) {
    const id = ctx.params.id
    await ComponentService.delete(id)
    ctx.body = { ok: true }
  }

  /**
   * 删除所有component
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async deleteAll(ctx) {
    await ComponentService.deleteAll()
    ctx.body = { ok: true }
  }

  /**
   * 更新component
   * 传 updater
   * 响应格式
   * {
   *   result: new component
   * }
   * Koa 的上下文参数
   */
  async updateOne(ctx) {
    const id = ctx.params.id
    const { updater } = ctx.request.body
    const result = await ComponentService.updateOne(id, updater)
    ctx.body = { result }
  }

  /**
   * 更新component的jsonSchema字段
   * 传 updater
   * 响应格式
   * {
   *   result: new JsonSchema
   * }
   * Koa 的上下文参数
   */
  async updateJsonSchema(ctx) {
    const id = ctx.params.id
    const { updater } = ctx.request.body
    const result = await ComponentService.updateJsonSchema(id, updater)
    ctx.body = { result }
  }
}

// 导出 Controller 的实例
module.exports = new ComponentController()
