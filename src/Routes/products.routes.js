const { Router } = require("express");

const {
  getAllProducts,
  createProduct,
} = require("../Controllers/products.controllers");

const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);

module.exports = router;
