const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("register");
});
module.exports = router;
router.post("/", (req, res) => {});
