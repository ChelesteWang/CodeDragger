const Router = require('@koa/router');
const router = new Router({prefix: '/api'})
const userRouter = require('./UserRouter');
const fileRouter = require('./FileRouter')

const JsonSchemaRouter = require('./JsonSchemaRouter')

router.use(userRouter.routes());
router.use(fileRouter.routes());
router.use(JsonSchemaRouter.routes());

module.exports = router;
