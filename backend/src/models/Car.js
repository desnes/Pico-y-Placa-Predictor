class Car {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }

    // Extract the last digit from the numeric part of the car's plate
    getLastDigit() {
        return this.licensePlate.slice(-1);
    }
}

module.exports = Car;