/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;

var userInfo = new schema({
    user:{
        require:true,
        type:schema.Types.ObjectId,
        ref: "user"  //引用
    },
    /*avatar:{
        type:String
    },*/
    realName:{
        require:true,
        type:String
    },
    gender:{
        require:true,
        type:String,
        default:"male"
    },
    telephone:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    }/*,
    jobIntension:{
        require:true,
        type:String
    },
    highestEducation:{
        require:true,
        type:String
    },
    graduationTime:{
        require:true,
        type:String
    },
    jobTime:{
        require:true,
        type:String
    },
    location:{
        require:true,
        type:String
    },
    originPlace:{
        type:String
    },
    QQ:{
        type:String
    },
    weChat:{
        type:String
    },
    birthday:{
        type:Date
    },
    social:{
        type:Array
    }*/
})

module.exports = userInfo;
