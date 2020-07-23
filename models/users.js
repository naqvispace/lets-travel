let mongoose = require("mongoose");
let schema = mongoose.Schema;

let userSchema = new schema({
  email: String,
  password: String,
});

let Users = mongoose.model("Users", userSchema, "users");

module.exports = { Users };
