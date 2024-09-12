const Car = require('../models/Car');
const PicoPlacaService = require('../services/PicoYPlacaService');

function checkPicoPlaca(req, res) {
    const { licensePlate, date, time } = req.body;
    const car = new Car(licensePlate);
    const picoPlacaService = new PicoPlacaService(car, date, time);
    const canDrive = picoPlacaService.canDrive();
    res.json({ canDrive });
}

module.exports = { checkPicoPlaca };