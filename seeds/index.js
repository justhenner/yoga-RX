const sequelize = require('../config/config');
const { Focus, Asana,Asana_Focus} = require('../models');
const seedFocus = require('./focusSeed.js')
const asanaSeedData = require('./asanaSeed.js')
const seedAsanaFocus =require('./asana_focusSeed.js')


const seeddatabase = async ()=> {
    await sequelize.sync({force:true});
    console.log('db linked');

    await seedFocus()
    console.log("----------focus seeded-----------");

    await asanaSeedData("----------asana seeded-----");


    await seedAsanaFocus("---------asanafocus seeded------");

    process.exit(0)
    
}
seeddatabase()