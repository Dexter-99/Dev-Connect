const router = require("express").Router();
const mongoose = require("mongoose");
const education = require("../model/education");
const isAuthenticated = require("../config/auth").ensureAuthenticated;

const User = require("../model/User");
router.get("/", isAuthenticated, (req, res) => {
  res.render("education");
});
router.post("/", (req, res) => {
  const details = {
    school: req.body.school,
    field: req.body.field,
    degree: req.body.degree,
    from: req.body.from,
    to: req.body.to,
    achievements: req.body.achievements,
    user: req.user.id
  };
  User.findOne({
    _id: req.user.id
  }).then(item => {
    item.user = req.user.id;
    item.save();
  });
  new education(details).save().then(item => {
    res.redirect("/dashboard");
  });
});
router.get("/test", (req, res) => {
  education
    .findOne({
      school: "RLPS"
    })
    .populate("user")
    .then(item => {
      res.send(item);
    });
});
router.get("/data", (req, res) => {
  if (req.user) {
    education
      .findOne({
        user: req.user.id
      })
      .then(data => {
        res.send(data);
      });
  } else res.send("Baba Ji Ka Thullu");
});
router.get("/data/:id", isAuthenticated, (req, res) => {
  education
    .find({
      user: req.params.id
    })
    .then(item => {
      res.send(item);
    })
    .catch(err => res.send(err));
});
module.exports = router;
