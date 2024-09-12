// src/tests/picoPlacaController.test.js
const request = require('supertest');
const express = require('express');
const { checkPicoPlaca } = require('../controllers/PicoYPlacaController');

// Configura un servidor Express para las pruebas
const app = express();
app.use(express.json());
app.post('/check-pico-placa', checkPicoPlaca);

describe('POST /check-pico-placa', () => {
  it('Debe permitir que un carro circule si no está restringido', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'PBX-1233',
        date: '2024-09-12', // jueves
        time: '10:00'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(true);
  });

  it('Debe restringir un carro si está en hora pico y su placa está restringida', async () => {
    const response = await request(app)
      .post('/check-pico-placa')
      .send({
        licensePlate: 'PBX-127',
        date: '09-12-2024', // Jueves
        time: '08:30'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.canDrive).toBe(false);
  });
});
