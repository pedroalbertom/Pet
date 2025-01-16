// file responsible to configure the connection to the database

const { Sequelize } = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  timezone: "-03:00",
  logging: false,
  port: 3306,
  define: {
    createdAt: false,
    updatedAt: false
  }
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;