const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const profile = require("../model/profile");
router.get("/", isAuthenticated, (req, res) => {
  res.render("createprofile");
});
router.post("/", isAuthenticated, (req, res) => {
  const newProfile = {
    user: req.user.id,
    professionalstatus: req.body.professionalstatus,
    organization: req.body.organization,
    website: req.body.website,
    location: req.body.location,
    skills: req.body.skills,
    githubhandle: req.body.githubhandle,
    bio: req.body.bio,
    twitter: req.body.twitter,
    facebook: req.body.facebook,
    youtube: req.body.youtube,
    linkedin: req.body.linkedin,
    instagram: req.body.instagram
  };
  new profile(newProfile)
    .save()
    .then(item => {
      res.redirect("/dashboard");
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
module.exports = router;
