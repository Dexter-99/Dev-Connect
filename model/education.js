const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const educationSchema = new Schema({
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  field: {
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
  achievement: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersDevconnects"
  }
});
module.exports = mongoose.model("Deveducation", educationSchema);
