const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');



//get requireAuth before all other routes

router.use('/users', userRoutes);


module.exports = router;