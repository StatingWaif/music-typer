const Router = require("express");
const router = new Router();
const statisticsController = require("../controllers/statisticsController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware, statisticsController.add);
router.get("/getAll", authMiddleware, statisticsController.getAll);

module.exports = router;
