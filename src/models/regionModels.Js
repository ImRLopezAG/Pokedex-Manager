const Sequelize = require('sequelize');

const sequelize = require('../data/database.js').sequelize;

const Region = sequelize.define('region', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Region;
