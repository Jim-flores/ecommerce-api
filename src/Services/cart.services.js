const { Op } = require("sequelize");
const Cart = require("../models/cart.models");
const Order = require("../models/order.models");
const Product = require("../models/product.models");
const ProductInCart = require("../models/productInCart.models");
const ProductInOrder = require("../models/productInOrder.models");
const User = require("../models/user.models");
const { getAll } = require("./products.services");
// users --> conversations

class cartServices {
  static async findOne(id) {
    try {
      const result = await User.findByPk(id, {
        attributes: ["user_name", "email"],
        include: {
          model: Product,
          where: { user_id: id },
          attributes: ["name", "price", "availableQty", "image"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async findAll(id) {
    try {
      const result = await User.findAll({
        attributes: ["user_name", "email"],
        include: {
          model: Product,
          where: { user_id: { [Op.ne]: id } },
          attributes: ["name", "price", "availableQty", "image"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(data, _id) {
    try {
      const { name, quantity } = data;
      const result = await Product.findOne({
        where: { name },
      });
      const { id, price, availableQty } = result;

      const cartCreated = await Cart.findOrCreate({
        where: { user_id: _id, status: "awaiting" },
        defaults: {
          total_price: 0,
          user_id: _id,
        },
      });
      const afterUpdatePrice = cartCreated[0].dataValues.total_price;
      //console.log(cartCreated[0].dataValues.total_price);
      const cartId = cartCreated[0].dataValues.id;
      // console.log(cartCreated[0].dataValues);
      const productAdded = await ProductInCart.create({
        quantity: quantity,
        price: price * quantity,
        status: "awaiting",
        product_id: id,
        cart_id: cartId,
      });

      const getPriceProduct = await Product.findOne({
        where: { id },
        attributes: ["id", "availableQty"],
      });
      if (getPriceProduct.availableQty <= 0) return false;

      await Product.update(
        { availableQty: getPriceProduct.availableQty - quantity },
        {
          where: { id: getPriceProduct.id },
        }
      );
      const updateCart = await Cart.update(
        {
          total_price:
            parseFloat(afterUpdatePrice) + parseFloat(productAdded.price),
        },
        {
          where: { id: cartId },
        }
      );
      console.log(afterUpdatePrice + productAdded.price);
      return productAdded;
    } catch (error) {
      throw error;
    }
  }
  static async findAllProductsInCart(id) {
    try {
      const cartId = await Cart.findAll({
        where: { user_id: id },
        attributes: ["total_price"],
        include: {
          model: ProductInCart,
          attributes: ["quantity", "price", "status"],
          include: {
            model: Product,
            attributes: ["name"],
          },
        },
      });
      return cartId;
    } catch (error) {
      throw error;
    }
  }
  static async purcharseCart(user_id, status) {
    try {
      const result = await Cart.update(
        { status },
        {
          where: { user_id },
        }
      );
      const getCart = await Cart.findOne({
        where: { user_id },
        attributes: { exclude: ["id"] },
        include: {
          model: ProductInCart,
          attributes: ["id", "price", "status", "quantity", "product_id"],
        },
      });

      const { id, total_price, productInCarts } = getCart.dataValues;
      const createOrder = await Order.create({
        user_id,
        total_price,
        status: "purchased",
      });
      const productsToCart = productInCarts.map((prod) => ({
        order_id: createOrder.id,
        product_id: prod.dataValues.product_id,
        price: prod.dataValues.price,
        quantity: prod.dataValues.quantity,
        status: "purchased",
      }));
      productsToCart.forEach(
        async (product) => await ProductInOrder.create(product)
      );
      await Cart.destroy({ where: { user_id } });
      return { status: "purchased" };
    } catch (error) {
      throw error;
    }
  }
  static async findMyOrder(id) {
    try {
      const result = await Order.findAll({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = cartServices;
