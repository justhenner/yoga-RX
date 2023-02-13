const router = require('express').Router();
const { Focus, Asana, User, Favorites, Asana_Focus } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    try{
        const focusData = await User.findAll();
        const focuses = focusData.map((focus) => focus.get({plain: true }));
        res.status(200).json(focusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res)=> {
    try{
        const userData = await User.findByPk(req.params.id, {
            include: [{
                model:Asana, 
                through: Favorites,
                as: 'favorites'
            }]
        });

        if(!userData){
            res.status(404).json({
                message: 'No user found with this id!'
            });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;