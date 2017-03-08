/**
 * Created by wangyun on 17/3/8.
 */

module.exports = class Info {
    constructor(){

    }

    saveAction(req,res){
        console.log("保存")
        
        res.send("saveok");
        
    }
}
