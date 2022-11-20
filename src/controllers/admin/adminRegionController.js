const Region = require('../../models/regionModels');

exports.GetAdminRegions = (req, res, next) => {
  Region.findAll().then((regions) => {
    const region = regions.map((region) => {
      return region.dataValues;
    });
    res.render('admin/regions/adminRegions', {
      pageTitle: 'Admin Region',
      hasRegion: region.length > 0,
      regions: region,
    });
  });
};

exports.GetAddRegions = (req, res, next) => {
  res.render('admin/regions/editRegions', {
    pageTitle: 'Create Region',
    editMode: false,
  });
};

exports.PostAddRegions = (req, res, next) => {
  let created = req.body.RegionCreate;
  const name = req.body.Name;
  const image = req.body.Image;
  const description = req.body.Description;

  function Validate() {
    isValid = true;
    if (name == '' || name == null || name == undefined) {
      isValid = false;
    }
    if (image == '' || image == null || image == undefined) {
      isValid = false;
    }
    if (description == '' || description == null || description == undefined) {
      isValid = false;
    }
    return isValid;
  }
  if (Validate()) {
    Region.create({
      Name: name,
      Image: image,
      Description: description,
    })
      .then((result) => {
        console.log('Created Region');
        res.redirect('/region');
      })
      .catch((err) => {
        console.log(err);
      });
    created = 2;
  } else {
    created = 1;
  }
};

exports.GetEditRegions = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  Region.findOne({ where: { id: req.params.RegionID } }).then((regions) => {
    const region = regions.dataValues;
    if (!region) {
      return res.redirect('/region');
    }
    res.render('admin/regions/editRegions', {
      pageTitle: 'Edit Region',
      hasRegion: region.length > 0,
      region: region,
      editMode: editMode,
    });
  });
};

exports.PostEditRegions = (req, res, next) => {
  const updatedName = req.body.Name;
  const updatedImage = req.body.Image;
  const updatedRegion = req.body.Region;
  Region.update(
    {
      Name: updatedName,
      Image: updatedImage,

      Region: updatedRegion,
    },
    { where: { id: req.body.RegionId } }
  ).then((result) => {
    console.log('Updated Region');
    res.redirect('/admin/edit-Region');
  });
};

exports.PostDeleteRegions = (req, res, next) => {
  const pokemonID = req.body.RegionId;

  Region.destroy({ where: { id: pokemonID } });
  console.log(`Region with ID: ${pokemonID} has been deleted`);

  res.redirect('/admin/edit-Region');
};
