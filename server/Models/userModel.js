const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);

module.exports = User;