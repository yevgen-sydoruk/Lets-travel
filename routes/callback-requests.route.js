let express = require("express");
let router = express.Router();
let uniqid = require("uniqid");
const { CallbackRequest } = require("../models/callback-requests.model");
let authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware, async (req, res) => {
  res.send(await CallbackRequest.find());
});

router.post("/", async (req, res) => {
  let reqBody = req.body;
  let newRequest = new CallbackRequest({
    id: uniqid(),
    phoneNumber: reqBody.phoneNumber,
    date: new Date(),
  });
  await newRequest.save();
  res.send("Accepted");
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await CallbackRequest.deleteOne({
    id: req.params.id,
  });
  res.send("Deleted");
});

module.exports = router;
