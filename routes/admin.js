const express = require('express');
const { getAllAdmins, getSingleAdmin, deleteSingleAdmin, createNewAdmin, updateData, adminProfile, adminHome } = require('../controller/admin');
const { adminLogin } = require('../controller/authAdmin');
const { adminAuth } = require('../middleware/adminAuthCheck');
const router = express.Router();



// login authintation and private route
router.post('/login', adminLogin)

// tooken varify
router.get('/profile', adminAuth, adminProfile)
router.get('/home', adminAuth, adminHome)

// regular route
router.get('/', getAllAdmins)
router.get('/:id', getSingleAdmin)
router.delete('/:id', deleteSingleAdmin)
router.post('/', createNewAdmin)
router.put('/:id', updateData)
router.patch('/:id', updateData)





module.exports = router;