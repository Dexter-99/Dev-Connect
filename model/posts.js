const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema([
  {
    postBody: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UsersDevConnect"
    }
  }
]);
module.exports = mongoose.model("PostDevConnect", postSchema);
