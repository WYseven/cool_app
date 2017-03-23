const path = require('path');
const UserEntity = require(path.resolve(GLOBALPATH.ENTITY_PATH,'User'));

// dao -> entity

module.exports = class {

    getUserByName(name){
        return UserEntity.findOne({name:name});
    }

    registerUser(data){
        var userEntity = new UserEntity(data);

        return userEntity.save();
    }

}