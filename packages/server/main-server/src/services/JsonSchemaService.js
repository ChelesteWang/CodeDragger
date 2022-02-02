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
   * @return {Promise<Array<any>>} 返回JsonSchema数组
   */
  async listAll() {
    return await jsonSchemaTable.where().find()
  }

  /**
   * 根据user查找
   * 若不存在，则抛出 404 错误
   * @param user
   */
  async findByUser(user) {
    return await jsonSchemaTable
      .where({ user })
      .find()
  }

  /**
   * 根据id查找
   * 若不存在，则抛出 404 错误
   * @param id
   */
  async findByID(id) {
    return await jsonSchemaTable
      .where({ _id: ObjectId(id) })
      .findOne()
  }


  /**
   * 创建一条JsonSchema
   * @param jsonSchema 用于创建JsonSchema的数据，原样存进数据库
   * @return {Promise<any>} 返回实际插入数据库的数据，会增加_id，createdAt和updatedAt字段
   */
  async create(jsonSchema) {
    return await jsonSchemaTable.save(jsonSchema)
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
   * 更新一条JsonSchema
   * @param id JsonSchema的 _id
   * @param updater 将会用原对象 merge 此对象进行更新
   * 若不存在，则抛出 404 错误
   */
  async update(id, updater) {
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


}

// 导出 Service 的实例
module.exports = new JsonSchemaService()
