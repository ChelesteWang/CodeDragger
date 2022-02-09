// 导出 Service 的实例
const jsonSchemaTable = require('../models/JsonSchemaTable')
const inspirecloud = require('@byteinspire/api')
const ObjectId = inspirecloud.db.ObjectId

/**
 *  JsonSchemaService
 * Service 是业务具体实现，由 Controller 或其它 Service 调用
 * 提供jsonSchema的数据库操作功能
 */

class JsonSchemaService {
  /**
   * 列出所有JsonSchema
   * @return {Promise<{success:Boolean,list:Array<any>}>}
   */
  async listAll() {
    const list = await jsonSchemaTable.where().find()
    return {
      success: true,
      list
    }
  }

  /**
   * 根据user查找
   * 若不存在，则抛出 404 错误
   * @param userID
   */
  async findByUser(userID) {
    const list = await jsonSchemaTable.where({ 'user._id': userID }).find()
    return {
      success: true,
      list
    }
  }

  /**
   * 根据id查找
   * 若不存在，则抛出 404 错误
   * @param id
   */
  async findByID(id) {
    const info = await jsonSchemaTable.where({ _id: ObjectId(id) }).findOne()
    if (!info) {
      const error = new Error(`jsonSchema:${id} not found`)
      error.status = 404
      throw error
    }
    return {
      success: true,
      info
    }
  }

  /**
   * 创建一条JsonSchema
   * @param jsonSchema 用于创建JsonSchema的数据，原样存进数据库
   * @return {Promise<any>} 返回实际插入数据库的数据，会增加_id，createdAt和updatedAt字段
   */
  async create(jsonSchema) {
    const info = await jsonSchemaTable.save(jsonSchema)
    return {
      success: true,
      info
    }
  }

  /**
   * 删除一条JsonSchema
   * @param id JsonSchema的 _id
   * 若不存在，则抛出 404 错误
   */
  async delete(id) {
    const result = await jsonSchemaTable.where({ _id: ObjectId(id) }).delete()
    if (result.deletedCount === 0) {
      const error = new Error(`jsonSchema:${id} not found`)
      error.status = 404
      throw error
    }
  }

  /**
   * 删除所有JsonSchema
   */
  async deleteAll() {
    await jsonSchemaTable.where().delete()
  }

  /**
   * 更新一条JsonSchema表数据
   * @param id JsonSchema的 _id
   * @param updater 将会用原对象 merge 此对象进行更新
   * 若不存在，则抛出 404 错误
   */
  async updateOne(id, updater) {
    const jsonSchema = await jsonSchemaTable
      .where({ _id: ObjectId(id) })
      .findOne()
    if (!jsonSchema) {
      const error = new Error(`jsonSchema:${id} not found`)
      error.status = 404
      throw error
    }
    Object.assign(jsonSchema, updater)
    return await jsonSchemaTable.save(jsonSchema)
  }
  /**
   * 更新一条JsonSchema字段
   * @param id JsonSchema的 _id
   * @param updater 将会用原对象 merge 此对象进行更新
   * 若不存在，则抛出 404 错误
   */
  async updateJsonSchema(id, updater) {
    const data = await jsonSchemaTable.where({ _id: ObjectId(id) }).findOne()
    if (!data) {
      const error = new Error(`jsonSchema:${id} not found`)
      error.status = 404
      throw error
    }
    data.jsonSchema = Object.assign(data.jsonSchema, updater)
    return await jsonSchemaTable.save(data)
  }
}

// 导出 Service 的实例
module.exports = new JsonSchemaService()
