const UserServices = require("../Services/products.services");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    console.log(newProduct);
    const result = await UserServices.add(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
