const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

//Static Asset Middleware
app.use(express.static(path.join(__dirname, "public")));

//ROUTES Middlewares
//Index Route
app.use("/", require("./routes/welcome/welcome"));
//Login Page Route
app.use("/login", require("./routes/login/login"));
//Register Page Route
app.use("/register", require("./routes/register/register"));
//Developer Page Route
app.use("/developer", require("./routes/developer"));
//Dashboard Page Route
app.use("/dashboard", require("./routes/dashboard"));

//Express-Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
//Routes

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server Is Up On The Port ${port}`);
});
