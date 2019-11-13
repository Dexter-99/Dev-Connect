const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsersDevConnect",
    require: true
  },
  professionalstatus: {
    type: String,
    default: "Front-End Developer"
  },
  organization: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  githubhandle: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  youtube: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  }
});
module.exports = mongoose.model("profiledev", profileSchema);
