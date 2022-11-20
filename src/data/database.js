const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('pokemon', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});

exports.sequelize = sequelize;
