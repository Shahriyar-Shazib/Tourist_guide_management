const express = require('express');
//const userModel = require.main.require('./models/userModel.js');
const router = express.Router();
router.get('/', (req, res)=>{
	res.render('Admin/Home')
})




module.exports = router;