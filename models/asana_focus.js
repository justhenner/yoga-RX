const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Asana_Focus extends Model {}

Asana_Focus.init(
    {

        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        asana_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'asana',
                key: 'id',
                unique: false
            }
        },

        focus_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'focus',
                key: 'id',
                unique: false
            },
        }   
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'asana',
      }
);
module.exports = Asana_Focus;