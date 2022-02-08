const fileService = require('../services/FileService')
const fs = require('fs')
const { basename } = require('path')

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
   *  路由:/api/file/delete/:id
   * 删除文件
   * @param ctx
   * @return {Promise<any>}
   */
  async delete(ctx) {
    const id = ctx.params.id
    const result = await fileService.delete(ctx, id)
    ctx.body = { result }
  }

  /**
   *  路由:/api/file/:id
   * 下载文件
   * 返回文件流
   * @param ctx
   * @return {Promise<any>}
   */
  async download(ctx) {
    const id = ctx.params.id
    const result = await fileService.download(ctx, id)
    const filename = basename(result.filePath)
    ctx.set('Content-Disposition', `attachment;fileName=${filename}`)
    ctx.body = fs.createReadStream(result.filePath)
  }

  /**
   *  路由:/api/file/content/:id
   * 获取文件内容
   * 返回文件内容
   * @param ctx
   * @return {Promise<any>}
   */
  async getContent(ctx) {
    const id = ctx.params.id
    const { filePath } = await fileService.download(ctx, id)
    const content = fs.readFileSync(filePath).toString('utf8')
    ctx.body = {
      success: true,
      content
    }
  }
}

// 导出 Controller 的实例
module.exports = new FileController()
