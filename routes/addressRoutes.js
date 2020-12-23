const express = require('express');
const StateCityController = require('../controllers/StateCityController');
const NewsController = require('../controllers/NewsController');
const router = express.Router();

router.get('/states', StateCityController.getStates);
router.get('/cities/:state', StateCityController.getCities);
router.get('/news', NewsController.getNews);
router.post('/news', NewsController.postNews);

module.exports = router;