const express = require('express');
const posts = require.main.require('./Models/PostModel.js');
const comments = require.main.require('./Models/commentModel.js');
const SCOUT = require.main.require('./Models/SCOUTModel.js');
//const userModel = require.main.require('./models/userModel.js');
const router = express.Router();

router.get('/', (req, res)=>{
    posts.GetAll(function (result){
        
        res.render('SCOUT/home',{userlist:result})
    })
})
router.get('/Comment/:id', (req, res)=>{
    pst={
        pstid:req.params.id
    }
    posts.GetPostbyId(pst,function (result){
        comments.Getcmntbypostid(pst,function (results){
            res.render('Scout/comment.ejs',{userlist:result,cmnt:results})
        }) 
        
    })
})
router.post('/Comment/:id', (req, res)=>{
    pst={
        pstid:req.params.id,
        userid:req.cookies['uname'],
        commenttext:req.body.mycomment
    }
    
    comments.insert(pst,function (result){
        posts.GetPostbyId(pst,function (result){
            comments.Getcmntbypostid(pst,function (results){
                res.render('SCOUT/comment.ejs',{userlist:result,cmnt:results})
            }) 
            
        })
        
    })
})
router.get('/profile', (req, res)=>{
    SCOUT.getbyID(req.cookies['uname'],function (result){
        //console.log (result)
        res.render('SCOUT/profile',{userlist:result})
    })
	
})
module.exports = router;