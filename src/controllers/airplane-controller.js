const { StatusCodes } = require('http-status-codes')
const { AirplaneService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

// POST - /airplanes 
// req - {modelNumber: 'airbus320', capacity: 400}

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.message = 'Successfully Created an Airplane';
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = 'Unable to create an Airplane';
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse)
    }
}

module.exports = { createAirplane }