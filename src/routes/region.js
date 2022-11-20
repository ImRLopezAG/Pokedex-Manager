const router = require('express').Router();

const regionController = require('../controllers/regionController');

router.get('/region', regionController.GetAllRegions);

module.exports = router;
