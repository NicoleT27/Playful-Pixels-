require('dotenv').config();
const express = require('express');
const User = require ('../../models/User');
const jwt = require('jsonwebtoken');
const requireAuth = require('../../middleware/requireAuth');

const createToken = (userId) => {
    return jwt.sign({_id: userId}, process.env.SESSIONSECRET, { expiresIn: '60m'});
}

const router = express.Router();

// /api/users routes

//login route
// /api/users/login
router.post('/login', async (req, res) => {
    try {
        if (!req.body.password || !req.body.email) {
            throw Error('All fields must be entered');
        }

        const email = req.body.email;

        const userData = await User.findOne ({email});

        if (!userData) {
            throw Error ('Email cannot be found in database');
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        if (!validPassword) {
            throw Error ('Email/password combination is not valid. Please try again or sign up.');
        } 

        //if no errors are caught, we create a token
        const token = createToken(userData._id);

        const username = userData.username;

        res.status(200).json({email, username, token});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

//signup route
// /api/users/signup
router.post('/signup', async (req, res) => {
    try {

        if (!req.body.username || !req.body.password || !req.body.email) {
            throw Error('All fields must be entered');
        }

        if (req.body.password.length < 8) {
            throw Error('Password must be at least 8 characters long');
        };

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegex.test(req.body.email)) {
            throw Error('Email is not valid');
        }

        const username = req.body.username;
        const checkExistingUsername = await User.findOne ({ username });

        if (checkExistingUsername) {
            throw Error ('Selected username is not available.');
        }
        
        const email = req.body.email;
        const checkExistingEmail = await User.findOne ({email});

        if (checkExistingEmail) {
            throw Error ('Email already exists in database. Select a new email or log in instead.');
        }

        const userData = await User.create(req.body);

        const token = createToken(userData._id);

        res.status(200).json({email, username, token});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});


router.use(requireAuth);


// function to get all registered users
// /api/users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;