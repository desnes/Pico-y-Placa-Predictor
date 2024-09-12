class Car {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }

    getLastDigit() {
        return this.licensePlate.slice(-1);
    }
}

module.exports = Car;