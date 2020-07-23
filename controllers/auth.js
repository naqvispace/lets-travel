let jwt = require("jsonwebtoken");
let secret = "jhgfs567jh";
function generateToken(user) {
  let payload = {
    email: user.email,
    password: user.password,
  };
  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = { generateToken, verifyToken };
