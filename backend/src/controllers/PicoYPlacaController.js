const Car = require('../models/Car');
const Motorcycle = require('../models/Motorcycle');
const PicoPlacaService = require('../services/PicoYPlacaService');

// Function to validate the license plate format and return the vehicle type (Car or Motorcycle)
function getVehicleByLicensePlate(licensePlate) {
    if (/^[A-Z]{3}-\d{3,4}$/.test(licensePlate)) {
        return new Car(licensePlate); // Valid car license plate
    } else if (/^[A-Z]{2}-\d{3}-[A-Z]{1}$/.test(licensePlate)) {
        return new Motorcycle(licensePlate); // Valid motorcycle license plate
    } else {
        throw new Error('Invalid license plate format'); // Invalid license plate
    }
}

// Function to handle errors and send an appropriate response
function handleError(res, error) {
    res.status(400).json({ message: error.message });
}

// Controller function for checking Pico y Placa
async function checkPicoPlaca(req, res) {
    try {
        const { licensePlate, date, time } = req.body;

        // Validate and get vehicle instance
        const vehicle = getVehicleByLicensePlate(licensePlate);

        // Instantiate PicoPlacaService with vehicle, date, and time
        const picoPlacaService = new PicoPlacaService(vehicle, date, time);

        // Check if the vehicle can drive
        const canDrive = picoPlacaService.canDrive();

        // Send the result as JSON
        res.json({ canDrive });
    } catch (error) {
        // Handle and send error response
        handleError(res, error);
    }
}

module.exports = { checkPicoPlaca };