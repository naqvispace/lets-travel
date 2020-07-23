let mongoose = require("mongoose");
let schema = mongoose.Schema;

let emailSchema = new schema({
  id: String,
  name: String,
  email: String,
  message: String,
  date: Date,
});

let email = mongoose.model("email", emailSchema, "emails");

module.exports = { email };
