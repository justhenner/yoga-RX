const sequelize = require('../config/config');
const { Focus, Asana, Asana_Focus } = require('../models');

const focusSeedData = require('./focusSeed.json');
const asanaSeedData = require('./asanaSeed.json');
const asana_focusSeedData = require('./asana_focusSeed.json')

const seeddatabase = async ()=> {
    await sequelize.sync({force:true});
    
    const focuses = await Focus.bulkCreate(focusSeedData);
    const asanas = await Asana.bulkCreate(asanaSeedData);
    const asana_focus = await Asana_Focus.bulkCreate(asana_focusSeedData);


    process.exit(0)
};

seeddatabase()