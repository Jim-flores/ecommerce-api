const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserProduct,
  getUserProductAvailables,
  addProductToCart,
  getMyCart,
  purcharseCart,
  getOrder,
} = require("../Controllers/cart.controllers");

const router = Router();

router.get("/cart/user/myProducts", authenticate, getUserProduct);
router.get(
  "/cart/user/productsAvailables",
  authenticate,
  getUserProductAvailables
);
router.post("/cart/user/addProduct", authenticate, addProductToCart);
router.get("/cart/user/myCart", authenticate, getMyCart);
router.post("/cart/user/purcharse", authenticate, purcharseCart);
router.get("/cart/user/orders", authenticate, getOrder);

module.exports = router;
