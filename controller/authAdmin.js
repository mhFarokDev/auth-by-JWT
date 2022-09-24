const admin = require('../models/admin')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


// admin login auth and jwt tooken
const adminLogin = async (req, res) =>{
    const {email, password} = req.body;
    if (email == '' || password == '') {
        res.status(400).json({message : "All Fields are require!"})
    } else {

        const emailCheck = await admin.findOne({email})

        if (emailCheck) {
            const passCheck = await bcryptjs.compare(password, emailCheck.password)
            if (passCheck) {

                // jwt tooken (paylood, secrate)
                const jwtToken = jwt.sign({id : emailCheck._id}, process.env.JWT_SECRSATE,{
                    expiresIn : "1d"
                } )
                res.status(200).json({
                    id : emailCheck._id,
                    name : emailCheck.name,
                    email : emailCheck.email,
                    call : emailCheck.call,
                    username : emailCheck.username,
                    tooken : jwtToken

                })

            } else {
                res.status(200).json({message : "Incarrent Password."})
            }
            
        } else {
            res.status(200).json({message : "Invallid Email Address."})
        }
        
    }
    
    
}


module.exports = {adminLogin}