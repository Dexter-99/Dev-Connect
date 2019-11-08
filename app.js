const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

//Static Asset Middleware
app.use(express.static(path.join(__dirname, "public")));
//Express-Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
//Routes
app.get("/", (req, res) => {
  res.render("index");
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server Is Up On The Port ${port}`);
});
