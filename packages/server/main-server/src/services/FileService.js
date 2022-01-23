const inspirecloud = require('@byteinspire/api');

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
    async upload(ctx,file) {

        try {
            // 通过 inspirecloud.fileStorage.upload 接口实现上传
            const { url } = await inspirecloud.file.upload(file.name, file.buffer);
            return {
                success: true,
                url
            };
        } catch (e) {
            return {
                success: false,
                message: e.message
            };
        }
    }
    /**
     * 删除文件
     * @param ctx
     * @param url
     * @return {Promise<any>}
     */
    async delete(ctx,url) {

        try {
            const res = await inspirecloud.file.delete(url);
            return {
                success: true,
                res
            };
        } catch (e) {
            return {
                success: false,
                message: e.message
            };
        }
    }



}
// 导出 Service 的实例
module.exports = new FileService();
