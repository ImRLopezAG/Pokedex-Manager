const Pokemon = require('../../models/pokemonModels');
const Region = require('../../models/regionModels');
const Type = require('../../models/typeModels');

exports.GetAdminPokemons = (req, res, next) => {
  Pokemon.findAll().then((pokemons) => {
    const pokemon = pokemons.map((pokemon) => {
      return pokemon.dataValues;
    });
    res.render('admin/pokemons/adminPokemons', {
      pageTitle: 'Admin Pokemon',
      hasPokemon: pokemon.length > 0,
      pokemons: pokemon,
    });
  });
};

exports.GetAddPokemons = (req, res, next) => {
  res.render('admin/pokemons/editPokemons', {
    pageTitle: 'Create Pokemon',
    editMode: false,
  });
};

exports.PostAddPokemons = (req, res, next) => {
  let created = req.body.PokemonCreate;
  const name = req.body.Name;
  const image = req.body.Image;
  let type = req.body.Type;
  let type2 = req.body.Type2;
  const region = req.body.Region;

  function Validate() {
    isValid = true;
    if (name == '' || name == null || name == undefined) {
      isValid = false;
    }
    if (image == '' || image == null || image == undefined) {
      isValid = false;
    }
    if (type == '' || type == null || type == undefined) {
      isValid = false;
    }
    if (region == '' || region == null || region == undefined) {
      isValid = false;
    }
    return isValid;
  }

  if (type === 'Select Type') {
    type = '';
  }
  if (type2 === 'Select Type') {
    type2 = '';
  }

  if (type === '' && type2 === '') {
  }
  if (Validate()) {
    Pokemon.create({
      Name: name,
      Image: image,
      Type: type,
      Type2: type2,
      Region: region,
    })
      .then((result) => {
        console.log('Created Pokemon');
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });

  } else {
    created = 1;
  }
};

exports.GetEditPokemons = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  Pokemon.findOne({ where: { id: req.params.PokemonID } })
    .then((pokemons) => {
      const pokemon = pokemons.dataValues;
      if (!pokemon) {
        return res.redirect('/');
      }
      Region.findAll()
        .then((regions) => {
          const region = regions.map((region) => {
            return region.dataValues;
          });
          Type.findAll()
            .then((types) => {
              const type = types.map((type) => {
                return type.dataValues;
              });
              res.render('admin/pokemons/editPokemons', {
                pageTitle: 'Edit Pokemon',
                editMode: editMode,
                pokemon: pokemon,
                regions: region,
                types: type,
              });
            })
            .catch((err) => {
              console.log(`Error reading types: ${err}`);
            });
        })
        .catch((err) => {
          console.log(`error reading regions: ${err}`);
        });
    })
    .catch((err) => {
      console.log(`Error reading pokemon: ${err}`);
    });
};

exports.PostEditPokemons = (req, res, next) => {
  const updatedName = req.body.Name;
  const updatedImage = req.body.Image;
  const updatedType = req.body.Type;
  const updateType2 = req.body.Type2;
  const updatedRegion = req.body.Region;
  Pokemon.update(
    {
      Name: updatedName,
      Image: updatedImage,
      Type: updatedType,
      Type2: updateType2,
      Region: updatedRegion,
    },
    { where: { id: req.body.PokemonId } }
  ).then((result) => {
    console.log('Updated Pokemon');
    res.redirect('/admin/edit-Pokemons');
  });
};

exports.PostDeletePokemons = (req, res, next) => {
  const pokemonID = req.body.PokemonId;

  Pokemon.destroy({ where: { id: pokemonID } });

  res.redirect('/admin/edit-Pokemons');
};
