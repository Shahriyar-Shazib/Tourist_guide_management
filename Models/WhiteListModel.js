const db = require('./db-secure');

module.exports = {
    insert: function(wl, callback){
		var sql = "INSERT INTO `whitelist`(`id`, `postid`, `userid`) VALUES (?,?,?)";
		db.execute(sql, ['',wl.pstid,wl.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
    getbyid: function(wl, callback){
		var sql = "SELECT postid FROM `whitelist` WHERE userid=?";
		db.getResults(sql, [wl.userid],function(results){
			if(results.length > 0){
				callback(results,true);
			}else{
				callback(results,false);
			}
		});
    },
}