let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let emailRequestSchema = new Schema({
  id: String,
  name: String,
  email: String,
  message: String,
  date: Date,
});

let EmailRequest = mongoose.model("EmailRequest", emailRequestSchema, "email-requests");

module.exports = { EmailRequest };
