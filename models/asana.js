const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Asana extends Model {}

Asana.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    sanskrit_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    english_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'asana',
  }
);

module.exports = Asana;
