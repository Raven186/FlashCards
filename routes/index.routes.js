const router = require("express").Router();
const mainRouter = require("./main.routes");
const themesRoutes = require("./themes.routes");

router.use("/", mainRouter);
router.use("/themes", themesRoutes);

module.exports = router;
