const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  taskType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assigneeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
    defaultValue: 'Pending',
    allowNull: false,
  },
  fleetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Fleet', 
      key: 'id',
    },
    allowNull: false,
  },
},
{
  timestamps: true
});

module.exports = Task;