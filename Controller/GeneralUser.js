const express = require('express');
const posts = require.main.require('./Models/PostModel.js');
const Whitelist = require.main.require('./Models/WhiteListModel.js');
const comments = require.main.require('./Models/commentModel.js');
const router = express.Router();

router.get('/', (req, res)=>{
    posts.GetAll(function (result){
        
        res.render('GUser/home',{userlist:result})
    })
})
router.get('/Comment/:id', (req, res)=>{
    posts.GetPostbyId(function (result){
        
        res.render('GUser/home',{userlist:result})
    })
})

module.exports = router;