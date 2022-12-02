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

/**
 * @openapi
 * /api/v1/cart/user/addProduct:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add a product into cart
 *     tags: [Cart]
 *     requestBody:
 *       description: You need a name and quanity of a product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/productInCart"
 *     responses:
 *       201:
 *         description: Product Added into Cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/productAdded"
 * /api/v1/cart/user/myCart:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products in my Cart
 *     tags: [Cart]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/myCart"
 *     responses:
 *       200:
 *         description: Product that the user has into the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/myCart"
 * /api/v1/cart/user/purcharse:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Purcharse the products that i hace in a cart
 *     tags: [Purcharse]
 *     requestBody:
 *       description: You need a status purcharsed
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/purcharse"
 *     responses:
 *       201:
 *         description: Status of the cart changes to PURCHASED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/purcharse"
 * /api/v1/cart/user/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get orders
 *     tags: [Purcharse]
 *     description: You need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/orders"
 *     responses:
 *       201:
 *         description: Status of the cart changes to PURCHASED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/orders"
 */

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
