const express = require('express');
//const userModel = require.main.require('./models/userModel.js');
const router = express.Router();
router.get('/', (req, res)=>{
	res.render('Admin/Home')
})

router.get('/PendingPost', (req, res)=>{
	res.render('Admin/PendingPost')
})
router.get('/PendingSignup', (req, res)=>{
	res.render('Admin/PendingSignup')
})
router.get('/SCOUTlist', (req, res)=>{
	res.render('Admin/SCOUTlist')
})
router.get('/userlist', (req, res)=>{
	res.render('Admin/userlist')
})
router.get('/profile', (req, res)=>{
	res.render('Admin/profile')
})
module.exports = router;