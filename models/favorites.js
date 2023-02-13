const { Model, DataTypes } = require('sequelize');
// const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/config');
// const Asana = sequelize.define('Asana',{id: DataTypes.INTEGER})
// const User = sequelize.define('User',{id: DataTypes.INTEGER})

class Favorites extends Model {}

Favorites.init(
    {
        id: {
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
        user_id:{
            type:DataTypes.INTEGER,
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