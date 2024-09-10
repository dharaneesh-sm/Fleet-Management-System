const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Fleet = require('../models/fleet');

router.post('/tasks', async (req, res) => {
  const { taskType, assigneeName, dueDate, status, fleetId } = req.body;

  try {
    const fleet = await Fleet.findByPk(fleetId);
    if (!fleet) {
      return res.status(404).json({ message: 'Fleet not found' });
    }
    
    const newTask = await Task.create({
      taskType,
      assigneeName,
      dueDate,
      status,
      fleetId,
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({
      message: 'Error adding task',
      error: error.message || 'An unknown error occurred',
    });
  }
});

module.exports = router;
