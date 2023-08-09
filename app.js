let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Post = require("./models/post.model").Post;

mongoose.connect("mongodb://127.0.0.1:27017/travels");

let post1 = new Post({
  id: "1",
  title: "Eiffel Tower",
  date: new Date(),
  description: "Some desc",
  text: "Some text",
  country: "France",
  imageURL: "/images/img-1.jpg",
});
post1.save().then(() => console.log("Saved."));

app.use(express.static("public"));

app.listen(3000, () => console.log("Listening on port 3000..."));
