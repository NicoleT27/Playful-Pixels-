require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const requireAuth = async (req, res, next) => {

    //verify auth
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({error: 'Auth token required'});
    }

    const token = authorization.split(' ')[1]; //split at a space, since auth token comes in as 'Berarer <json token>'

    try {
        const {_id} = jwt.verify(token, process.env.SESSIONSECRET);

        req.user = await User.findOne({_id}).select('_id');
        next() //fires off next handler function

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'request is not authorized'});
        
    }

}

module.exports = requireAuth;