const sequelize = require('../config/config');
const { User, Injury, Asana  } = require('../models');
const seeddatabase = async ()=> {
    await sequelize.sync({force:true})
    process.exit(0)
}
seeddatabase()