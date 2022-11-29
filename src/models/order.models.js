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
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Order;
