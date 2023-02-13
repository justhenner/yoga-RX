const router = require('express').Router();
const userRoutes = require('./userRoutes');
const asanaRoutes = require('./asanaRoutes');
const focusRoutes = require('./focusRoutes')

router.use('/users', userRoutes);
router.use('/asana', asanaRoutes);
router.use('/focus', focusRoutes)

module.exports = router;