const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Focus extends Model {}


Focus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'focus'
  }
);

module.exports = Focus;
