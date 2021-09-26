const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    adTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    featured: {
      type: String,
      default: "false",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
