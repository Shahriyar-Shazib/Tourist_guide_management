const db = require('./db-secure');

module.exports = {
    GetAll: function( callback){
		var sql = "select * from pendingpost ";
		db.getResults(sql, null,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    Delete: function(post, callback){
		var sql = "DELETE FROM `pendingpost` WHERE postid=? ";
		db.execute(sql, [post.postid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    getbyid: function(user, callback){
        var sql = "select * from `pendingpost` WHERE postid=? ";
        //console.log(sql,user.pstid)
		db.getResults(sql, [user.postid],function(results){
           // console.log(result);
			if(results.length > 0){
				callback(results);
			}
		});
    },

}