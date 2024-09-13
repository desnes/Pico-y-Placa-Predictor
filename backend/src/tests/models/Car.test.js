const Car = require('../../models/Car');

describe('Car Class', () => {
  it('should return the last digit of the car license plate (old format)', () => {
    const car = new Car('ABC-123');
    expect(car.getLastDigit()).toBe('3'); // The last digit should be '3'
  });

  it('should return the last digit of the car license plate (new format)', () => {
    const car = new Car('XYZ-5678');
    expect(car.getLastDigit()).toBe('8'); // The last digit should be '8'
  });
});