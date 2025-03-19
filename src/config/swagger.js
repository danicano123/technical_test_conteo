import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const swaggerFilePath = path.resolve("src/config/swagger.json"); // Ruta absoluta al JSON
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, "utf8"));

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log("📄 Swagger docs available at http://localhost:3000/api-docs");
};

export default setupSwagger;