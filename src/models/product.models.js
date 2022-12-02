const db = require("../utils/database");

const { DataTypes } = require("sequelize");

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
