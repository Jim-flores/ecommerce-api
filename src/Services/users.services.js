const Users = require("../models/user.models");
class UserServices {
  static async getAll() {
    // select id, username, email from users;
    try {
      const result = await Users.findAll({
        attributes: ["id", "user_name", "email"],
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;
