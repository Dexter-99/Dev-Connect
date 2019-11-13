const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const User = require("../model/User");
const profile = require("../model/profile");
let profs = new Array();
router.get("/", isAuthenticated, (req, res) => {
  profile
    .find({})
    .populate("user")
    .then(item => {
      res.render("developer", { profile: item });
    });
});
module.exports = router;
