const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    role: { type: String, required: true },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };