const express = require('express');
const posts = require.main.require('./Models/PostModel.js');
const comments = require.main.require('./Models/commentModel.js');
const SCOUT = require.main.require('./Models/SCOUTModel.js');
const penPost = require.main.require('./Models/PenPostModel.js');
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


router.get('/PendingPost', (req, res)=>{
    penPost.getpostbyuserID(req.cookies['uname'],function (result){
        console.log (result)
       
            res.render('SCOUT/pendingPost',{userlist:result})
       
    })
	
})
router.get('/removepenpost/:id', (req, res)=>{
    pst={
        pstid:req.params.id
    }
    penPost.removebyid(pst,function(status){
        penPost.getpostbyuserID(req.cookies['uname'],function (result){
            //console.log (result)
           
                res.render('SCOUT/pendingPost',{userlist:result})
           
        })
    })
    
	
})
router.get('/OwnPost', (req, res)=>{
   
    posts.getallpostbyuserid(req.cookies['uname'],function(status){
       
           
                res.render('SCOUT/OwnPost',{userlist:status})
           
        
    })
    
	
})
router.get('/removeownpost/:id', (req, res)=>{
    pst={
        pstid:req.params.id
    }
   
    posts.DeletePostbypostid(pst,function(status){
       
           
        posts.getallpostbyuserid(req.cookies['uname'],function(status){
       
           
            res.render('SCOUT/OwnPost',{userlist:status}) 
    })      
    })	
})
router.get('/CreatPost', (req, res)=>{
    user={
        userid :req.cookies['uname']
    }
        
                res.render('SCOUT/CreatNewPost',user) 
	
})
router.post('/CreatPost',/*[
    check('country')
    .notEmpty()
    .withMessage('can not be empty'),
    check('vplace')
    .notEmpty()
    .withMessage('can not be empty'),
    check('shistory')
    .notEmpty()
    .withMessage('can not be empty'),
    check('tmedium')
    .notEmpty()
    .withMessage('can not be empty'),
    check('cost')
    .notEmpty()
    .withMessage('can not be empty'),


],*/ (req, res)=>{
   
    console.log("post")
            user={
                userid :req.cookies['uname'],
                country:req.body.country,
                vplace:req.body.vplace,
                s_hostory:req.body.shistory,
                medium:req.body.tmedium,
                cost:req.body.cost,
            }
            console.log(user)
            penPost.insert(user,function(status){
                res.redirect('/Scout/pendingPost') 
            })
})
module.exports = router;