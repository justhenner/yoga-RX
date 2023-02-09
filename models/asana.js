const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class asana extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

asana.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    english_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sanskrit_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.LONGBLOB,
      // or BLOB if it doesn't work
      allowNull: false,
    },
    // image Model Attributes should be here
    hooks: {
      beforeCreate: async (newAsanaData) => {
        newAsanaData.password = await bcrypt.hash(newAsanaData.password, 10);
        return newAsanaData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'asana',
  }
);

module.exports = Asana;
