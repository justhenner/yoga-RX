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
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/asana', async (req, res) => {
  try {
    const focusData = await Focus.findAll();
    const focuses = focusData.map((focus) => focus.get({ plain: true }));
    const asanaData = Asana.findAll; (
      {
        include:[
          {
            model: Focus,
            as: 'focuses_for_asana',
          },
        ],
      }
    );

    const asanas = asanaData.map((asana) => asana.get({ plain: true }));

    res.render('allAsanas', {
      asanas,
      focuses,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/asana/:id', async (req, res) => {
  try {
    const asanasData = await Asana.findAll();
    const asanas = asanasData.map((asana) => asana.get({ plain: true }));
    const focusData = await Focus.findAll();
    const focuses = focusData.map((focus) => focus.get({ plain: true }));
    const asanaData = await Asana.findByPk(req.params.id, {}
    );

    const asana = await asanaData.get({ plain: true });

    res.render('asana', {
      asanas,
      focuses,
      asana
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/focus', async (req, res) => {
  try {
    const asanaData = await Asana.findAll();
    const asanas = asanaData.map((asana) => asana.get({ plain: true }));
    const focusData = focus.findAll; (
      {
        include:[
          {
            model: Asana,
            as: 'asanas_for_focus',
            attributes: ['english_name']
          },
        ],
      }
    );

    const focuses = focusData.map((focus) => focus.get({ plain: true }));

    res.render('allfocuses', {
      asanas,
      ...focuses,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/focus/:id', async (req, res) => {
  try {
    const asanaData = await Asana.findAll();
    const asanas = asanaData.map((asana) => asana.get({ plain: true }));
    const focusesData = await Focus.findAll();
    const focuses = focusesData.map((focus) => focus.get({ plain: true }));
    const focusData = await Focus.findByPk(4, {
      include: [
        {
          model: Asana,
          as: 'asanas_for_focus'

          // where? focus_id @asanas_for_focus = this.id
          // return asana_ids 
          // for each asana_id findByPk(asana_id)
        },
      ],
    }
    );
    const focus = focusData.get({ plain: true });
console.log (focus)
    res.render('search', {
      asanas,
      focuses,
      searchData:focus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});


router.get('/user/:id', withAuth, async (req, res) => {

  try {
    const asanaData = await Asana.findAll();
    const asanas = asanaData.map((asana) => asana.get({ plain: true }));
    const focusData = await Focus.findAll();
    const focuses = focusData.map((focus) => focus.get({ plain: true }));
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Favorites,
          as: 'asanas_for_user'
        }
      ],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      asanas,
      focuses,
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const asanaData = await Asana.findAll();
    const asanas = asanaData.map((asana) => asana.get({ plain: true }));
    const focusData = await Focus.findAll();
    const focuses = focusData.map((focus) => focus.get({ plain: true }));
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Favorites }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      asanas,
      focuses,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  const asanaData = await Asana.findAll();
    const asanas = asanaData.map((asana) => asana.get({ plain: true }));
    const focusData = await Focus.findAll();
    const focuses = focusData.map((focus) => focus.get({ plain: true }));
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', {
    asanas,
    focuses,
  });
});

module.exports = router;
