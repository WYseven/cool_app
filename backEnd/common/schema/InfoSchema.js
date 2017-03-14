/**
 * Created by wangyun on 17/3/9.
 */

//创建数据库的原型（Schema）

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let s = new Schema({
    name:{
        required:true,
        type:String
    }/*,
     gender:{
     require:true,
     type:String
     },
     phone:{
     require:true,
     type:String
     },
     email:{
     require:true,
     type:String
     },
     intention:{      //"求职意向"
     require:true,
     type:String
     },
     education:{        //"最高学历",
     require:true,
     type:String
     },
     graduationTime:{        //'毕业时间',
     require:true,
     type:String
     },
     work: {        //'工作年限'
     require:true,
     type:String
     },
     seat:String,
     originPlace:String,
     qq:String,
     mchat:String,
     birthday:String,
     companyUrl:Array*/
});

s.pre("save",(next)=>{
    console.log(123)
    next();
})

module.exports = s
