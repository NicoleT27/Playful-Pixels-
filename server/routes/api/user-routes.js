require('dotenv').config();
const express = require('express');
const User = require ('../../models/User');
const jwt = require('jsonwebtoken');

// const require('dotenv').config();

const createToken = (userId) => {
    jwt.sign({_id: userId}, process.env.SESSIONSECRET, { expiresIn: 5})
}

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
    try {
        const userData = await User.create(req.body);

        const token = createToken(userData._id);

        res.status(200).json({token});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;