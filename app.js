const express = require('express');
const sequelize = require('./src/data/database.js').sequelize;
const Handlebars = require('handlebars');
const { engine } = require('express-handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

const path = require('path');

//routes
const status = require('./src/controllers/helpers/status');
const compareHelper = require('./src/controllers/helpers/compare');
const errorController = require('./src/controllers/errorController');
const pokemonRouter = require('./src/routes/pokemon');
const adminRouter = require('./src/routes/admin');
const typeRouter = require('./src/routes/type');
const regionRouter = require('./src/routes/region');

//models
const pokemonModel = require('./src/models/pokemonModels');
const typeModel = require('./src/models/typeModels');
const regionModel = require('./src/models/regionModels');

// const createPokemon = require('./src/data/startedPokemons'); //To insert all pokemons in database
// const createTypes = require('./src/data/startedTypes'); // To insert all types in database
// const createRegions = require('./src/data/startedRegions'); //To insert all regions in database

// app config
const app = express();

app.engine(
  'hbs',
  engine({
    layoutsDir: path.join(__dirname, '/src/views/layouts'),
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: { IsEqual: status.IsEqual, EqualValues: compareHelper.EqualValue },
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes config

app.use(pokemonRouter);
app.use('/admin', adminRouter);
app.use(typeRouter);
app.use(regionRouter);
app.use('/', errorController.Get404);

// app start up
sequelize
  .sync()
  .then(function (result) {
    app.listen(3000, function () {
      console.log(
        `Server is running on http://localhost:${this.address().port}`
      );
    });
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  });
