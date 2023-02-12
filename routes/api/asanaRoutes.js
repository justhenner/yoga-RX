const router = require('express').Router();
const { Focus, Asana, User, User_Asana, Asana_Focus } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    try{
        const focusData = await Asana.findAll();
        const focuses = focusData.map((focus) => focus.get({plain: true }));
        res.status(200).json(focusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res)=> {
    try{
        const focusData = await Focus.findByPk(req.params.id, {
            include: [{
                model:Asana, 
                through: Asana_Focus,
                as: 'asanas_for_focus'
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