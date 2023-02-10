const User = require('./user');
const Injury = require('./injury');
const Asana = require('./user');

Asana.hasMany(Injury, { foreignKey: 'asana_id'});
Injury.hasMany(Asana, {foreignKey: 'injury_id'});
User.hasMany(Asana, {foreignKey: 'user_id'});
Asana.hasMany(User, {foreignKey: 'asana_id'});

module.exports = {User, Asana, Injury}