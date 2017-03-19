const path = require('path');
const {validate} = require(path.resolve(GLOBALPATH.LIB_PATH,'tools'))
const mongoose = require("mongoose");

let InfoShema = new mongoose.Schema({
	name:{
        required:[true,"必须填写用户名"],
        type:String,
        isAsync:true,
        validate:{
            validator(v,cb){
                setTimeout(function(){
                    cb(true);
                },1000)
            },
            message:'验证不通过'
        }
    },
	gender:{
		required:[true,'必须填写性别'],
		type:String
	},
	phone:{
	 required:[true,'必须填写电话号码'],
	 validate:{
	     validator(v){
	         return validate('phone',v);
	     },
	     message:'电话号码不正确'
	 },
	 type:Number
	},
	email:{
	 required:[true,'必须填写邮箱'],
	 type:String,
	 validate:{
	     validator(v){
	         return validate('email',v);
	     },
	     message:'邮箱不正确'
	 }
	},
	intention:{      //"求职意向"
	 required:[true,'必须填写求职意向'],
	 type:String
	},
	education:{        //"最高学历",
	 required:[true,'必须填写最高学历'],
	 type:String
	},
	graduationTime:{        //'毕业时间',
	 required:[true,'必须填写毕业时间'],
	 type:String
	},
	work: {        //'工作年限'
	 required:[true,'必须填写工作年限'],
	 type:String
	},
	seat:String,
	originPlace:String,
	qq:{
	type:Number,
	 validate:{
	     validator(v){
	         return validate('qq',v);
	     },
	     message:'qq不正确'
	 }
	},
	mchat:String,
	birthday:String,
	companyUrl:Array
})


let m = mongoose.model("Info",InfoShema);

module.exports = m;
