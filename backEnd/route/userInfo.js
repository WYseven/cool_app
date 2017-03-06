/**
 * Created by wangyun on 16/12/26.
 */
var express = require("express");
var router = express.Router();
//引入简历基本信息的模型
var userInfoModel = require("../model/userInfoModel");


//保存数据
router.post("/save",function(req,res){
    var name = req.body.name;
    console.log(req.body.user);
    userInfoModel.findOne({user:req.body.user}).then(function(data){
        console.log(data)
        if( !data ){
            //保存的
            var infoModel = new userInfoModel(req.body);

            infoModel.save().then(function(data){
                res.json({
                    status: 1,
                    message:"保存成功"
                })
            })
        }else{
            res.json({
                status: 1,
                message:"数据已经存在"
            })
        }
    });
})

//更新数据
router.post("/update",function(req,res){

    userInfoModel.findOne({user:req.body.user}).then(function(data){
        if( data ){
            //写一个方法，只覆盖已有的字段
            for( var attr in req.body ){
                if( attr !== "user" ){
                    data[attr] = req.body[attr];
                }
            }

            data.save().then(function(data){
                res.json({
                    status: 1,
                    message:"保存成功"
                })
            })
        }else{
            res.json({
                status: 1,
                message:"数据不存在"
            })
        }
    })
});
//获取数据
router.post("/get",function(req,res){

});
module.exports = router;
