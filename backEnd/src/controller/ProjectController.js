const path = require('path');
const ProjectService = require(path.resolve(GLOBALPATH.SERVICE_PATH,'ProjectService'));
const {validateData} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'));

//action->service

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

        let projectService = new ProjectService();
        projectService.findByIdAndUpdate(req.body)
            .then(function (data){
                //更新之后会返回数据

                if(data){
                    res.send({
                        code:0,
                        mes:"更新完成"
                    });
                }else{
                    res.send({
                        code:1,
                        mes:"更新的数据不存在"
                    });
                }

            })
            .catch(function (err){
                if(err['name'] === 'ValidationError'){
                    res.send(validateData(err));
                }
            })

        
    }

    getAction(req,res){
        //通过userId获取数据
        let projectService = new ProjectService();
        projectService.getProjects(req.body.userId)
            .then((data) => {
                data = !!data.length ? data : [];
                res.send({
                    code:0,
                    mes:"数据获取成功",
                    data:data
                })

            })
            .catch( (err) => {
                res.send({
                    code:1,
                    mes:err
                })
            } )
    }
}