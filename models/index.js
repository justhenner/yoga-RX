const User = require('./user');
const Focus = require('./focus');
const Asana = require('./user');
const Asana_Focus = require('./asana_focus')

// Asana.hasMany(Focus, { foreignKey: 'asana_id'});
Asana.belongsToMany(Focus, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'focus_for_asana'
});
// Focus.hasMany(Asana, {foreignKey: 'focus_id'});
Focus.belongsToMany(Asana, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'asana_for_focus'
});
// User.hasMany(Asana, {foreignKey: 'user_id'});
// Asana.hasMany(User, {foreignKey: 'asana_id'});

module.exports = {User, Asana, Focus, Asana_Focus, }