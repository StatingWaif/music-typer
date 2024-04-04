const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const textController = require("../controllers/textController");
router.get("/popular", textController.getPopular);

module.exports = router;
