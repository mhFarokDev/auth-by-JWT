const admin = require("../models/admin");
const bcryptjs = require('bcryptjs')
// get all admins
const getAllAdmins = async (req, res) =>{
    res.status(200).json(await admin.find());
}


// get single data
const getSingleAdmin = async (req, res) =>{
    let id = req.params.id;
    const single = await admin.findById(id)
    res.status(200).json(single)
}

// delete single admin
const deleteSingleAdmin = async (req, res) =>{
    let id = req.params.id;
    await admin.findByIdAndDelete(id)
    res.status(200).json({message : "delete Data successful"})
}


// create admin
const createNewAdmin = async (req, res) =>{
    const allData = req.body;
    const salt = await bcryptjs.genSalt(10)
    const hasPassword = await bcryptjs.hash(allData.password, salt)
    await admin.create({
        ...allData,
        password : hasPassword

    })
    res.status(200).json({
        message : 'data add successfull.'
    })
}

// updste data
const updateData = async (req, res) =>{
    const id = req.params.id;
    const allData = req.body;

    const salt = await bcryptjs.genSalt(10)
    const hasPassword = await bcryptjs.hash(allData.password, salt)

    await admin.findByIdAndUpdate(id, {
        ...allData,
        password : hasPassword
    },{
        new : true
    })

    res.status(200).json({
        message : 'Update data successful'
    })
}

// admin profile
const adminProfile =(req, res)=>{
    res.status(200).json(req.user)
}
const adminHome =(req, res)=>{
    res.status(200).json(req.user)
}

module.exports = {getAllAdmins, getSingleAdmin, deleteSingleAdmin, createNewAdmin, updateData, adminProfile, adminHome}
