const Router = require('@koa/router')
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = new Router({ prefix: '/user' })
const userController = require('../controllers/UserController')

router.post('/register', userController.register)
router.get('/current', userController.current)
router.post('/login_password', userController.loginByPassword)
router.post('/login_phone', userController.loginByPhone)
router.post('/send_sms', userController.sendSMS)
router.put('/logout', userController.logout)
router.put('/change_password', userController.changePassword)
router.put('/user_update', userController.updateOne)

module.exports = router
