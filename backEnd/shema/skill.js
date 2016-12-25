/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;


var skill = new schema({
    user:{
        require:true,
        type:ObjectId,
        ref: "user"  //引用
    },
    skill:{
        require:true,
        type:Array
    },
    proficiency:{
        require:true,
        type:Number
    },
    describe:{
        require:true,
        type:Array
    }
});