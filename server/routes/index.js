const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const textRouter = require("./textRouter");
const statisticsRouter = require("./statisticsRouter");
// const deviceRouter = require('./deviceRouter')
// const brandRouter = require('./brandRouter')
// const typeRouter = require('./typeRouter')

router.use("/user", userRouter);
router.use("/statistics", statisticsRouter);
router.use("/text", textRouter);
// router.use('/type', typeRouter)
// router.use('/brand', brandRouter)
// router.use('/device', deviceRouter)

module.exports = router;
