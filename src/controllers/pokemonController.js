const { Op } = require('sequelize');
const Pokemon = require('../models/pokemonModels');

exports.GetNormalPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const normalPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Normal' || pokemon.Type2 === 'Normal';
    });
    normalPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: normalPokemons,
      pageTitle: 'Normal Pokemons',
      title: 'Normal',
      hasPokemon: normalPokemons.length > 0,
    });
  });
};
exports.GetFirePokemons = (req, res, next) => {
  Pokemon.findAll({ where: { Type: 'Fire' } }).then((pokemons) => {
    const firePokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Fire' || pokemon.Type2 === 'Fire';
    });
    firePokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: firePokemons,
      pageTitle: 'Fire Pokemons',
      title: 'Fire',
      hasPokemon: firePokemons.length > 0,
    });
  });
};
exports.GetWaterPokemons = (req, res, next) => {
  Pokemon.findAll({ where: { Type: 'Water' } }).then((pokemons) => {
    const waterPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Water' || pokemon.Type2 === 'Water';
    });
    waterPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: waterPokemons,
      pageTitle: 'Water Pokemons',
      title: 'Water',
      hasPokemon: waterPokemons.length > 0,
    });
  });
};
exports.GetGrassPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const grassPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Grass' || pokemon.Type2 === 'Grass';
    });
    grassPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: grassPokemons,
      pageTitle: 'Grass Pokemons',
      title: 'Grass',
      hasPokemon: grassPokemons.length > 0,
    });
  });
};
exports.GetElectricPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const electricPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Electric' || pokemon.Type2 === 'Electric';
    });
    electricPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: electricPokemons,
      pageTitle: 'Electric Pokemons',
      title: 'Electric',
      hasPokemon: electricPokemons.length > 0,
    });
  });
};
exports.GetIcePokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const icePokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Ice' || pokemon.Type2 === 'Ice';
    });
    icePokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: icePokemons,
      pageTitle: 'Ice Pokemons',
      title: 'Ice',
      hasPokemon: icePokemons.length > 0,
    });
  });
};
exports.GetFightingPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const fightingPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Fighting' || pokemon.Type2 === 'Fighting';
    });
    fightingPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: fightingPokemons,
      pageTitle: 'Fighting Pokemons',
      title: 'Fighting',
      hasPokemon: fightingPokemons.length > 0,
    });
  });
};
exports.GetPoisonPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const poisonPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Poison' || pokemon.Type2 === 'Poison';
    });
    poisonPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: poisonPokemons,
      pageTitle: 'Poison Pokemons',
      title: 'Poison',
      hasPokemon: poisonPokemons.length > 0,
    });
  });
};
exports.GetGroundPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const groundPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Ground' || pokemon.Type2 === 'Ground';
    });
    groundPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: groundPokemons,
      pageTitle: 'Ground Pokemons',
      title: 'Ground',
      hasPokemon: groundPokemons.length > 0,
    });
  });
};
exports.GetFlyingPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const flyingPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Flying' || pokemon.Type2 === 'Flying';
    });
    flyingPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: flyingPokemons,
      pageTitle: 'Flying Pokemons',
      title: 'Flying',
      hasPokemon: flyingPokemons.length > 0,
    });
  });
};
exports.GetPsychicPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const psychicPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Psychic' || pokemon.Type2 === 'Psychic';
    });
    psychicPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: psychicPokemons,
      pageTitle: 'Psychic Pokemons',
      title: 'Psychic',
      hasPokemon: psychicPokemons.length > 0,
    });
  });
};
exports.GetBugPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const bugPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Bug' || pokemon.Type2 === 'Bug';
    });
    bugPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: bugPokemons,
      pageTitle: 'Bug Pokemons',
      title: 'Bug',
      hasPokemon: bugPokemons.length > 0,
    });
  });
};
exports.GetRockPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const rockPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Rock' || pokemon.Type2 === 'Rock';
    });
    rockPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: rockPokemons,
      pageTitle: 'Rock Pokemons',
      title: 'Rock',
      hasPokemon: rockPokemons.length > 0,
    });
  });
};
exports.GetGhostPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const ghostPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Ghost' || pokemon.Type2 === 'Ghost';
    });
    ghostPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: ghostPokemons,
      pageTitle: 'Ghost Pokemons',
      title: 'Ghost',
      hasPokemon: ghostPokemons.length > 0,
    });
  });
};
exports.GetDragonPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const dragonPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Dragon' || pokemon.Type2 === 'Dragon';
    });
    dragonPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: dragonPokemons,
      pageTitle: 'Dragon Pokemons',
      title: 'Dragon',
      hasPokemon: dragonPokemons.length > 0,
    });
  });
};
exports.GetDarkPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const darkPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Dark' || pokemon.Type2 === 'Dark';
    });
    darkPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: darkPokemons,
      pageTitle: 'Dark Pokemons',
      title: 'Dark',
      hasPokemon: darkPokemons.length > 0,
    });
  });
};
exports.GetSteelPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const steelPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Steel' || pokemon.Type2 === 'Steel';
    });
    steelPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: steelPokemons,
      pageTitle: 'Steel Pokemons',
      title: ' Steel',
      hasPokemon: steelPokemons.length > 0,
    });
  });
};
exports.GetFairyPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const fairyPokemons = pokemons.filter((pokemon) => {
      return pokemon.Type === 'Fairy' || pokemon.Type2 === 'Fairy';
    });
    fairyPokemons.sort(() => Math.random() - 0.5).slice(0, 100);
    res.render('Pokemons/pokemons', {
      pokemons: fairyPokemons,
      pageTitle: 'Fairy Pokemons',
      title: 'Fairy',
      hasPokemon: fairyPokemons.length > 0,
    });
  });
};

exports.GetKantoPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const kantoPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Kanto';
    });
    res.render('Pokemons/pokemons', {
      pokemons: kantoPokemons,
      pageTitle: 'Kanto Pokemons',
      title: 'Kanto',
      hasPokemon: kantoPokemons.length > 0,
    });
  });
};

exports.GetJohtoPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const johtoPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Johto';
    });
    res.render('Pokemons/pokemons', {
      pokemons: johtoPokemons,
      pageTitle: 'Johto Pokemons',
      title: 'Johto',
      hasPokemon: johtoPokemons.length > 0,
    });
  });
};

exports.GetHoennPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const hoennPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Hoenn';
    });
    res.render('Pokemons/pokemons', {
      pokemons: hoennPokemons,
      pageTitle: 'Hoenn Pokemons',
      title: 'Hoenn',
      hasPokemon: hoennPokemons.length > 0,
    });
  });
};

exports.GetSinnohPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const sinnohPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Sinnoh';
    });
    res.render('Pokemons/pokemons', {
      pokemons: sinnohPokemons,
      pageTitle: 'Sinnoh Pokemons',
      title: 'Sinnoh',
      hasPokemon: sinnohPokemons.length > 0,
    });
  });
};

exports.GetUnovaPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const unovaPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Unova';
    });
    res.render('Pokemons/pokemons', {
      pokemons: unovaPokemons,
      pageTitle: 'Unova Pokemons',
      title: 'Unova',
      hasPokemon: unovaPokemons.length > 0,
    });
  });
};

exports.GetKalosPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const kalosPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Kalos';
    });
    res.render('Pokemons/pokemons', {
      pokemons: kalosPokemons,
      pageTitle: 'Kalos Pokemons',
      title: 'Kalos',
      hasPokemon: kalosPokemons.length > 0,
    });
  });
};

exports.GetAlolaPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const alolaPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Alola';
    });
    res.render('Pokemons/pokemons', {
      pokemons: alolaPokemons,
      pageTitle: 'Alola Pokemons',
      title: 'Alola',
      hasPokemon: alolaPokemons.length > 0,
    });
  });
};

exports.GetGalarPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const galarPokemons = pokemons.filter((pokemon) => {
      return pokemon.Region === 'Galar';
    });
    res.render('Pokemons/pokemons', {
      pokemons: galarPokemons,
      pageTitle: 'Galar Pokemons',
      title: 'Galar',
      hasPokemon: galarPokemons.length > 0,
    });
  });
};
exports.GetPokemonsByName = (req, res, next) => {
  const name = req.body.PokemonName;
  Pokemon.findAll({ where: { Name: { [Op.like]: `${name+'%'}` } }})
    .then((pokemons) => {
      const pokemon = pokemons.map((pokemon) => {
        return pokemon;
      });
      if (!pokemon) {
        return res.redirect('/');
      }
      res.render('pokemons/searched', {
        pageTitle: `Searched Pokemon`,
        title: `Searched pokemons: ${pokemon.length}`,
        hasPokemon: pokemon.length > 0,
        pokemons: pokemon,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
