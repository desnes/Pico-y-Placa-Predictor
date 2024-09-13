class Motorcycle {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }

    // Extract the last digit from the numeric part of the motorcycle's plate
    getLastDigit() {
        const parts = this.licensePlate.split('-'); // Example: AB-123-C
        return parts[1].slice(-1);  // The second part is the numeric part (e.g., '123'), so we return the last digit '3'
    }
}

module.exports = Motorcycle;