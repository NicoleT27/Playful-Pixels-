const express = require ('express');
const router = express.Router();
const apiRouter = require('./api');
const path = require('path');
const requireAuth = require('../middleware/requireAuth');

//API routes
router.use('/api', apiRouter);

//get requireAuth before all other routes
// router.use(requireAuth);

//connects server to our client folder
router.use(express.static(path.join(__dirname, '../../client/dist')));

//all other routes to be handled inside index.html
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });


module.exports = router;