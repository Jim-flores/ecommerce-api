const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Order = db.define(
  "order",
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
module.exports = Order;
