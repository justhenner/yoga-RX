const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class asanaInjury extends Model {

}

asanaInjury.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    asanaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'asana',
        key: 'id',
      },
    },
  },

  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'userAsana',
  }
);
