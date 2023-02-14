const sequelize = require('../config/connection.js');
const { Focus, Asana, Asana_Focus } = require('../models');

const focusSeedData = require('./focusSeed.json');
const asanaSeedData = require('./asanaSeed.json');
const asana_focusSeedData = require('./asana_focusSeed.json')

const seeddatabase = async ()=> {
    await sequelize.sync({force:true});
    
    const focuses = await Focus.bulkCreate(focusSeedData);
    console.log('finish seeding focus');
    const asanas = await Asana.bulkCreate(asanaSeedData);
    console.log('finish seeding focus');
    const asana_focus = await Asana_Focus.bulkCreate(asana_focusSeedData);
    console.log('finish seeding focus');

    process.exit(0)
};

seeddatabase()