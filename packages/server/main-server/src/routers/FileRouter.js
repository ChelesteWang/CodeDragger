const Router = require('@koa/router');
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router =new Router({prefix:'/file'});
const fileController = require('../controllers/FileController');
//解析上传文件
const multer = require("@koa/multer");
const {build, compress} = require("@cdl-pkg/package-server");
const {join} = require("path");
const upload = multer();
const FileService= require('../services/FileService')
router.post('/upload',upload.single('file'),fileController.upload);
router.post('/delete', fileController.delete);

router.get('/build', async (ctx) => {
    try {
        await build({outDir: '/tmp/dist'})
        const buffer = await compress(`${join(__dirname, '../../tmp/dist')}`)
        const {url} = await FileService.upload(ctx, {name: 'test2.tgz', buffer})
        ctx.body = {url}
    } catch (e) {
        ctx.body = e
    }
})


module.exports = router;
