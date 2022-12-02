const express = require("express");
const initModels = require("./models/initModels");
const morgan = require("morgan");
const cors = require("cors");
const handleError = require("./middlewares/error");
const db = require("./utils/database");
const swaggerDocs = require("../swagger");
const userRoutes = require("./Routes/users.routes");
const transporter = require("./utils/mailer");

const productsRoutes = require("./Routes/products.routes");

const authRoutes = require("./Routes/auth.routes");

const cartRoutes = require("./Routes/cart.routes");

require("dotenv").config(); ////

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((err) => console.log(err));

db.sync({ force: false })
  .then(() => console.log("Base sincronizada"))
  .catch((err) => console.log(err));

transporter
  .verify()
  .then(() =>
    console.log("Estamos listos para enviar correos a diestra y siniestra")
  );

app.get("/", (req, res) => {
  res.status(200).json("Bienvenido al server");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", productsRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", cartRoutes);

app.use(handleError);

app.listen(
  PORT,
  () => console.log(`Server started at port ${PORT}`),
  swaggerDocs(app, PORT)
);
module.exports = app;
