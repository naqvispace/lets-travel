let mongoose = require("mongoose");
let schema = mongoose.Schema;

let callbackrequestschema = new schema({
  id: String,
  phoneNumber: Number,
  date: Date,
});

let callbackrequest = mongoose.model(
  "callbackrequest",
  callbackrequestschema,
  "callback-request"
);

module.exports = { callbackrequest };
