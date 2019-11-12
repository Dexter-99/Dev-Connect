const router = require("express").Router();
const education = require("../model/education");
const isAuthenticated = require("../config/auth").ensureAuthenticated;
router.get("/", isAuthenticated, (req, res) => {
  // let educations;
  // education
  //   .findOne({
  //     user: req.user.id
  //   })
  //   .then(item => {
  //     educations = item;
  //   });
  // res.send(educations);
  res.render("dashboard");
});
module.exports = router;
