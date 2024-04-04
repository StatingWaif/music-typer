require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const models = require("./models/models");
const router = require("./routes/index");
const cors = require("cors");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
