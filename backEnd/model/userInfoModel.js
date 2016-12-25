/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var userInfoShema = require("../shema/userInfo.js");

var UserInfo = mongoose.model("UserInfo",userInfoShema);


module.exports = UserInfo;
