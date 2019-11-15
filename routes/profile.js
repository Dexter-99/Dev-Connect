const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const profile = require("../model/profile");
router.get("/", isAuthenticated, (req, res) => {
  profile
    .findOne({
      user: req.user.id
    })
    .populate("user")
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
router.get("/:id", (req, res) => {
  profile
    .findOne({
      user: req.params.id
    })
    .populate("user")
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
router.get("/edit/:id", (req, res) => {
  profile.findOne({ _id: req.params.id }).then(item =>
    res.render("editprofile", {
      profile: item
    })
  );
});
router.put("/edit/:id", (req, res) => {
  profile
    .findOne({
      _id: req.params.id
    })
    .then(profile => {
      profile.user = req.user.id;
      profile.professionalstatus = req.body.professionalstatus;
      profile.organization = req.body.organization;
      profile.website = req.body.website;
      profile.location = req.body.location;
      profile.skills = req.body.skills;
      profile.githubhandle = req.body.githubhandle;
      profile.bio = req.body.bio;
      profile.twitter = req.body.twitter;
      profile.facebook = req.body.facebook;
      profile.youtube = req.body.youtube;
      profile.linkedin = req.body.linkedin;
      profile.instagram = req.body.instagram;
      profile.save().then(profile => {
        console.log(profile);
        res.redirect("/dashboard");
      });
    });
});
router.get("/skills/:id", (req, res) => {
  profile
    .findOne({ _id: req.params.id })
    .populate("user")
    .then(item => {
      let skills;
      skills = item.skills;
      let a = new Array();
      a = skills.split(",");
      res.send(a);
    });
});
router.delete("/:id", (req, res) => {
  profile
    .findOne({
      _id: req.params.id
    })
    .then(item => {
      item.remove().then(item => {
        console.log(item);

        res.redirect("/dashboard");
      });
    });
});
module.exports = router;
