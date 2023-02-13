const User = require('./user');
const Focus = require('./focus');
const Asana = require('./user');
const Asana_Focus = require('./asana_focus');
const Favorites = require('./favorites');


Asana.belongsToMany(Focus, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'focuses_for_asana'
});

Focus.belongsToMany(Asana, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'asanas_for_focus'
});

User.belongsToMany(Asana, {
    through:{
        model: Favorites,
        unique: false
    },
    as:'users_for_asana'
});
Asana.belongsToMany(User, {
    through:{
        model: Favorites,
        unique: false
    },
    as:'asanas_for_user'
});

module.exports = {User, Asana, Focus, Asana_Focus, Favorites}