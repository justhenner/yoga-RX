const { Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/config');
const Asana = sequelize.define('Asana',{id: DataTypes.INTEGER})
const Focus = sequelize.define('Focus',{id: DataTypes.INTEGER})

class Asana_Focus extends Model {}

Asana_Focus.init(
    {
        asana_id:{
            type: DataTypes.INTEGER
        },
        focus_id:{
            type:DataTypes.INTEGER
        }
        
        
    }
)
module.exports = Asana_Focus;