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
	Delete: function(user, callback){
		var sql = "DELETE FROM `user` WHERE userid=? ";
		db.execute(sql, [user.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO `user`(`id`, `userid`, `password`, `type`) VALUES (?, ?, ?,?)";
		db.execute(sql, ['', user.userid,user.pass, 'Guser'], function(status){
			callback(status);
		});
	},
	getuserbyid: function(user, callback){
		var sql = "SELECT * FROM `user` WHERE userid=?";
		//console.log (user,sql)
		db.getResults(sql, [user.username], function(status){
			callback(status);
		});
	},
	

	updatepass: function(user, callback){
		var sql = "UPDATE `user` SET `password`=? WHERE userid=?";
		console.log (user,sql)
		db.execute(sql, [user.pass,user.username], function(status){
			callback(status);
		});
	},

}
