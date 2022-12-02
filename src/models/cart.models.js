const db = require("../utils/database");

const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     cart:
 *       type: object
 *       properties:
 *         total_price:
 *           type: string
 *           example: Tv
 *         status:
 *           type: string
 *           example: "awaiting"
 */

const Cart = db.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total_price: {
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
module.exports = Cart;
