const inspirecloud = require('@byteinspire/api')

/**
 * 文件系统
 * Service 是业务具体实现，由 Controller 或其它 Service 调用
 * 提供文件的上传、删除服务
 */
class FileService {
  /**
   * 上传文件
   * @param ctx
   * @param file
   * @return {Promise<any>}
   */
  async upload(ctx, file) {
    // 通过 inspirecloud.fileStorage.upload 接口实现上传
    const { id, url } = await inspirecloud.file.upload(file.name, file.buffer)
    return {
      success: true,
      id,
      url
    }
  }

  /**
   * 删除文件
   * @param ctx
   * @param id
   * @return {Promise<any>}
   */
  async delete(ctx, id) {
    return await inspirecloud.file.delete(id)
  }

  /**
   * 下载文件
   * @param ctx
   * @param id
   * @return {Promise<any>}
   */
  async download(ctx, id) {
    const { filePath } = await inspirecloud.file.download(id, {
      directory: '/tmp/download'
    })
    return {
      success: true,
      filePath
    }
  }
}

// 导出 Service 的实例
module.exports = new FileService()
