const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class asanaInjury extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
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
  // hooks: {
  //   beforeCreate: async (newUserAsanaData) => {
  //     newUserAsanaData.password = await bcrypt.hash(newUserAsanaData.password, 10);
  //     return newUserAsanaData;
  //   },
  // },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'userAsana',
  }
);

module.exports = userAsana;