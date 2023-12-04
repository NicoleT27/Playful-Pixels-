const express = require('express');
const User = require ('../../models/User');

const router = express.Router();

// /api/users routes

//login route
// /api/users/login
router.post('/login', async (req, res) => {
    res.send("login route accessed");
});

//signup route
// /api/users/signup
router.post('/signup', async (req, res) => {
    res.send("signup route accessed");
})

module.exports = router;