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
    Whitelist.insert(pst,function (result){
       
            res.render('GUser/comment.ejs',{userlist:result,cmnt:results})
       
        
    })
})
module.exports = router;