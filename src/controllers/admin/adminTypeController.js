const Type = require('../../models/typeModels');

exports.GetAdminTypes = (req, res, next) => {
  Type.findAll().then((types) => {
    const type = types.map((type) => {
      return type.dataValues;
    });
    res.render('admin/types/adminTypes', {
      pageTitle: 'Admin Type',
      hasType: type.length > 0,
      types: type,
    });
  });
};

exports.GetAddTypes = (req, res, next) => {
  res.render('admin/types/editTypes', {
    pageTitle: 'Create Type',
    editMode: false,
  });
};

exports.PostAddTypes = (req, res, next) => {
  let created = req.body.PokemonCreate;
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
    Type.create({
      Name: name,
      Image: image,
      Description: description,
    })
      .then((result) => {
        console.log('Created Type');
        res.redirect('/type');
      })
      .catch((err) => {
        console.log(err);
      });
    created = 2;
  } else {
    created = 1;
  }
};

exports.GetEditTypes = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  Type.findOne({ where: { id: req.params.TypeID } }).then((types) => {
    const type = types.dataValues;
    if (!type) {
      return res.redirect('/type');
    }
    res.render('admin/types/editTypes', {
      pageTitle: 'Edit Type',
      hasType: type.length > 0,
      type: type,
      editMode: editMode,
    });
  });
};

exports.PostEditTypes = (req, res, next) => {
  const updatedName = req.body.Name;
  const updatedImage = req.body.Image;
  const updatedDescription = req.body.Description;
  Type.update(
    {
      Name: updatedName,
      Image: updatedImage,

      Description: updatedDescription,
    },
    { where: { id: req.body.TypeId } }
  ).then((result) => {
    console.log('Updated Type');
    res.redirect('/admin/edit-Type');
  });
};

exports.PostDeleteTypes = (req, res, next) => {
  const typeID = req.body.TypeId;

  Type.destroy({ where: { id: typeID } });
  console.log(`Type with ID: ${typeID} has been deleted`);

  res.redirect('/admin/edit-Type');
};
