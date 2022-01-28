const fileService = require('../services/FileService')

/**
 * fileController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * 文件系统
 */
class FileController {
  /**
   * 路由:/api/file/upload
   * 上传单个文件
   * 请求头需要 'content-type': 'multipart/form-data'  formData: key=file value=上传的文件
   * @param ctx
   * @return {Promise<any>}
   */
  async upload(ctx) {
    const { originalname: name, buffer } = ctx.request.file
    const result = await fileService.upload(ctx, { name, buffer })
    ctx.body = { result }
  }
  /**
   *  路由:/api/file/delete
   * 删除文件
   * 请求参数需要携带 url(要删除文件的url)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async delete(ctx) {
    const { url } = ctx.request.body
    const result = await fileService.delete(ctx, url)
    ctx.body = { result }
  }
}

// 导出 Controller 的实例
module.exports = new FileController()
