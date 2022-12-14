const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/user.models");
const Product = require("../models/product.models");

initModels();

const users = [
  { user_name: "Jim", email: "j1mer0528@gmail.com", password: "1234" },
  { user_name: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { user_name: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const products = [
  {
    name: "TV",
    price: "1000",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2018295640229/2018295640229_2.jpg",
    user_id: 1,
    status: "awaiting",
  },
  {
    name: "SmartPhone",
    price: "400",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2065300885212/2065300885212_2.jpg",
    user_id: 2,
    status: "awaiting",
  },
  {
    name: "XBOX",
    price: "300",
    availableQty: 5,
    image:
      "https://assets.xboxservices.com/assets/ef/9e/ef9e8f9f-4141-409c-9bab-659102bcc6b2.jpg?n=XSX_Page-Hero-0_768x1434.jpg",
    user_id: 3,
    status: "awaiting",
  },
  {
    name: "Laptop",
    price: "1200",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2004284813163/2004284813163-1.jpg",
    user_id: 3,
    status: "awaiting",
  },
  {
    name: "SmartWatch",
    price: "100",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2065287656560/2065287656560-2.jpg",
    user_id: 3,
    status: "awaiting",
  },
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando plantación");

    users.forEach(async (user) => await Users.create(user));
    setTimeout(() => {
      products.forEach(async (prod) => await Product.create(prod));
    }, 100);
    // setTimeout(() => {
    //   products.forEach(async (product) => await Product.create(product));
    // }, 100);
    // setTimeout(() => {
    //   categories.forEach((category) => Categories.create(category));
    // }, 200);
    // setTimeout(() => {
    //   tasks.forEach((task) => Tasks.create(task));
    // }, 300);
    // setTimeout(() => {
    //   tc.forEach((t) => TaskCategories.create(t));
    // }, 400);
  })
  .catch((err) => console.log(err));
