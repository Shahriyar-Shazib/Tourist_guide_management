const { render } = require('ejs');
const express 	= require('express');
const penreq	= require.main.require('./models/penReqModel.js');
const router 	= express.Router();



router.get('/', (req, res)=>{
    
        
        res.render('signup/signup')
    
})
router.post('/', (req, res)=>{
    
        user={
            userid:req.body.userid,
            name:req.body.name,
            email:req.body.email,
            add:req.body.add,
            gen:req.body.gender,
            phone:req.body.phone,
            dob:req.body.dob,
            pass:req.body.pass
        }
        console.log(user)
        penreq.insert(user,function (status){
            if(status){
                res.redirect('/login')
            }
            else {
                res.render("signup/signup")
            }
        })
    //res.render('signup/signup')

})

module.exports = router;