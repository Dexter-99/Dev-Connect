const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;

router.get("/", isAuthenticated, (req, res) => {
  res.render("post");
});
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
