const Router = require('@koa/router')

const router = new Router({ prefix: '/file' })
const fileController = require('../controllers/FileController')
//解析上传文件
const multer = require('@koa/multer')
const upload = multer()

router.post('/upload', upload.single('file'), fileController.upload)
router.post('/delete', fileController.delete)
router.post('/download', fileController.download)
// router.get('/compile', fileController.compile)

module.exports = router
