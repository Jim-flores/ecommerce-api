const Cart = require("./cart.models");
const Order = require("./order.models");
const Product = require("./product.models");
const ProductInCart = require("./productInCart.models");
const ProductInOrder = require("./productInOrder.models");
const User = require("./user.models");

const initModels = () => {
  User.hasMany(Product, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  Product.belongsTo(User, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  Product.hasOne(ProductInCart, {
    foreignKey: {
      name: "product_id",
      allowNull: false,
    },
  });
  ProductInCart.belongsTo(Product, {
    foreignKey: {
      name: "product_id",
      allowNull: false,
    },
  });
  Cart.hasMany(ProductInCart, {
    foreignKey: {
      name: "cart_id",
      allowNull: false,
    },
  });
  ProductInCart.belongsTo(Cart, {
    foreignKey: {
      name: "cart_id",
      allowNull: false,
    },
  });
  Product.hasOne(ProductInOrder, {
    foreignKey: {
      name: "product_id",
      allowNull: false,
    },
  });
  ProductInOrder.belongsTo(Product, {
    foreignKey: {
      name: "product_id",
      allowNull: false,
    },
  });
  Order.hasMany(ProductInOrder, {
    foreignKey: {
      name: "order_id",
      allowNull: false,
    },
  });
  ProductInOrder.belongsTo(Order, {
    foreignKey: {
      name: "order_id",
      allowNull: false,
    },
  });
  User.hasMany(Order, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  Order.belongsTo(User, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  User.hasOne(Cart, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  Cart.belongsTo(User, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
};
module.exports = initModels;
