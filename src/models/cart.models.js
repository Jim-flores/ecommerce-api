const db = require("../utils/database");

const { DataTypes } = require("sequelize");

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
  },
  {
    timestamps: false,
  }
);
module.exports = Cart;
