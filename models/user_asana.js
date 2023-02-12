const { Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/config');
const Asana = sequelize.define('Asana',{id: DataTypes.INTEGER})
const User = sequelize.define('User',{id: DataTypes.INTEGER})

class User_Asana extends Model {}

User_Asana.init(
    {
        asana_id:{
            type: DataTypes.INTEGER,
            references: {
            model: 'asana',
            key: 'id',
            unique: false
        },
        },
        user_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            },
        }
        
        
    }
)
module.exports = User_Asana;