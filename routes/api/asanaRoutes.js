const router = require('express').Router();
const { Focus, Asana, User, Favorites, Asana_Focus } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    try{
        const asanaData = await Asana.findAll();
        const asanas = focusData.map((focus) => focus.get({plain: true }));
        res.status(200).json(focusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res)=> {
    try{
        const asanaData = await Asana.findByPk(req.params.id, {
            include: [{
                model:Focus, 
                through: Asana_Focus,
                as: 'focuses_for_asana'
            }]
        });

        if(!focusData){
            res.status(404).json({
                message: 'No focus found with this id!'
            });
            return;
        }
        res.status(200).json(focusData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;