const db = require('./db-secure');

module.exports = {
    GetAllsignupreq: function( callback){
		var sql = "select * from signup_req ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    Delete: function(user, callback){
		var sql = "DELETE FROM `signup_req` WHERE userid=? ";
		db.execute(sql, [user.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    getbyid: function(user, callback){
        var sql = "select * from `signup_req` WHERE userid=? ";
        console.log(sql,user.userid)
		db.getResults(sql, [user.userid],function(results){
           // console.log(result);
			if(results.length > 0){
				callback(results);
			}
		});
	},
	insert: function(user, callback){
        var sql = "INSERT INTO `signup_req`(`id`, `userid`, `name`, `address`, `email`, `number`, `gender`, `dob`, `password`) VALUES (?,?,?,?,?,?,?,?,?) ";
        console.log(sql,user.userid)
		db.execute(sql, ['', user.userid, user.name , user.add, user.email, user.phone,user.gen,user.dob,user.pass,],function(results){
           // console.log(result);
			
				callback(results);
			
		});
    },

}