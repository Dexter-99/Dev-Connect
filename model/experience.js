const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const experienceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  from: {
    type: Date
  },
  to: {
    type: Date,
    default: Date.now()
  },

  description: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("experiencedev", experienceSchema);
