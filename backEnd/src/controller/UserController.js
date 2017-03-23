/**
 * Created by wangyun on 17/3/22.
 */

const path = require('path');
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH,'UserService'));

const {validateData} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'));
/*
* 登录注册
* login 登录
* register 注册
* */

module.exports = class {

    loginAction(req,res){

        var userService = new UserService();

        userService.getUser(req.body.name)
            .then((data) => {
                if( data ){  //找到了，看一下密码是否则正确

                    if( data.password !== req.body.password){
                        res.send({
                            code:1,
                            mes:'密码不正确'
                        })
                    }else{

                        //应该保存session和发送cookie

                        res.send({
                            code:0,
                            mes:'登陆成功',
                            userId:data._id
                        })
                    }
                }else{
                    res.send({
                        code:0,
                        mes:'没有此用户，请先注册'
                    })
                }
            })
    }
    registerAction(req,res){

        var userService = new UserService();

        userService.registerUser(req.body)
            .then(function (data) {
                res.send({
                    code:0,
                    mes:'注册成功，请登录'
                })
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