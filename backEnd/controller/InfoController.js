/**
 * Created by wangyun on 17/3/8.
 */
const path = require('path');
const InfoModel = require(path.resolve(GLOBALPATH.MODEL_PATH,'InfoModel'))

module.exports = class Info {
    constructor(){

    }

    saveAction(req,res){
        //存储数据
        var info = new InfoModel(req.body);
        console.dir(info)
        info.save().then(function(err,data){
            console.log(err)
            res.send("saveok");
        })
        
    }
}
