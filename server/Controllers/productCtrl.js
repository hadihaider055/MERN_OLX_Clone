const Product = require("../Models/productModel");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      category,
      adTitle,
      description,
      price,
      images,
      address,
      name,
      phoneNumber,
      featured,
    } = req.body;
    const newProduct = await Product.create({
      category,
      adTitle,
      description,
      price,
      images,
      address,
      name,
      phoneNumber,
      featured,
    });
    await newProduct.save();
    return res.status(201).json({ message: "Product created successfully!" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Find product by id
const findProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  findProductById,
};
