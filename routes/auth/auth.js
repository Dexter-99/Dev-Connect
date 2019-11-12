const router = require("express").Router();
const passport = require("passport");
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/dashboard");
  }
);
router.get("/verify", (req, res) => {
  if (req.user) res.send(req.user + " Yes You Are Logged In");
  else res.send("No You Are Not Logged In");
});
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
router.post("/", (req, res) => {});
module.exports = router;
