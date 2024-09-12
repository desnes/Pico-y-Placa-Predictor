class PicoPlacaService {
    constructor(car, date, time) {
        this.car = car;
        this.date = new Date(date);
        this.time = time;
    }

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

    isRestrictedDay() {
        const lastDigit = this.car.getLastDigit();
        const restrictedDay = this.getRestrictedDays()[lastDigit];
        const currentDay = this.date.toLocaleDateString('en-US', { weekday: 'long' });

        return restrictedDay === currentDay;
    }

    isRestrictedTime() {
        const [hour, minute] = this.time.split(':').map(Number);
        const isInMorningHours = (hour === 7 && minute >= 0) || (hour === 8) || (hour === 9 && minute <= 30);
        const isInAfternoonHours = (hour === 16 && minute >= 0) || (hour === 17) || (hour === 18) || (hour === 19 && minute <= 30);
        return isInMorningHours || isInAfternoonHours;
    }

    canDrive() {
        return !(this.isRestrictedDay() && this.isRestrictedTime());
    }
}

module.exports = PicoPlacaService;
 