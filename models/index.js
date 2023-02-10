const User = require('./user');
const Focus = require('./focus');
const Asana = require('./user');

Asana.hasMany(Focus, { foreignKey: 'asana_id'});
Focus.hasMany(Asana, {foreignKey: 'focus_id'});
User.hasMany(Asana, {foreignKey: 'user_id'});
Asana.hasMany(User, {foreignKey: 'asana_id'});

module.exports = {User, Asana, Focus}