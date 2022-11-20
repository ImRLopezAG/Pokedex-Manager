const router = require('express').Router();

const typeController = require('../controllers/typeController');

router.get('/type', typeController.GetAllTypes);

module.exports = router;
