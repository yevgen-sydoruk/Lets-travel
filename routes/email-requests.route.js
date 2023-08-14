let express = require("express");
let router = express.Router();
let uniqid = require("uniqid");
const { EmailRequest } = require("../models/email-requests.model");
let authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware, async (req, res) => {
  res.send(await EmailRequest.find());
});

router.post("/", async (req, res) => {
  let reqBody = req.body;
  let newEmail = new EmailRequest({
    id: uniqid(),
    name: reqBody.nameInput,
    email: reqBody.emailInput,
    message: reqBody.messageInput,
    date: new Date(),
  });
  await newEmail.save();
  res.send("Accepted");
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await EmailRequest.deleteOne({
    id: req.params.id,
  });
  res.send("deleted");
});

module.exports = router;
