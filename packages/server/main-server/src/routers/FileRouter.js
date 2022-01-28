const Router = require('@koa/router')

const router = new Router({ prefix: '/file' })
const fileController = require('../controllers/FileController')
//解析上传文件
const multer = require('@koa/multer')
const upload = multer()

router.get('/:id', fileController.download)
router.get('/getContent/:id', fileController.getContent)
router.post('/upload', upload.single('file'), fileController.upload)
router.delete('/delete', fileController.delete)
// router.get('/compile', fileController.compile)

module.exports = router
