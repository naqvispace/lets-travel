let User = require("../models/users").Users;
let express = require("express");
let router = express.Router();
let bcrypt = require("bcrypt");
let auth = require("../controllers/auth");

router.post("/login", async (req, resp) => {
  let email = req.body.email;
  let password = req.body.password;
  let user = await User.find().where({ email: email });
  if (user.length > 0) {
    let comparisonResult = await bcrypt.compare(password, user[0].password);
    if (comparisonResult) {
      let token = auth.generateToken(user[0]);
      resp.cookie("auth_token", token);
      resp.send({
        redirectURL: "/admin",
      });
    } else {
      resp.status(400);
      resp.send("password not match");
    }
  } else {
    resp.send("Rejected");
  }
});

router.post("/register", async (req, resp) => {
  let email = req.body.email;
  let password = req.body.password;
  let user = await User.find().where({ email: email });
  let encryptpass = await bcrypt.hash(password, 12);
  if (user.length === 0) {
    let newUser = new User({
      email: email,
      password: encryptpass,
    });
    await newUser.save();
    resp.send("user added");
  } else {
    resp.send("user already registered");
  }
});

module.exports = router;
