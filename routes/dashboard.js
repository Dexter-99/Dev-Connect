const router = require("express").Router();
const education = require("../model/education");
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const profile = require("../model/profile");
router.get("/", isAuthenticated, (req, res) => {
  profile
    .findOne({
      user: req.user.id
    })
    .then(item => {
      console.log(item);
      res.render("dashboard", {
        profile: item
      });
    });
});
module.exports = router;
