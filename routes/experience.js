const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const exp = require("../model/experience");
router.get("/", isAuthenticated, (req, res) => {
  res.render("experience");
});
router.post("/", (req, res) => {
  const newExp = {
    job: req.body.job,
    organization: req.body.organization,
    from: req.body.from,
    to: req.body.to,
    location: req.body.location,
    user: req.user.id,
    description: req.body.description
  };
  new exp(newExp).save().then(item => {
    res.send(item);
  });
});
module.exports = router;
