/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;


var projectExperience = new schema({
    user:{
        require:true,
        type:ObjectId,
        ref: "user"  //引用
    },
    thumbnail:{
        require:true,
        type:Array
    },
    name:{
        require:true,
        type:String
    },
    url:{
        require:true,
        type:String
    },
    skill:{
        require:true,
        type:String
    },
    describe:{
        require:true,
        type:String
    },
    func:[
        {
            id:String,
            title:{
                require:true,
                type:String
            },
            describe:{
                require:true,
                type:String
            }
        }
    ]
});