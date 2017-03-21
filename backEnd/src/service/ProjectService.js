const path = require('path');
const ProjectDao = require(path.resolve(GLOBALPATH.DAO_PATH,'ProjectDao'));


//service -> dao

module.exports = class {
	saveInfoData(data){
		var Project = new ProjectDao();
		return Project.saveInfoAllData(data)
	}
}