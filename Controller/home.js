const { render } = require('ejs');
const express 	= require('express');
const posts	= require.main.require('./models/postModel.js');
const router 	= express.Router();



router.get('/', (req, res)=>{
    
    posts.GetAll(function (result){
        //console.log(result);
        res.render('Home/index',{userlist:result})
    })
})
module.exports = router;