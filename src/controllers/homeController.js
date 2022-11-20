const pokemonModel = require('../models/pokemonModels');

exports.GetHome = (req, res, next) => {
  pokemonModel.findAll().then((result) => {
    const pokemons = result.map((result) => result.dataValues);
    res.render('home', {
      pageTitle: 'Pokedex',
      title: 'Pokedex',
      hasPokemon: pokemons.length > 0,
      pokemons: pokemons,
    });
  });
};
