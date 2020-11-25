const express = require('express');
const posts = require.main.require('./Models/PostModel.js');
const Whitelist = require.main.require('./Models/WhiteListModel.js');
const comments = require.main.require('./Models/commentModel.js');
const Guser = require.main.require('./Models/GeneralUserModel.js');
const router = express.Router();

router.get('/', (req, res)=>{
    posts.GetAll(function (result){
        
        res.render('GUser/home',{userlist:result})
    })
})
router.get('/Comment/:id', (req, res)=>{
    pst={
        pstid:req.params.id
    }
    posts.GetPostbyId(pst,function (result){
        comments.Getcmntbypostid(pst,function (results){
            res.render('GUser/comment.ejs',{userlist:result,cmnt:results})
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
                res.render('GUser/comment.ejs',{userlist:result,cmnt:results})
            }) 
            
        })
        
    })
})
router.get('/addwhite/:id', (req, res)=>{
    wl={
        pstid:req.params.id,
        userid:req.cookies['uname']
    }
    Whitelist.insert(wl,function (result){
       
           res.redirect('/Guser')  
        
    })
})
router.get('/WhiteList', (req, res)=>{
    wl={
        userid:req.cookies['uname']
    }
    Whitelist.getbyid(wl,function (result){
       /* post.GetPostbyIdArray(result,function (results){

        })*/
       
           //res.redirect('/Guser')  
        
    })
})

router.get('/profile', (req, res)=>{
    Guser.getbyID(req.cookies['uname'],function (result){
        //console.log (result)
        res.render('GUser/profile',{userlist:result})
    })
	
})
module.exports = router;