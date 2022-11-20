const routes = require('express').Router();

// Controllers

const adminPokemonController = require('../controllers/admin/adminPokemonController');
const adminRegionController = require('../controllers/admin/adminRegionController');
const adminTypeController = require('../controllers/admin/adminTypeController');

// Pokemons

routes.get('/edit-Pokemons', adminPokemonController.GetAdminPokemons);

routes.get('/create-Pokemon', adminPokemonController.GetAddPokemons);
routes.post('/create-Pokemon', adminPokemonController.PostAddPokemons);

routes.get('/edit-Pokemon/:PokemonID', adminPokemonController.GetEditPokemons);
routes.post('/edit-Pokemon', adminPokemonController.PostEditPokemons);

routes.post('/delete-Pokemon', adminPokemonController.PostDeletePokemons);

// Regions

routes.get('/edit-Region', adminRegionController.GetAdminRegions);

routes.get('/create-Region', adminRegionController.GetAddRegions);
routes.post('/create-Region', adminRegionController.PostAddRegions);

routes.get('/edit-Region/:RegionID', adminRegionController.GetEditRegions);
routes.post('/edit-Region', adminRegionController.PostEditRegions);

routes.post('/delete-Region', adminRegionController.PostDeleteRegions);

// Types

routes.get('/edit-Type', adminTypeController.GetAdminTypes);

routes.get('/create-Type', adminTypeController.GetAddTypes);
routes.post('/create-Type', adminTypeController.PostAddTypes);

routes.get('/edit-Type/:TypeID', adminTypeController.GetEditTypes);
routes.post('/edit-Type', adminTypeController.PostEditTypes);

routes.post('/delete-Type', adminTypeController.PostDeleteTypes);



module.exports = routes;
