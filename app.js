const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const passport = require("passport");
const keys = require("./config/keys/keys");
const mongoose = require("mongoose");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const flash = require("connect-flash");
const methodOverride = require("method-override");
//Passport Config File
require("./config/passport/passport")(passport);
const app = express();
app.use(methodOverride("_method"));
app.use(
  session({
    store: new fileStore(),
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//Set Global Variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.errors = req.flash("error_msg");
  next();
});
//Static Asset Middleware
app.use(express.static(path.join(__dirname, "public/")));
//Request Body Parser  Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
//Database Connection
mongoose.Promise = global.Promise;
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });
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
//Google Oauth
app.use("/auth", require("./routes/auth/auth"));
//Education
app.use("/education", require("./routes/education"));
//Posts Route
app.use("/post", require("./routes/post"));
//Create Profile Route
app.use("/createprofile", require("./routes/createprofile"));
//Get Posts Route
app.use("/posts", require("./routes/posts"));
//Profile Routes
app.use("/profile", require("./routes/profile"));
//experience Page Route
app.use("/experience", require("./routes/experience"));

//Express-Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server Is Up On The Port ${port}`);
});
