const express = require('express');
const { post } = require('./login');
const SCOUTM = require.main.require('./Models/SCOUTModel.js');
const Guser = require.main.require('./Models/GeneralUserModel.js');
const Admin = require.main.require('./Models/AdminModel.js');
const pensignup = require.main.require('./Models/penReqModel.js');
const penpost = require.main.require('./Models/PenPostModel.js');
const user = require.main.require('./Models/userModel.js');
const comments = require.main.require('./Models/commentModel.js');
const posts = require.main.require('./Models/PostModel.js');
const router = express.Router();




router.get('/Comment/:id', (req, res)=>{
    pst={
        pstid:req.params.id
    }
    posts.GetPostbyId(pst,function (result){
        comments.Getcmntbypostid(pst,function (results){
            res.render('Admin/comment.ejs',{userlist:result,cmnt:results})
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
router.get('/', (req, res)=>{
    posts.GetAll(function (result){
        //console.log(result);
        res.render('Admin/Home',{userlist:result})
    })
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
    Admin.getbyID(req.cookies['uname'],function (result){
        //console.log (result)
        res.render('Admin/profile',{userlist:result})
    })
	
})
router.get('/deleteScout/:id', (req, res)=>{
    users={
        userid:req.params.id
    }
    console.log(users);
    SCOUTM.Delete(users,function (result){
        user.Delete(users,function(status)
        {
            res.redirect('/Admin/SCOUTlist')
        })
       
    })
	
})
router.get('/deleteuser/:id', (req, res)=>{
    users={
        userid:req.params.id
    }
    Guser.Delete(users,function (result){
        user.Delete(users,function(status)
        {
            res.redirect('/Admin/userlist')
        })
       
    })
	
})
router.get('/addsignup/:id', (req, res)=>{
    
    users={
        userid:req.params.id
    }
    //console.log (users)
    pensignup.getbyid(users,function(result){
        reqe={
            userid:result[0].userid,
            name:result[0].name,
            add:result[0].address,
            email:result[0].email,
            num:result[0].number,
            gender:result[0].gender,
            dob:result[0].dob,
            pass:result[0].password

        }
        Guser.insert(reqe,function (resul){
            user.insert(reqe,function(resu)
            {
                pensignup.Delete(users,function (status){
           
                    res.redirect('/Admin/PendingSignup')
               
               
                
            })
           
        })

    })
})
	
})
router.get('/deletesignup/:id', (req, res)=>{
    users={
        userid:req.params.id
    }
    pensignup.Delete(users,function (result){
       
            res.redirect('/Admin/PendingSignup')
       
       
    })
	
})
router.get('/ApprovePostreq/:id', (req, res)=>{
    
    pst={
        postid:req.params.id
    }
    console.log ('pst.pstid')
    penpost.getbyid(pst,function(result){
        reqe={
            userid:result[0].UserId,
            country:result[0].country,
            vplace:result[0].visiting_Place,
            s_hostory:result[0].short_history,
            medium:result[0].travel_medium,
            cost:result[0].cost,

        }
       // console.log(reqe)
        posts.insert(reqe,function (resul){
            
            //penpost.Delete(pst,function (result){
       
                res.redirect('/Admin/PendingPost')
           
           
       // })
                  
  
       

    })
})
	
})
router.get('/RemovePostreq/:id', (req, res)=>{
    pst={
        postid:req.params.id
    }
    console.log(pst)
    penpost.Delete(pst,function (result){
       
            res.redirect('/Admin/PendingPost')
       
       
    })
	
})
module.exports = router;