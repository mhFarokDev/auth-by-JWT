const jwt = require('jsonwebtoken');
const admin = require('../models/admin');
// JWT token verify
const adminAuth = async (req, res, next) =>{
    // get token
    const JWTToken = req.headers.authorization;
    if (JWTToken) {
        // split token
        const token = JWTToken.split(' ')[1];

        // verify token
        if (jwt.verify(token, process.env.JWT_SECRSATE)) {
            let {id} = jwt.verify(token, process.env.JWT_SECRSATE);

            // pass data to user
            req.user = await admin.findById(id);
            next()
        } else {
            res.status(400).json({
                message : 'JWT Token Invalid'
            })
        }
        
    } else {
        res.status(400).json({
            message : 'JWT Token error'
        })
        
    }
    
    
}

module.exports = {adminAuth}