const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;

router.get("/", isAuthenticated, (req, res) => {
  res.render("experience");
});
module.exports = router;
