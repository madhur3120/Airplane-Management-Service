const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();

// POST - api/v1/airplanes
router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

// GET - api/v1/airplanes
router.get('/', AirplaneController.getAirplanes);

// GET - api/v1/airplanes/:id
router.get('/:id', AirplaneController.getAirplane);

module.exports = router;
