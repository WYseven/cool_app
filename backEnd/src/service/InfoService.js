const path = require('path');
const InfoDao = require(path.resolve(GLOBALPATH.DAO_PATH,'InfoDao'));


//service -> dao

module.exports = class {
	saveInfoData(data){
		var Info = new InfoDao();
		return Info.saveInfoAllData(data)
	}
}