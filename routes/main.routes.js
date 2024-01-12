const router = require("express").Router();
const MainPage = require("../components/MainPage");
const { Theme, User, Question } = require("../db/models");
const ThemePage = require("../components/ThemePage");
const QuestionPage = require("../components/QuestionPage");



router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ order: [['id', 'DESC']] });
    const themes = await Theme.findAll({ order: [['id', 'ASC']] })
    const html = res.renderComponent(MainPage, { title: "Main page", user, themes });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }

});


router.get("/:themeId", async (req, res) => {
  try {
    const { themeId } = req.params;
    const theme = await Theme.findOne({ where: { id: themeId } });
    const html = res.renderComponent(ThemePage, {
      title: "Themes page",
      theme,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});


router.get("/:themeId/:questionId", async (req, res) => {
  try {
    const { themeId, questionId } = req.params;
    const theme = await Theme.findOne({ where: { id: themeId } });
    const question = await Question.findOne({ where: { theme_id: themeId, id: questionId } })
    const html = res.renderComponent(QuestionPage, {
      title: "Themes page",
      theme,
      question,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});




module.exports = router;
