const db = require("../utils/database");

const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     productInCart:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Laptop
 *         quantity:
 *           type: number
 *           example: 1
 *     productAdded:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         quantity:
 *           type: number
 *           example: 1
 *         price:
 *           type: string
 *           example: 1200
 *         product_id:
 *           type: number
 *           example: 4
 *         cart_id:
 *           type: number
 *           example: 5
 *     myCart:
 *       type: object
 *       properties:
 *         total_price:
 *           type: string
 *           example: 1200
 *         productsInCarts:
 *           type: object
 *           properties:
 *             quantity:
 *               type: number
 *               example: 1
 *             price:
 *               type: number
 *               example: 1200
 *             status:
 *               type: string
 *               example: awaiting
 *             product:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Laptop
 *     orders:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         total_price:
 *           type: string
 *           example: 2400
 *         status:
 *           type: string
 *           example: purchased
 *         user_id:
 *           type: number
 *           example: 1
 *     purcharse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: purchased
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const ProductInCart = db.define(
  "productInCart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    status: {
      type: DataTypes.ENUM("awaiting", "purchased"),
      defaultValue: "awaiting",
    },
  },
  {
    timestamps: false,
  }
);
module.exports = ProductInCart;
