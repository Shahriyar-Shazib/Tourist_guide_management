const express = require('express');
const SCOUTM = require.main.require('./models/SCOUTModel.js');
const Guser = require.main.require('./models/GeneralUserModel.js');
const pensignup = require.main.require('./models/penReqModel.js');
const penpost = require.main.require('./models/PenPostModel.js');
const router = express.Router();
router.get('/', (req, res)=>{
	res.render('Admin/Home')
})

router.get('/PendingPost', (req, res)=>{
    penpost.GetAll(function (result){
        //console.log(result);
       res.render('Admin/PendingPost',{userlist:result})
    })
	
})
router.get('/PendingSignup', (req, res)=>{
    pensignup.GetAllsignupreq(function (result){
        res.render('Admin/PendingSignup',{userlist:result})
    })
	
})
router.get('/SCOUTlist', (req, res)=>{
    SCOUTM.GetAll(function (result){
        res.render('Admin/SCOUTlist',{userlist:result})
    })
	
})
router.get('/userlist', (req, res)=>{
    Guser.GetAll(function (result){
        res.render('Admin/userlist',{userlist:result})
    })
	
})
router.get('/profile', (req, res)=>{
	res.render('Admin/profile')
})
module.exports = router;