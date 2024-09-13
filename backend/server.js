const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { checkPicoPlaca } = require('./src/controllers/PicoYPlacaController');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/check-pico-placa', checkPicoPlaca);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});