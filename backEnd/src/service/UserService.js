const path = require('path');
const UserDao = require(path.resolve(GLOBALPATH.DAO_PATH,'UserDao'));


//service -> dao

module.exports = class {

	//注册用户
	registerUser(data){
		var userDao = new UserDao();

		return userDao.registerUser(data);
	}
	//获取用户名
    getUser(name){
        var userDao = new UserDao();
		return userDao.getUserByName(name);
	}



}