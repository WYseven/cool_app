const path = require('path');
const InfoEntity = require(path.resolve(GLOBALPATH.ENTITY_PATH,'Info'));

// dao -> entity

module.exports = class {

    saveInfoAllData(data){
       var Info = new InfoEntity(data);

       return Info.save();
    }
}