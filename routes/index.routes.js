const router = require("express").Router();
const mainRouter = require("./main.routes");
const answerRouter = require('./answers.routes')

router.use("/", mainRouter);
router.use('/answers', answerRouter)
module.exports = router;
