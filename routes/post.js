const router = require("express").Router();
const isAuthenticated = require("../config/auth").ensureAuthenticated;
const post = require("../model/posts");
const comment = require("../model/comment");
router.get("/", (req, res) => {
  res.redirect("/posts");
});
router.get("/:id", isAuthenticated, (req, res) => {
  post
    .findOne({
      _id: req.params.id
    })
    .populate("user")
    .then(item => {
      comment
        .find({ commentPost: req.params.id })
        .populate("commentPost")
        .populate("commentUser")
        .then(data => {
          console.log(data);
          res.render("post", {
            post: item,
            comments: data
          });
        });
    })
    .catch(() => {
      res.status(500).send("Server Error");
    });
});
router.post("/:id", (req, res) => {
  const newComment = {
    commentBody: req.body.comment,
    commentUser: req.user.id,
    commentPost: req.params.id,
    commentDate: Date.now()
  };
  new comment(newComment)
    .save()
    .then(item => {
      res.redirect(`/post/${req.params.id}`);
    })
    .catch(err => {
      res.send("Error Occured Contact Developer");
    });
});

module.exports = router;
