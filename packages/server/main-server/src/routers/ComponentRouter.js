const Router = require('@koa/router')
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = new Router({ prefix: '/component' })
const ComponentController = require('../controllers/ComponentController')

router.get('/list_all', ComponentController.listAll)
router.get('/find/:id', ComponentController.findByID)
router.post('/create', ComponentController.create)
router.delete('/delete/:id', ComponentController.delete)
router.put('/update/:id', ComponentController.updateOne)

module.exports = router
