import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [licensePlate, setLicensePlate] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const checkPicoPlaca = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/check-pico-placa', {
        licensePlate,
        date,
        time,
      });
      setResult(response.data.canDrive ? "Car is allowed on the road" : "Car is restricted");
    } catch (error) {
      console.error("Error occurred!", error);
      setResult("Error: Could not check Pico y Placa");
    }
  };

  return (
    <div className="App">
      <h1>Pico y Placa Predictor</h1>
      <form onSubmit={checkPicoPlaca}>
        <input
          type="text"
          placeholder="License Plate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
