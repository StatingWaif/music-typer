const { Sequelize } = require("sequelize");
const pg = require("pg");

let sslConfig = {};
if (process.env.NODE_ENV === "prod") {
  sslConfig = {
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  };
}

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    dialectModule: pg,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    ...sslConfig,
  }
);
