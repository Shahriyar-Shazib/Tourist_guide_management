const db = require('./db-secure');

module.exports = {

    Getcmntbypostid: function(pst, callback){
		var sql = "select * from comments where postid=?";
		db.getResults(sql, [pst.pstid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    insert: function(pst, callback){
		var sql = "INSERT INTO `comments`(`id`, `userid`, `postid`, `comment`) VALUES (?,?,?,?)";
		db.getResults(sql, ['',pst.userid,pst.pstid,pst.commenttext],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },

}