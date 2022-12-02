const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "Api de un ecommerce para la compra y venta de productos",
    },
  },
  apis: [
    "./src/Routes/users.routes.js",
    "./src/models/user.models.js",
    "./src/Routes/auth.routes.js",
    "./src/Routes/products.routes.js",
    "./src/models/product.models.js",
    "./src/Routes/cart.routes.js",
    "./src/models/cart.models.js",
    "./src/models/productInCart.models.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  //
  console.log(
    `Documentación disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
