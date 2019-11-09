const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("developer");
});
module.exports = router;
