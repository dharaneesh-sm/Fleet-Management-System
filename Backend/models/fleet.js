const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fleet = sequelize.define('Fleet', {
  plateNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currentKilometerReading: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manufacturingDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ownershipDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Fleet;
