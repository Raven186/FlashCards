require("@babel/register");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;

const indexRouter = require("./routes/index.routes");
const ssr = require("./middleware/ssr");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(ssr);

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Наш сервер использует ${PORT} порт`);
});
