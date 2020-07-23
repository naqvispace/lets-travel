let emailSchemaPath = require("../models/emails").email;
let express = require("express");
let uniqid = require("uniqid");
let router = express.Router();

let authMiddleware = require("../middelware/auth");

router.get("/", authMiddleware, async (req, resp) => {
  let emails = await emailSchemaPath.find();
  resp.send(emails);
});
router.post("/", async (req, resp) => {
  let reqbody = req.body;
  let newEmail = new emailSchemaPath({
    id: uniqid(),
    name: reqbody.name,

    email: reqbody.email,
    message: reqbody.message,
    date: new Date(),
  });
  await newEmail.save();
  resp.send("Accepted");
});
router.delete("/:id", authMiddleware, async (req, resp) => {
  let emailid = req.params.id;
  await emailSchemaPath.deleteOne({ id: emailid });
  resp.send("deleted");
});

module.exports = router;
