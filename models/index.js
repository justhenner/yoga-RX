const User = require('./user');
const Injury = require('./injury');
const Asana = require('./user');

Asana.hasMany(Injury, { foreignKey: 'asana_id'});
Injury.hasMany(Asana, {foreignKey: 'injury_id'})

module.exports = {User, Asana, Injury}