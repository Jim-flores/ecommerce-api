const Product = require("../models/product.models");
const User = require("../models/user.models");
const { Op } = require("sequelize");
class UserServices {
  static async getAll() {
    try {
      const result = await Product.findAll({
        where: { availableQty: { [Op.gt]: 0 } },
        attributes: ["name", "price", "availableQty", "image", "status"],
        include: [
          {
            model: User,
            attributes: ["user_name"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newProduct) {
    try {
      const result = await Product.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;
