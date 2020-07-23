let callbackRequest = require("../models/callback-request").callbackrequest;
let uniqid = require("uniqid");
let express = require("express");
let router = express.Router();
let authMiddleware = require("../middelware/auth");

router.get("/", authMiddleware, async (req, resp) => {
  resp.send(await callbackRequest.find());
});
router.post("/", async (req, resp) => {
  let reqBody = req.body;
  let newRequest = new callbackRequest({
    id: uniqid(),
    phoneNumber: reqBody.phoneNumber,
    date: new Date(),
  });
  await newRequest.save();
  resp.send("Accepted");
});
router.delete("/:id", authMiddleware, async (req, resp) => {
  let id = req.params.id;

  await callbackRequest.deleteOne({ id: id });
  resp.send("Deleted");
});

module.exports = router;
