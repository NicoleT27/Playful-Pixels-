const express = require ('express');
const router = express.Router();
const apiRouter = require('./api');
const path = require('path');

//API routes
router.use('/api', apiRouter);

//connects server to our client folder
router.use(express.static(path.join(__dirname, '../../client/dist')));

//all other routes not accounted for will take the user to index.html (which should be our lobby, probably)
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

//all other routes not accounted for will take the user to index.html (which should be our lobby, probably)
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname), '../../client/dist/index.html');
});

module.exports = router;