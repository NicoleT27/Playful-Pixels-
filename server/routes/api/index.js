const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');

router.use('/login', userRoutes);
router.use ('/signup', userRoutes); 

module.exports = router;