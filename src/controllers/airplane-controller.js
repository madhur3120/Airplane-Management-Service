const { StatusCodes } = require('http-status-codes')
const { AirplaneService } = require('../services')

// POST - /airplanes 
// req - {modelNumber: 'airbus320', capacity: 400}

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully Created an Airplane',
                data: airplane,
                error: {}
            })
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'Unable to create an Airplane',
                data: {},
                error: error
            })
    }
}

module.exports = { createAirplane }