const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const ProductInOrder = db.define(
  "productInOrder",
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
module.exports = ProductInOrder;
