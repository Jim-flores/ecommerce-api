const db = require("../utils/database");

const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tv
 *         price:
 *           type: string
 *           example: 1000
 *         availableQty:
 *           type: number
 *           example: 5
 *         image:
 *           type: string
 *           example: https://home.ripley.com.pe/Attachment/WOP_5/2018295640229/2018295640229_2.jpg
 *         status:
 *           type: string
 *           example: awaiting
 *         user_id:
 *           type: number
 *           example: 1
 *     registerProduct:
 *      type: object
 *      properties:
 *         name:
 *           type: string
 *           example: xbox
 *         price:
 *           type: string
 *           example: 700
 *         availableQty:
 *           type: number
 *           example: 10
 *         image:
 *           type: string
 *           example: https://assets.xboxservices.com/assets/d2/d4/d2d49e15-65ea-4e87-9d35-66123e183423.jpg?n=Cyberpunk-2077_Feature-0_XSX_767x628.jpg
 *         status:
 *           type: string
 *           example: awaiting
 *         user_id:
 *           type: number
 *           example: 1
 */

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      field: "image",
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

module.exports = Product;
