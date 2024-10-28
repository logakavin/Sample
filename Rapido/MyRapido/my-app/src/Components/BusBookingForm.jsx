import React, { useState } from 'react';

const BusBookingForm = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Valid locations for validation
  const validLocations = ['Coimbatore', 'Chennai', 'Bangalore'];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!departure || !destination || !date || passengers < 1) {
      alert('All fields are required, and passengers must be at least 1.');
      return;
    }

    // Check if departure and destination are in valid locations
    if (!validLocations.includes(departure)) {
      alert('Invalid Departure location. Please choose from available locations.');
      return;
    }

    if (!validLocations.includes(destination)) {
      alert('Invalid Destination location. Please choose from available locations.');
      return;
    }

    // Display booking details if all inputs are valid
    alert (`Booking confirmed from ${departure} to ${destination} on ${date} for ${passengers} passenger(s).`);
  };

  return (
<div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Bus Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Departure Location:</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Enter departure location"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Destination Location:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination location"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date of Travel:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Number of Passengers:</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min="1"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusBookingForm;