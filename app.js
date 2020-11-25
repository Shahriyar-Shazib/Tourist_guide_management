///declearation
const express 		= require('express');
const bodyParser 	= require('body-parser');
const flash 		= require('express-flash-notification');
const flush			= require('connect-flash');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');


const login			= require('./controller/login');
const changepass	= require('./controller/Changepass.js');
const Admin			= require('./controller/Admin');
const Scout			= require('./controller/Scout');
const Guser 		= require('./controller/GeneralUser');
const logout		= require('./controller/logout');

const{check,validationResult } = require('express-validator');


const app 			= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false, cookie: {
    httpOnly: true,
    maxAge: 5*60*60*1000
  }
}));
app.use(cookieParser());
app.use(flash(app));
app.use(flush());

app.use('/login', login);
app.use('/Changepass', changepass);
app.use('/Admin', Admin);
app.use('/logout', logout);
app.use('/Scout', Scout);
app.use('/Guser', Guser);

//console.log(app.use)
//app.use('/user', user);

//route
app.get('/', (req, res)=>{
	if(req.cookies['uname'] != null && req.session.type=="Admin"){
		res.redirect('/Admin');
	}
	else if(req.cookies['uname'] != null && req.session.type=="SCOUT"){
		res.redirect('/Scout');
	}else if(req.cookies['uname'] != null && req.session.type=="Guserr"){
		res.redirect('/Guser');
	}
	else{
		res.redirect('/login');
	}		
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});