const path = require('path');
const ProjectEntity = require(path.resolve(GLOBALPATH.ENTITY_PATH,'Project'));

// dao -> entity

module.exports = class {

    saveInfoAllData(data){
       var Project = new ProjectEntity(data);

       return Project.save();
    }

    findByIdAndUpdate(data){
        return ProjectEntity.findByIdAndUpdate(
            data._id,
            {$set:data},
            {runValidators:true}
        );
    }
}