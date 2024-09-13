
const request = require('supertest');
const express = require('express');
const { checkPicoPlaca } = require('../controllers/PicoYPlacaController');

// Configura un servidor Express para las pruebas
const app = express();
app.use(express.json());
app.post('/check-pico-placa', checkPicoPlaca);

describe('Pico y Placa Controller', () => {
  it('should allow a car with old license plate format to drive', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'ABC-123',
        date: '2024-09-12', // Thursday
        time: '10:00'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(true);  // The car should be allowed
  });

  it('should restrict a car with new license plate format during restricted time', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'ABC-1237',
        date: '2024-09-12', // Thursday
        time: '08:30' // Restricted time
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(false);  // The car should be restricted
  });

  it('should allow a motorcycle to drive during non-restricted time', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'AB-123-C',
        date: '2024-09-12', // Thursday
        time: '11:00' // Non-restricted time
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(true);  // The motorcycle should be allowed
  });

  it('should restrict a motorcycle to drive during restricted time', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'AB-123-C',
        date: '2024-09-10', // Tuesday
        time: '08:00' // Restricted time
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(false);  // The motorcycle should be restricted
  });

  it('should return 400 for an invalid license plate format', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'INVALID',
        date: '2024-09-12', // Thursday
        time: '08:30'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid license plate format');
  });

  it('should return 400 for missing required fields', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        date: '2024-09-12',
        time: '08:30'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid license plate format');
  });
});