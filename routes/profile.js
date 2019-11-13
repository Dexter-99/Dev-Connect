const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const profile = require("../model/profile");
router.get("/", isAuthenticated, (req, res) => {
  profile
    .findOne({
      user: req.user.id
    })
    .then(profile => {
      res.render("profile", {
        user: req.user,
        profile: profile
      });
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
