const Car = require('../models/Car');
const Motorcycle = require('../models/Motorcycle');
const PicoPlacaService = require('../services/PicoYPlacaService');

function checkPicoPlaca(req, res) {
    const { licensePlate, date, time } = req.body;
    
    let vehicle;
    if (/^[A-Z]{3}-\d{3,4}$/.test(licensePlate)) {
        vehicle = new Car(licensePlate);
    } else if (/^[A-Z]{2}-\d{3}-[A-Z]{1}$/.test(licensePlate)) {
        vehicle = new Motorcycle(licensePlate);
    } else {
        return res.status(400).json({ message: 'Invalid license plate format' });
    }

    const picoPlacaService = new PicoPlacaService(vehicle, date, time);
    const canDrive = picoPlacaService.canDrive();
    res.json({ canDrive });
}

module.exports = { checkPicoPlaca };