const { Router } = require("express");

const {
  getAllProducts,
  createProduct,
} = require("../Controllers/products.controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: Get all products from DB
 *     tags: [Products]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/product"
 *     responses:
 *       200:
 *         description: Ok
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
 *                     $ref: "#/components/schemas/product"
 *   post:
 *     summary: Register product with owner
 *     tags: [Products]
 *     requestBody:
 *       description: To register a new product you need a name, price, availableQty, image, status and user_id
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerProduct"
 *     responses:
 *       201:
 *         description: created
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
 *                     $ref: "#/components/schemas/registerProduct"
 */

router.get("/products", getAllProducts);
router.post("/products", createProduct);

module.exports = router;
