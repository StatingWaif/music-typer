const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const textRouter = require("./textRouter");
const statisticsRouter = require("./statisticsRouter");

router.use("/user", userRouter);
router.use("/statistics", statisticsRouter);
router.use("/text", textRouter);

module.exports = router;
