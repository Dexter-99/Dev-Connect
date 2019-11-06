const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

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
  res.send("Hello");
});
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server Is Up On The Port ${port}`);
});
