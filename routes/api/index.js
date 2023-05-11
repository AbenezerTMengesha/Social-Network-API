const router = require('express').Router();
const userRoutes = require('./users');
const thoughtRoute = require('./thoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoute);

module.exports = router;