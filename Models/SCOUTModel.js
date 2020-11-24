const db = require('./db-secure');

module.exports = {
    GetAll: function( callback){
		var sql = "select * from scout ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    Delete: function(user, callback){
		var sql = "DELETE FROM `scout` WHERE userid=? ";
		db.execute(sql, [user.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},

}