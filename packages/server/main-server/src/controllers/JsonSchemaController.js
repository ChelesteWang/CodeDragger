
const JsonSchemaService = require('../services/JsonSchemaService');
const UserService = require('../services/UserService');

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
        const list = await JsonSchemaService.listAll();
        ctx.body = {list};
    }

    /**
     * 创建一条JsonSchema
     * 响应格式
     * {
     *   result: new JsonSchema
     * }
     * Koa 的上下文参数
     */
    async create(ctx) {
        const {name,json} = ctx.request.body;
        const  { info:user }=await UserService.current(ctx);
        const result = await JsonSchemaService.create({name,json,user });
        ctx.body = {result};
    }

    /**
     * 删除一条JsonSchema
     * 响应格式
     * {
     *   ok: true
     * }
     * @param ctx Koa 的上下文参数
     */
    async delete(ctx) {
        await JsonSchemaService.delete(ctx.params.id);
        ctx.body = {ok: true};
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
        await JsonSchemaService.deleteAll();
        ctx.body = {ok: true};
    }


}

// 导出 Controller 的实例
module.exports = new JsonSchemaController();
