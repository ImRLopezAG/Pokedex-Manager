const Sequelize = require('sequelize');

const sequelize = require('../data/database.js').sequelize;
const Pokemon = sequelize.define('pokemon', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  pokemonId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Type2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Region: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Pokemon;
