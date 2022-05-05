const {Sequelize} = require("sequelize")
require('dotenv').config();
module.exports = new Sequelize(process.env.USER, process.env.DATABASE, process.env.PASSWORD, {
  host:process.env.HOST,
  ports: "3306",
  dialect: "mysql",
  poll: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});
