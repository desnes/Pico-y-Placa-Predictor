import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { validateFields } from './utils/validation';

function App() {
  const [licensePlate, setLicensePlate] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);  // State to handle validation errors
  const [showModal, setShowModal] = useState(false);

  // Function to reset the form
  const resetForm = () => {
    setLicensePlate('');
    setDate('');
    setTime('');
  };

  const checkPicoPlaca = async (e) => {
    e.preventDefault();
    
    /// Validate the fields and license plate format
    const validationError = validateFields(licensePlate, date, time);
    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }
    
    setError(null); // Clear any previous errors if validation passes

    try {
      const response = await axios.post('http://localhost:3000/check-pico-placa', {
        licensePlate,
        date,
        time,
      });
      setResult(response.data.canDrive ? "The vehicle is allowed on the road" : "Vehicle is restricted");
      setShowModal(true);  // Show modal with result
    } catch (error) {
      console.error("Error occurred!", error);
      setResult("Error: Could not check Pico y Placa");
      setShowModal(true);  // Show modal with error
    }
  };

  // Close the modal and reset the form
  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Pico y Placa Predictor</h1>
      <form onSubmit={checkPicoPlaca} className="bg-gray-50 p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="licensePlate" className="block text-blue-800 mb-2 text-left">Enter your vehicle's license plate</label>
          <input
            required
            type="text"
            placeholder="License Plate (e.g., PBX-1234, PB-12-X)"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-950"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}  {/* Show error message */}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-blue-800 mb-2 text-left">Select the date</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-950"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-blue-800 mb-2 text-left">Select the time</label>
          <input
            required
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-950"
          />
        </div>
        <button type="submit" className="w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-600">
          Check
        </button>
      </form>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Pico y Placa Result</h2>
            <p className="mb-6">{result}</p>
            <button onClick={closeModal} className="bg-blue-800 text-white p-2 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;