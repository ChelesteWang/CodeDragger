// 导出 Service 的实例
const componentTable = require('../models/ComponentTable')
const inspirecloud = require('@byteinspire/api')
const ObjectId = inspirecloud.db.ObjectId

/**
 *  ComponentService
 * Service 是业务具体实现，由 Controller 或其它 Service 调用
 * 提供component的数据库操作功能
 */

class ComponentService {
  /**
   * 列出所有component
   * @return {Promise<{success:Boolean,list:Array<any>}>}
   */
  async listAll() {
    const list = await componentTable.where().find()
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
    const info = await componentTable.where({ _id: ObjectId(id) }).findOne()
    if (!info) {
      const error = new Error(`component:${id} not found`)
      error.status = 404
      throw error
    }
    return {
      success: true,
      info
    }
  }

  /**
   * 创建一条component
   * @param component 用于创建component的数据，原样存进数据库
   * @return {Promise<any>} 返回实际插入数据库的数据，会增加_id，createdAt和updatedAt字段
   */
  async create(component) {
    const info = await componentTable.save(component)
    return {
      success: true,
      info
    }
  }

  /**
   * 删除一条component
   * @param id component的 _id
   * 若不存在，则抛出 404 错误
   */
  async delete(id) {
    const result = await componentTable.where({ _id: ObjectId(id) }).delete()
    if (result.deletedCount === 0) {
      const error = new Error(`component:${id} not found`)
      error.status = 404
      throw error
    }
  }

  /**
   * 删除所有component
   */
  async deleteAll() {
    await componentTable.where().delete()
  }

  /**
   * 更新一条component
   * @param id component的 _id
   * @param updater 将会用原对象 merge 此对象进行更新
   * 若不存在，则抛出 404 错误
   */
  async updateOne(id, updater) {
    const component = await componentTable
      .where({ _id: ObjectId(id) })
      .findOne()
    if (!component) {
      const error = new Error(`component:${id} not found`)
      error.status = 404
      throw error
    }
    Object.assign(component, updater)
    return await componentTable.save(component)
  }
  /**
   * 更新一条component数据
   * @param id component的 _id
   * @param updater 将会用原对象 merge 此对象进行更新
   * 若不存在，则抛出 404 错误
   */
  async updateJsonSchema(id, updater) {
    const component = await componentTable
      .where({ _id: ObjectId(id) })
      .findOne()
    if (!component) {
      const error = new Error(`component:${id} not found`)
      error.status = 404
      throw error
    }
    component.jsonSchema = Object.assign(component.jsonSchema, updater)
    return await componentTable.save(component)
  }
}

// 导出 Service 的实例
module.exports = new ComponentService()
