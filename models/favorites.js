const { Model, DataTypes } =require('sequelize');
const sequelize = require('../config/config');


class Favorites extends Model {}



Favorites.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        asana_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'asana',
                key: 'id',
                unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
    
        }
    }, 
},
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorites',

    }
);
module.exports = Favorites;