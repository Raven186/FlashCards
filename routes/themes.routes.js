const router = require("express").Router();
const { Theme } = require("../db/models");
const ThemePage = require("../components/ThemePage");

router.get("/", async (req, res) => {
  try {
    const html = res.renderComponent(ThemePage, { title: "Users page" });
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

module.exports = router;
