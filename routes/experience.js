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

router.get("/data", isAuthenticated, (req, res) => {
  exp
    .find({ user: req.user.id })
    .then(item => {
      res.send(item);
    })
    .catch(() => res.status(500).send("Server Error"));
});
router.get("/data/:id", (req, res) => {
  exp
    .find({
      user: req.params.id
    })
    .then(item => {
      console.log(item);
      res.send(item);
    });
});
module.exports = router;
