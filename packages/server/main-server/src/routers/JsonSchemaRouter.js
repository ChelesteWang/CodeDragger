const Router = require('@koa/router');
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router =new Router({prefix:'/json_schema'});
const JsonSchemaController = require('../controllers/JsonSchemaController');


router.get('/', JsonSchemaController.listAll);
router.post('/', JsonSchemaController.create);
router.delete('/:id', JsonSchemaController.delete);
router.delete('/', JsonSchemaController.deleteAll);


module.exports = router;
