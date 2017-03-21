const path = require('path');
const ProjectService = require(path.resolve(GLOBALPATH.SERVICE_PATH,'ProjectService'));
const {validateData} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'));
//action->service

const ProjectEntity = require(path.resolve(GLOBALPATH.ENTITY_PATH,'Project'));

const mongoose = require("mongoose");

module.exports = class {

    saveAction(req,res){
        let projectService = new ProjectService();

        projectService.saveInfoData(req.body)
            .then(function (data){
                res.send({
                    code:0,
                    _id:data._id,
                    msg:"保存成功"
                });
            })
            .catch(function (err){
                //如果我验证失败，则发送验证失败信息
                if(err['name'] === 'ValidationError'){
                    res.send(validateData(err));
                }
               
            })
    }

    updateAction(req,res){

        var p = new ProjectEntity();

        ProjectEntity.findByIdAndUpdate(req.body._id,{$set:{name:456,phone:5555}})
            .then(function (data){
                console.log(data);
                res.send('更新完成');
            })
            .catch(function (err){
                console.log(err);
            })

        
    }
}