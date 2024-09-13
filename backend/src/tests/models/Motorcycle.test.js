const Motorcycle = require('../../models/Motorcycle');

describe('Motorcycle Class', () => {
  it('should return the last digit of the motorcycle license plate', () => {
    const motorcycle = new Motorcycle('AB-123-C');
    expect(motorcycle.getLastDigit()).toBe('3'); // The last digit of the numeric part should be '3'
  });

  it('should return the last digit of the motorcycle license plate with different format', () => {
    const motorcycle = new Motorcycle('CD-987-X');
    expect(motorcycle.getLastDigit()).toBe('7'); // The last digit of the numeric part should be '7'
  });
});