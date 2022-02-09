const Router = require('@koa/router')
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = new Router({ prefix: '/json_schema' })
const JsonSchemaController = require('../controllers/JsonSchemaController')

router.get('/list_all', JsonSchemaController.listAll)
router.get('/find_by_user', JsonSchemaController.findByUser)
router.get('/find/:id', JsonSchemaController.findByID)
router.post('/create', JsonSchemaController.create)
router.delete('/delete/:id', JsonSchemaController.delete)
router.put('/update/:id', JsonSchemaController.updateOne)
router.put('/update_jsonschema/:id', JsonSchemaController.updateJsonSchema)

module.exports = router
