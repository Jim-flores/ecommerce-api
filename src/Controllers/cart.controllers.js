const CartService = require("../Services/cart.services");
require("dotenv").config();

const getUserProduct = async (req, res, next) => {
  try {
    const { id } = res.locals.user_info;
    const result = await CartService.findOne(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getUserProductAvailables = async (req, res, next) => {
  try {
    const { id } = res.locals.user_info;
    const result = await CartService.findAll(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = res.locals.user_info;
    const result = await CartService.add(data, id);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Cantidad no disponible" });
    }
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};
const getMyCart = async (req, res, next) => {
  try {
    const { id } = res.locals.user_info;
    const result = await CartService.findAllProductsInCart(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const purcharseCart = async (req, res, next) => {
  try {
    const { id } = res.locals.user_info;
    const { status } = req.body;
    const result = await CartService.purcharseCart(id, status);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "Algo salio mal con la autenticación",
      status: 401,
      errorContent: error,
    });
  }
};

const getOrder = async (req, res, next) => {
  try {
    const { id } = res.locals.user_info;
    const result = await CartService.findMyOrder(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserProduct,
  getUserProductAvailables,
  addProductToCart,
  getMyCart,
  purcharseCart,
  getOrder,
};
