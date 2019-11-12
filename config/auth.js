module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) return next();
    req.flash("error_msg", "Not Authorized Please Log In To Continue");
    res.redirect("/");
  }
};
