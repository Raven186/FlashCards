const router = require("express").Router();
const { Question } = require("../db/models");

router.post('/', async (req, res) => {
  try {
    const quest = await Question.findOne({ where: { id: req.body.question_id } })
    if (quest.answer === req.body.answer) {
      res.json({ message: 'Правильно!' })
    } else {
      res.json({ message: 'Не правильно!' })
    }
  } catch (error) {

  }
})

module.exports = router;