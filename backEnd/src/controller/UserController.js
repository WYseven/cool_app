/**
 * Created by wangyun on 17/3/22.
 */

const path = require('path');

const UserEntity = require(path.resolve(GLOBALPATH.ENTITY_PATH,'User'));
const {validateData} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'));
/*
* 登录注册
* login 登录
* register 注册
* */

module.exports = class {

    loginAction(req,res){
        var User = new UserEntity(req.body);
        req.send("okok")
    }
    registerAction(req,res){
        var User = new UserEntity(req.body);

        User.save()
            .then(function (data) {
                console.log(data)
                res.send("ok")
            })
            .catch(function (err) {
                //如果我验证失败，则发送验证失败信息

                if(err['name'] === 'ValidationError'){
                    res.send(validateData(err));
                }else if(err.code === 11000){ //有重复项
                    res.send({
                        code:11000,
                        mes:"注册的用户名已经存在"
                    });
                }
            })

    }
}