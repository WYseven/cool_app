/**
 * Created by wangyun on 17/3/22.
 */

const path = require('path');

const mongoose = require("mongoose");

let UserShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'用户名必须填写'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'密码必须填写'],
    },
    loginDate:{
        type:Date,
        default:Date.now()
    }
});


let u = mongoose.model("User",UserShema);

module.exports = u;
