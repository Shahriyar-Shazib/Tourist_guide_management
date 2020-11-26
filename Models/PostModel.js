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
        //console.log(sql,post)
		db.execute(sql, ['', post.userid,post.country, post.vplace,post.s_hostory,post.medium,post.cost], function(status){
            callback(status);
            console.log (status)
		});
    },
    GetPostbyId: function(pst, callback){
		var sql = "select * from post where postid=? ";
		db.getResults(sql,[ pst.pstid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
	},
	
	/*GetPostbyIdArray: function(pst, callback){
		var sql = "select * from post where postid in ('"+for(var i){}+"' ";
		db.getResults(sql, pst.pstid,function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});*/
  //  },
  getallpostbyuserid: function(pst, callback){
	var sql = "select * from post where UserId=? ";
	console.log(sql,pst)
	db.getResults(sql, pst,function(results){
		if(results.length > 0){
			callback(results,true);
		}else{
			callback(results,false);
		}
	});
},


}