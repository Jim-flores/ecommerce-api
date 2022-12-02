const UserServices = require("../Services/users.services");
const transporter = require("../utils/mailer");
const welcomeTemplate = require("../templates/welcome");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
    transporter.sendMail({
      from: "<ian.rosas@academlo.com>",
      to: result.email,
      subject: "Bienvenido a la tienda Ecommerce",
      text: `Hola ${result.user_name} Bienvenido a mi Api Ecommerce`,
      html: welcomeTemplate(result.user_name),
    });
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
