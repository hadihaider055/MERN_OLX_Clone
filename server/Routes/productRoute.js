const express = require("express");
const {
  getAllProducts,
  createProduct,
  findProductById,
} = require("../Controllers/productCtrl");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/create").post(createProduct);
router.route("/get/:id").get(findProductById);

module.exports = router;
