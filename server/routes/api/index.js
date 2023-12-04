const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const candyRoutes = require('./candy-route');

router.use('/users', userRoutes);
router.use("/api/candy", candyRoutes);


module.exports = router;