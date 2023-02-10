const User = require('./user');
const Focus = require('./focus');
const Asana = require('./user');
const Asana_Focus = require('./asana_focus')
const User_Asana = require('./User_Asana')


Asana.belongsToMany(Focus, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'focus_for_asana'
});

Focus.belongsToMany(Asana, {
    through:{
        model: Asana_Focus,
        unique: false
    },
    as:'asana_for_focus'
});

User.belongsToMany(Asana, {
    through:{
        model: User_Asana,
        unique: false
    },
    as:'asana_for_focus'
});
Asana.belongsToMany(User, {
    through:{
        model: User_Asana,
        unique: false
    },
    as:'asana_for_focus'
});

module.exports = {User, Asana, Focus, Asana_Focus, User_Asana }