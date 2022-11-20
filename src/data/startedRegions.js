const CreateFirstRegion = require('../models/regionModels.Js');

CreateFirstRegion.create({
  Name: 'Kanto',
  Description: 'The first region of the game',
  Image: 'https://bulbapedia.bulbagarden.net/wiki/File:LGPE_Kanto_Map.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Johto',
  Description: 'The second region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/6/64/JohtoMap.png/450px-JohtoMap.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Hoenn',
  Description: 'The third region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/8/85/Hoenn_ORAS.png/450px-Hoenn_ORAS.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Sinnoh',
  Description: 'The fourth region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/0/08/Sinnoh_BDSP_artwork.png/450px-Sinnoh_BDSP_artwork.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Unova',
  Description: 'The fifth region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/f/fc/Unova_B2W2_alt.png/450px-Unova_B2W2_alt.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Kalos',
  Description: 'The sixth region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/8/8a/Kalos_alt.png/450px-Kalos_alt.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Alola',
  Description: 'The seventh region of the game',
  Image:
    'https://archives.bulbagarden.net/media/upload/thumb/0/0b/Alola_USUM_artwork.png/450px-Alola_USUM_artwork.png',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

CreateFirstRegion.create({
  Name: 'Galar',
  Description: 'The eighth region of the game',
  Image:
    'https://static.wikia.nocookie.net/pokemon/ihttps://static.wikia.nocookie.net/pokemon/images/a/a1/Paldea.jpg/revision/latest?cb=20220805092833mages/e/ea/GalarRegion.jpg/revision/latest?cb=20190227185222',
})
  .then((result) => {
    console.log(`Created Regions: ${Name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = CreateFirstRegion;
