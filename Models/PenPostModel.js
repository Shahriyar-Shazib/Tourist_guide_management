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
	getpostbyuserID: function(user, callback){
        var sql = "select * from `pendingpost` WHERE UserId=? ";
        //console.log(sql,user)
		db.getResults(sql, [user],function(results){
            console.log(results);
			if(results.length > 0){
				callback(results);
			}
			else {
				callback (results);
			}
		});
    },
	removebyid: function(pst, callback){
        var sql = "DELETE FROM `pendingpost` WHERE postid=? ";
        //console.log(sql,user)
		db.execute(sql, [pst.pstid],function(results){
            console.log(results);
			if(results.length > 0){
				callback(results);
			}
			else {
				callback (results);
			}
		});
	},
	insert: function(post, callback){
        var sql = "INSERT INTO `pendingpost`(`postid`, `UserId`, `country`, `visiting_Place`, `short_history`, `travel_medium`, `cost`) VALUES (?, ?, ?,?,?,?,?)";
        //console.log(sql,post)
		db.execute(sql, ['', post.userid,post.country, post.vplace,post.s_hostory,post.medium,post.cost], function(status){
            callback(status);
            console.log (status)
		});
    },


}