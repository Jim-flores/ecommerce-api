const express = require("express");
const initModels = require("./models/initModels");

const db = require("./utils/database");

// const userRoutes = require("./Routes/users.routes");

// const courseRoutes = require("./Routes/courses.routes");

// const videoRoutes = require("./Routes/videos.routes");

// const categoryRoutes = require("./Routes/categories.routes");

require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((err) => console.log(err));

db.sync({ force: true })
  .then(() => console.log("Base sincronizada"))
  .catch((err) => console.log(err));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

// app.use("/api/v1", userRoutes);
// app.use("/api/v1", courseRoutes);
// app.use("/api/v1", videoRoutes);
// app.use("/api/v1", categoryRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
