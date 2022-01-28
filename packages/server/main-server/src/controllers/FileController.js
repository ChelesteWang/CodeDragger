const fileService = require('../services/FileService')
const fs = require('fs')
// const {build, compress} = require("@cdl-pkg/package-server");
// const {join} = require("path");
// const FileService = require("../services/FileService");
// const {v1} = require("uuid");

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

  /**
   *  路由:/api/file/download
   * 下载文件
   * 返回文件流
   * 请求参数需要携带 url(要下载文件的url)必选
   * @param ctx
   * @return {Promise<any>}
   */
  async download(ctx) {
    const { url } = ctx.request.body
    const result = await fileService.download(ctx, url)
    if (success) {
      const temp = result.filePath.split('\\')
      const filename = temp[temp.length - 1]
      ctx.set('filename', filename)
      ctx.body = fs.createReadStream(result.filePath)
    } else {
      ctx.body = { result }
    }
  }
  // /**
  //  *  路由:/api/file/compile
  //  * react文件编译
  //  *  返回url
  //  * @param ctx
  //  * @return {Promise<any>}
  //  */
  // async compile(ctx) {
  //   await build({outDir: '/tmp/dist'})
  //   const buffer = await compress(`${join(__dirname, '../../tmp/dist')}`)
  //   const {url} = await FileService.upload(ctx, {name: `${v1()}.tgz`, buffer})
  //   ctx.body = {url}
  // }
}

// 导出 Controller 的实例
module.exports = new FileController()
