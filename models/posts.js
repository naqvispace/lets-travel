let mongoose = require("mongoose");
let schema = mongoose.Schema;

let postSchema = new schema({
  id: String,
  title: String,
  descripition: String,
  date: Date,
  text: String,
  country: String,
  imageURL: String,
});

let Post = mongoose.model("Post", postSchema);

module.exports = { Post };
