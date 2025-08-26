const express = require('express');
const router = express.Router();
const { fetchWeatherAndStoreAlert } = require('../Controller/weatherController');

router.get('/check', fetchWeatherAndStoreAlert);

module.exports = router;
