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
    companyLogo:{
        type:String
    },
    company:{
        require:true,
        type:String
    },
    job:{
        require:true,
        type:String
    },
    jobTime:{
        start:{
            require:true,
            type:String
        },
        end:{
            require:true,
            type:String
        }
    },
    describe:{
        require:true,
        type:String
    },
});