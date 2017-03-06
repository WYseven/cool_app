/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var userShema = require("../shema/user.js");

var User = mongoose.model("User",userShema);


module.exports = User;
