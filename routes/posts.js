const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const posts = require("../model/posts");
router.get("/", isAuthenticated, (req, res) => {
  posts
    .find({})
    .populate("user")
    .then(item => {
      console.log(item);
      res.render("posts", {
        posts: item
      });
    })
    .catch(() => {
      res.send("Database Error");
    });
});
router.post("/", isAuthenticated, (req, res) => {
  const newPost = {
    postBody: req.body.Post,
    user: req.user.id
  };
  new posts(newPost)
    .save()
    .then(item => {
      res.redirect("/post");
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
module.exports = router;
