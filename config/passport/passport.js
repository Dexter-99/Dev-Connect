const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../../model/User");
const keys = require("../keys/keys").google;
module.exports = passport => {
  passport.use(
    new googleStrategy(
      {
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        const image = profile.photos[0].value;
        const newUser = {
          googleID: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: image
        };
        //Checking If the user logged in exists in DB
        User.findOne({
          googleID: profile.id
        }).then(user => {
          if (user) return done(null, user);
          else {
            new User(newUser).save().then(user => {
              console.log(user);
              return done(null, user);
            });
          }
        });
      }
    )
  );
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
