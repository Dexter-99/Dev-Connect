const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema([
  {
    commentBody: {
      type: String,
      required: true
    },
    commentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PostDevConnect",
      required: true
    },
    commentUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UsersDevConnect",
      required: true
    },
    commentDate: {
      type: Date,
      default: Date.now()
    }
  }
]);
module.exports = mongoose.model("commentDev", commentSchema);
