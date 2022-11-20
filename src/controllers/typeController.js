const Type = require('../models/typeModels');

exports.GetAllTypes = (req, res, next) => {
  Type.findAll().then((types) => {
    const type = types.map((type) => {
      return type.dataValues;
    });

    res.render('Types/type', {
      pageTitle: 'Types',
      hasType: type.length > 0,
      types: type,
    });
  });
};
