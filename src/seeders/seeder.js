const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/user.models");
const Product = require("../models/product.models");

initModels();

const users = [
  { user_name: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
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
  },
  {
    name: "SmartPhone",
    price: "400",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2065300885212/2065300885212_2.jpg",
    user_id: 2,
  },
  {
    name: "XBOX",
    price: "300",
    availableQty: 5,
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fgamecentersac.com%2Fwp-content%2Fuploads%2F2021%2F08%2FGC00216-03.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=9144b792a55d1e8305244d1573d3a2f9",
    user_id: 2,
  },
  {
    name: "Laptop",
    price: "1200",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2004284813163/2004284813163-1.jpg",
    user_id: 3,
  },
  {
    name: "SmartWatch",
    price: "100",
    availableQty: 5,
    image:
      "https://home.ripley.com.pe/Attachment/WOP_5/2065287656560/2065287656560-2.jpg",
    user_id: 3,
  },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    products.forEach((product) => Product.create(product));
  }, 100);
  // setTimeout(() => {
  //   categories.forEach((category) => Categories.create(category));
  // }, 200);
  // setTimeout(() => {
  //   tasks.forEach((task) => Tasks.create(task));
  // }, 300);
  // setTimeout(() => {
  //   tc.forEach((t) => TaskCategories.create(t));
  // }, 400);
});
