let express = require("express");
let app = express();
let mongoose = require("mongoose");
let multer = require("multer");
let postsRouter = require("./routes/posts");
let callbackrequestrouter = require("./routes/callback-request");
let emailRouter = require("./routes/email");
let userRouter = require("./routes/users");
let Post = require("./models/posts").Post;
let cookieparser = require("cookie-parser");
let auth = require("./controllers/auth");

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/travel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
let imageStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/images"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

app.use(multer({ storage: imageStorage }).single("imageFile"));

app.use(express.static("public"));
app.use(cookieparser());

app.use("/posts", postsRouter);
app.use("/callback-request", callbackrequestrouter);
app.use("/email", emailRouter);
app.use("/users", userRouter);

app.get("/sight", async (req, resp) => {
  let id = req.query.id;
  let post = await Post.findOne({ id: id });
  resp.render("sight", {
    title: post.title,
    imageURL: post.imageURL,
    date: post.date,
    text: post.text,
  });
});

app.get("/admin", (req, resp) => {
  let token = req.cookies["auth_token"];
  if (token && auth.verifyToken(token)) {
    resp.render("admin");
  } else {
    resp.redirect("/login");
  }
});
app.get("/login", (req, resp) => {
  resp.render("login");
});

app.listen(3000, () => console.log("listening 3000..."));
