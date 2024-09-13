class PicoPlacaService {
    // Constructor takes in the vehicle (either Car or Motorcycle object), date, and time
    constructor(vehicle, date, time) {
        this.vehicle = vehicle;
        this.date = new Date(date + 'T00:00:00'); // Date object with time set to 00:00:00
        this.time = time; // Time string in "HH:MM" format
    }

    // Returns a mapping of last digits to restricted days
    getRestrictedDays() {
        return {
            '1': 'Monday',
            '2': 'Monday',
            '3': 'Tuesday',
            '4': 'Tuesday',
            '5': 'Wednesday',
            '6': 'Wednesday',
            '7': 'Thursday',
            '8': 'Thursday',
            '9': 'Friday',
            '0': 'Friday',
        };
    }

    // Checks if the vehicle's last digit corresponds to a restricted day
    isRestrictedDay() {
        const lastDigit = this.vehicle.getLastDigit(); // Consistent method call for both cars and motorcycles
        const restrictedDay = this.getRestrictedDays()[lastDigit];
        const currentDay = this.date.toLocaleDateString('en-US', { weekday: 'long' });

        return restrictedDay === currentDay;
    }

    // Checks if the current time falls within restricted hours
    isRestrictedTime() {
        const [hour, minute] = this.time.split(':').map(Number);
        const isInMorningHours = (hour === 7 && minute >= 0) || (hour === 8) || (hour === 9 && minute <= 30);
        const isInAfternoonHours = (hour === 16 && minute >= 0) || (hour === 17) || (hour === 18) || (hour === 19 && minute <= 30);

        return isInMorningHours || isInAfternoonHours;
    }

    // Determines if the vehicle can drive by checking both day and time restrictions
    canDrive() {
        return !(this.isRestrictedDay() && this.isRestrictedTime());
    }
}

module.exports = PicoPlacaService;