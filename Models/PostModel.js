const db = require('./db-secure');

module.exports = {
    GetAll: function( callback){
		var sql = "select * from post ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    insert: function(post, callback){
		var sql = "INSERT INTO `post`(`postid`, `UserId`, `country`, `visiting_Place`, `short_history`, `travel_medium`, `cost`) VALUES (?, ?, ?,?,?,?,?)";
		db.execute(sql, ['', post.userid,post.country, post.vplace,post.s_hostory,post.medium,post.cost], function(status){
			callback(status);
		});
    },


}