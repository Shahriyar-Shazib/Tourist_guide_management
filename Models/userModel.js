const db = require('./db-secure');

module.exports = {

    validate: function(user, callback){
		var sql = "select * from user where userid=? and password=?";
		db.getResults(sql,[user.username,user.password], function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
	getuserbyid: function(user, callback){
		var sql = "select * from user where userid='"+user.username+"'";
		//console.log(sql);
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
	updatepass: function(user, callback){
		var sql = "UPDATE `user` SET password = '"+user.pass+"' where userid='"+user.username+"'";
		console.log(sql);
		db.execute(sql, function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
}