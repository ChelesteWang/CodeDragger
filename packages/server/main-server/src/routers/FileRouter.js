const Router = require('@koa/router');
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router =new Router({prefix:'/file'});
const fileController = require('../controllers/FileController');
//解析上传文件
const multer = require("@koa/multer");
const upload = multer();

router.post('/upload',upload.single('file'),fileController.upload);
router.post('/delete', fileController.delete);



module.exports = router;
