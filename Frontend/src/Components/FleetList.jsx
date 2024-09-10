import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FleetList = () => {
  const [fleets, setFleets] = useState([]);

  useEffect(() => {
    const fetchFleets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fleets');
        setFleets(response.data);
      } catch (error) {
        console.error('Error fetching fleets:', error);
      }
    };
    fetchFleets();
  }, []);

  return (
    <div>
      <h2>Fleets List</h2>
      <ul>
        {fleets.map(fleet => (
          <li key={fleet.id}>
            Plate Number: {fleet.plateNumber}, Vehicle Type: {fleet.vehicleType}, Status: {fleet.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FleetList;
