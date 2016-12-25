/**
 * Created by wangyun on 16/12/25.
 */
var express = require("express");
var router = express.Router();

//引入用户的模型
var userModel = require("../model/userModel");

router.post("/reg",function(req,res){
    const userName = req.body.userName && req.body.userName.trim();
    const password = req.body.password && req.body.password.trim();
    userModel.findOne({userName:userName}).then(function(data){
        //通过用户名查询，存在则返回已经存在信息；不存在保存在数据在数据库中
        if( data ){
            res.json({
                status:1,
                message:"用户名已经存在"
            })
        } else if(!password){
            res.json({
                status:1,
                message:"请输入密码"
            })
        }else{
            var user = new userModel({
                userName:userName,
                password:password
            });

            user.save().then(function(){
                res.json({
                    status:0,
                    message:"保存成功"
                })
            })
        }
    })
});

router.post("/login",function(req,res){
    const userName = req.body.userName && req.body.userName.trim();
    const password = req.body.password && req.body.password.trim();
    userModel.findOne({userName:userName,password:password})
        .then(function(data){
            if( data ){
                res.json({
                    message:"可以登录",
                    status:0
                })
            }else{
                res.json({
                    message:"用户名或密码错误",
                    status:1
                })
            }
        });

});

//引入简历基本信息的模型
var userInfoModel = require("../model/userInfoModel");

router.post("/info",function(req,res){
    console.log(req.body.info)
    /*var info = JSON.parse(req.body.info);
    var list = req.body.info.list;

    //保存的
    if( info.action === "save" ){
        var infoModel = new userInfoModel({
            realName:list.realName
        });

        info.save().then(function(data){
            console.log(data);

            res.json({
                status: 1,
                message:"保存成功"
            })
        })
    }else{
        res.json({
            status: 0,
            message:"保存不成功"
        })
    }*/


})

module.exports = router;