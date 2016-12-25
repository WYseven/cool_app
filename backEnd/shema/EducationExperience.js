/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;


var educationExperience = new schema({
    user:{
        require:true,
        type:ObjectId,
        ref: "user"  //引用
    },
    school:{
        require:true,
        type:String
    },
    major:{
        require:true,
        type:String
    },
    education:{
        require:true,
        type:String
    },
    graduationTime:{
        require:true,
        type:String
    }
});