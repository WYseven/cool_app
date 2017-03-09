/**
 * Created by wangyun on 17/3/8.
 */
const path = require('path');
const Model = require(path.resolve(GLOBALPATH.MODEL_PATH,'Model'))

module.exports = class Info {
    constructor(){

    }

    saveAction(req,res){



        var m = new Model("Info");

        m.save({name:'leo'}).then(function(){
            res.send("saveok");
        })


        
    }
}
