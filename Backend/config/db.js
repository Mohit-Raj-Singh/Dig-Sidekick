const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl="mongodb+srv://mohit94e:mohit-raj@cluster0.hr8uzjr.mongodb.net/"

const connection = mongoose.connect(mongoUrl);

module.exports = {
  connection,
};