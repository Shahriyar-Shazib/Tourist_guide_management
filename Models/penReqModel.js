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

}