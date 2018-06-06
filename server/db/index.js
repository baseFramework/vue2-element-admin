"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('navi', 'root', '12345678', {
    host: 'localhost',
    port:'3306',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
  

/**
 * Sequelize orm 数据库初始化
 */
module.exports = function() {
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
    return sequelize
}