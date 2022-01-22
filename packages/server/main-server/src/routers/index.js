const Router = require('@koa/router');
const router = new Router({prefix: '/api'})
const userRouter = require('./UserRouter');
const fileRouter = require('./FileRouter')
router.use(userRouter.routes());
router.use(fileRouter.routes());


module.exports = router;
