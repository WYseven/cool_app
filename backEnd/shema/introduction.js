/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;


var introduction = new schema({
    user:{
        require:true,
        type:ObjectId,
        ref: "user"  //引用
    },
    introduction:{
        require:true,
        type:String
    }
});