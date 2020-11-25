const express 	= require('express');
const userModel	= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(result,status){
		if(status){
			//console.log(req.body.username,result);
			if(result[0].type == "Admin"){
				//console.log(result[0].type);
				req.session.type = result[0].type;
				res.cookie('uname', req.body.username);
				res.redirect('/Admin');
			}else if(result[0].type == "SCOUT"){
				req.session.type = result[0].type;
				res.cookie('uname', req.body.username);
				res.redirect('/Scout');
			}else if(result[0].type == "Guser"){
				req.session.type = result[0].type;
				res.cookie('uname', result[0].userid);
				res.cookie('type', result[0].type);
				//console.log(req.session.type)
				res.redirect('/Guser');
			}	
		}else{
			res.redirect('/login');
		}
	});

})

module.exports = router;