const router = require('express').Router();
const { Focus, Asana, User, Favorites, Asana_Focus } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const asanaData = await Asana.findAll();
        const asanas = asanaData.map((asana) => asana.get({ plain: true }));
        const focusData = await Focus.findAll();
        const focuses = focusData.map((focus) => focus.get({ plain: true }));

        res.render('homepage', {
            asanas,
            focuses
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/asana', async (req, res) => {
    try {
        const asanaData = Asana.findAll; (
            {
                include: [
                    {
                        model: Asana_Focus,
                        attributes: ['focus_id']
                    },
                ],
            }
        );
        const asanas = asanaData.map((asana) => asana.get({ plain: true }));

        res.render('allAsanas', {
            ...asanas,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/asana/id', async (req, res) => {
    try {
        const asanaData = await Asana.findByPk(req.params.id, {
            include: [
                {
                    model: Asana_Focus,
                    attributes: ['focus_id']
                },
            ],
        }
        );
        const asana = await asanaData.get({ plain: true });

        res.render('asana', {
            ...asana,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/focus/:id', async (req, res) => {
    try {
        const focusData = await Focus.findByPk(req.params.id, {
            include: [
                {
                    model: Asana_Focus,
                    attributes: ['asana_id']
                },
            ],
        }
        );
        const focus = await focusData.get({ plain: true });

        res.render('search', {
            ...focus,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/user/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Favorites,
                    attributes: ['asana_id'],
                },
            ],
        });
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// using withAuth middleware to prevent access to route with verification

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // find logged in user based on session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Favorites }],
        });
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }

});
router.get('/login', (req, res) => {
    // if user is apready logged in, redirect request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

module.exports = router;

