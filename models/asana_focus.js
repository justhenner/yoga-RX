const { Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/config');
const Asana = sequelize.define('Asana',{id: DataTypes.INTEGER})
const Focus = sequelize.define('Focus',{id: DataTypes.INTEGER})

class Asana_Focus extends Model {}

Asana_Focus.init(
    {
        asana_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'asana',
                key: 'id',
                unique: false
            },
        },
        focus_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'focus',
                key: 'id',
                unique: false
            },
        }
        
        
    }
)
module.exports = Asana_Focus;