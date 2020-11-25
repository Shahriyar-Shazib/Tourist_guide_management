const db = require('./db-secure');

module.exports = {
    GetAll: function( callback){
		var sql = "select * from admin ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
	getbyID:function(user, callback){ 
		var sql = "select * from admin where userid=?";
		
		db.getResults(sql,[ user],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},

}