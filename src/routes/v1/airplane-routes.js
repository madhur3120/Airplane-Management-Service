const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();

// POST - api/v1/airplanes
router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

module.exports = router;