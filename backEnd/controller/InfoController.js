/**
 * Created by wangyun on 17/3/8.
 */
const path = require('path');
const InfoModel = require(path.resolve(GLOBALPATH.MODEL_PATH,'InfoModel'))
const {validateData} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'))

module.exports = class Info {
    constructor(){

    }

    saveAction(req,res){
        //存储数据
        var info = new InfoModel(req.body);
        info.validate((err,mes)=>{
            if(err){
                //重新整理验证信息
                res.send(validateData(err));
            }
        });
        info.save().then(function(data){
            res.send('ok');
        })
        
    }
}
