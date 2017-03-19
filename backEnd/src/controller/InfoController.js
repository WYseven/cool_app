const path = require('path');
const InfoService = require(path.resolve(GLOBALPATH.SERVICE_PATH,'InfoService'));

//action->service


module.exports = class {

    saveAction(req,res){
        new InfoService().saveInfoData(req.body).then(function (data){

            res.send({
                code:0,
                msg:"保存成功"
            });
        }).catch(function (error){
            console.log(error);
        })
    }
}