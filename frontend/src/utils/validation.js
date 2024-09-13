// Validate license plate for car and motorcycle formats
export const validateLicensePlate = (plate) => {
    const carOldFormat = /^[A-Z]{3}-\d{3}$/;     // Example: ABC-123
    const carNewFormat = /^[A-Z]{3}-\d{4}$/;     // Example: ABC-1234
    const motorcycleFormat = /^[A-Z]{2}-\d{3}-[A-Z]{1}$/; // Example: AB-123-C
  
    return carOldFormat.test(plate) || carNewFormat.test(plate) || motorcycleFormat.test(plate);
  };
  
// Validate that all required fields are filled
export const validateFields = (licensePlate, date, time) => {
if (!validateLicensePlate(licensePlate)) {
    return 'Invalid license plate format. Please use one of the valid formats.';
}
return null;  // No errors
};