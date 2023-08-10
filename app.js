let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Post = require("./models/post.model").Post;
let multer = require("multer");
let uniqid = require("uniqid");

mongoose.connect("mongodb://127.0.0.1:27017/travels");
app.use(express.json());
let imageStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/img"),
  filename: (req, file, cb) => cb(null, file.originalname),
});
app.use(multer({ storage: imageStorage }).single("imageFile"));

app.get("/posts", async (req, res) => {
  let posts = await Post.find();
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  let reqBody = req.body;
  let imgPath;
  if (reqBody.imageURL) {
    imgPath = reqBody.imageURL;
  } else {
    imgPath = req.file.path.substring(req.file.path.indexOf("\\"), req.file.path.length);
  }
  let newPost = new Post({
    id: uniqid(),
    title: reqBody.title,
    date: new Date(),
    description: reqBody.description,
    text: reqBody.text,
    country: reqBody.country,
    imageURL: imgPath,
  });
  await newPost.save();
  res.send("New Post Created");
});

app.use(express.static("public"));

app.listen(3000, () => console.log("Listening on port 3000..."));
