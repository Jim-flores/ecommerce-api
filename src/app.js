const express = require("express");
const initModels = require("./models/initModels");
const morgan = require("morgan");
const cors = require("cors");
const handleError = require("./middlewares/error");
const db = require("./utils/database");

const userRoutes = require("./Routes/users.routes");

const productsRoutes = require("./Routes/products.routes");

const authRoutes = require("./Routes/auth.routes");

// const videoRoutes = require("./Routes/videos.routes");
// eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5AZ21haWwuY29tIiwiaWQiOjQsImlhdCI6MTY2OTgzMDc5NX0.r2gevjIqCksQEANXqAbzgXj6OODvUS0Cjs1802SUdqYPfAt-_iOw88mZ9FQkqht6UeIRdNmvokeg8HIUz8KvGQ
// const categoryRoutes = require("./Routes/categories.routes");

require("dotenv").config();

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

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", productsRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
