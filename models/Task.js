const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  limitDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Task;