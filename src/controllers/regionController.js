const Region = require('../models/regionModels');

exports.GetAllRegions = (req, res, next) => {
  Region.findAll().then((regions) => {
    const region = regions.map((region) => {
      return region.dataValues;
    });

    res.render('Regions/regions', {
      pageTitle: 'Regions',
      hasRegion: region.length > 0,
      regions: region,
    });
  });
};


