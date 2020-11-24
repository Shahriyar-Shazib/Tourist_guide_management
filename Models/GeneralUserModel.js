const db = require('./db-secure');

module.exports = {
    GetAll: function( callback){
		var sql = "select * from generaluser ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    Delete: function(user, callback){
		var sql = "DELETE FROM `generaluser` WHERE userid=? ";
		db.execute(sql, [user.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},

}