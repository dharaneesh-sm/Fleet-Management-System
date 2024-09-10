const express = require('express');
const router = express.Router();
const Fleet = require('../models/fleet');

//Add a new fleet
router.post('/add', async (req, res) => {
  try {
    const { plateNumber, vehicleType, currentKilometerReading, status, manufacturingDate, ownershipDate } = req.body;
    const newFleet = await Fleet.create({
      plateNumber,
      vehicleType,
      currentKilometerReading,
      status,
      manufacturingDate,
      ownershipDate,
    });
    res.status(201).json(newFleet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding fleet', error });
  }
});

//List all fleets
router.get('/', async (req, res) => {
  try {
    const { status, type, ownershipDate } = req.query;

    const filters = {};
    if (status) filters.status = status;
    if (type) filters.vehicleType = type;
    if (ownershipDate) filters.ownershipDate = ownershipDate;

    const fleets = await Fleet.findAll({ where: filters });
    res.status(200).json(fleets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving fleets', error });
  }
});

//Update an existing fleet
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { plateNumber, vehicleType, currentKilometerReading, status, manufacturingDate, ownershipDate } = req.body;
    
    const fleet = await Fleet.findByPk(id);
    
    if (!fleet) {
      console.log("Fleet not found");
      return res.status(404).json({ message: 'Fleet not found' });
    }

    console.log("Fleet Found:", fleet);

    fleet.plateNumber = plateNumber || fleet.plateNumber;
    fleet.vehicleType = vehicleType || fleet.vehicleType;
    fleet.currentKilometerReading = currentKilometerReading || fleet.currentKilometerReading;
    fleet.status = status || fleet.status;
    fleet.manufacturingDate = manufacturingDate || fleet.manufacturingDate;
    fleet.ownershipDate = ownershipDate || fleet.ownershipDate;

    await fleet.save();

    console.log("Updated Fleet:", fleet);

    res.status(200).json(fleet);
  } catch (error) {
    console.error("Error in Update Route:", error);
    res.status(500).json({ message: 'Error updating fleet', error });
  }
});

module.exports = router;
