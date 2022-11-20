const router = require('express').Router();

const homeController = require('../controllers/homeController');

const pokemonController = require('../controllers/pokemonController');
// Types
router.get('/', homeController.GetHome);
router.get('/pokemons/normal', pokemonController.GetNormalPokemons);
router.get('/pokemons/fire', pokemonController.GetFirePokemons);
router.get('/pokemons/water', pokemonController.GetWaterPokemons);
router.get('/pokemons/electric', pokemonController.GetElectricPokemons);
router.get('/pokemons/grass', pokemonController.GetGrassPokemons);
router.get('/pokemons/ice', pokemonController.GetIcePokemons);
router.get('/pokemons/fighting', pokemonController.GetFightingPokemons);
router.get('/pokemons/poison', pokemonController.GetPoisonPokemons);
router.get('/pokemons/ground', pokemonController.GetGroundPokemons);
router.get('/pokemons/flying', pokemonController.GetFlyingPokemons);
router.get('/pokemons/psychic', pokemonController.GetPsychicPokemons);
router.get('/pokemons/bug', pokemonController.GetBugPokemons);
router.get('/pokemons/rock', pokemonController.GetRockPokemons);
router.get('/pokemons/ghost', pokemonController.GetGhostPokemons);
router.get('/pokemons/dragon', pokemonController.GetDragonPokemons);
router.get('/pokemons/dark', pokemonController.GetDarkPokemons);
router.get('/pokemons/steel', pokemonController.GetSteelPokemons);
router.get('/pokemons/fairy', pokemonController.GetFairyPokemons);

// Regions

router.get('/pokemons/regions/kanto', pokemonController.GetKantoPokemons);
router.get('/pokemons/regions/johto', pokemonController.GetJohtoPokemons);
router.get('/pokemons/regions/hoenn', pokemonController.GetHoennPokemons);
router.get('/pokemons/regions/sinnoh', pokemonController.GetSinnohPokemons);
router.get('/pokemons/regions/unova', pokemonController.GetUnovaPokemons);
router.get('/pokemons/regions/kalos', pokemonController.GetKalosPokemons);
router.get('/pokemons/regions/alola', pokemonController.GetAlolaPokemons);
router.get('/pokemons/regions/galar', pokemonController.GetGalarPokemons);

// Search Name

router.post('/pokemons/search', pokemonController.GetPokemonsByName);


module.exports = router;
