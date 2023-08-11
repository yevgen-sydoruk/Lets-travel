let express = require("express");
let app = express();
let mongoose = require("mongoose");
let postsRouter = require("./routes/posts.route");
let callbackRequestsRouter = require("./routes/callback-requests.route");
let multer = require("multer");

mongoose.connect("mongodb://127.0.0.1:27017/travels");
app.use(express.json());

let imageStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/img"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

app.use(multer({ storage: imageStorage }).single("imageFile"));

app.use(express.static("public"));
app.use("/posts", postsRouter);
app.use("/callback-requests", callbackRequestsRouter);

app.listen(3000, () => console.log("Listening on port 3000..."));
