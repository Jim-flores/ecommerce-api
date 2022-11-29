const db = require("../utils/database");

const { DataTypes } = require("sequelize");

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
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = ProductInCart;
