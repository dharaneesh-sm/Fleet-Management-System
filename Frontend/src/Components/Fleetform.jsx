import React, { useState } from 'react';
import axios from 'axios';

const FleetForm = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [currentKilometerReading, setCurrentKilometerReading] = useState('');
  const [status, setStatus] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [ownershipDate, setOwnershipDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/fleets/add', {
        plateNumber,
        vehicleType,
        currentKilometerReading,
        status,
        manufacturingDate,
        ownershipDate,
      });
      alert('Fleet added successfully');
    } catch (error) {
      console.error('Error adding fleet:', error);
      alert('Error adding fleet');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Fleet</h2>
      <input type="text" placeholder="Plate Number" value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
      <input type="text" placeholder="Vehicle Type" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
      <input type="number" placeholder="Current Kilometer Reading" value={currentKilometerReading} onChange={(e) => setCurrentKilometerReading(e.target.value)} />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <input type="date" placeholder="Manufacturing Date" value={manufacturingDate} onChange={(e) => setManufacturingDate(e.target.value)} />
      <input type="date" placeholder="Ownership Date" value={ownershipDate} onChange={(e) => setOwnershipDate(e.target.value)} />
      <button type="submit">Add Fleet</button>
    </form>
  );
};

export default FleetForm;
