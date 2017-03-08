/**
 * Created by wangyun on 16/12/25.
 */
var express = require("express");
var router = express.Router();

//用户登录注册  访问"api/user"
router.use("/user",require("./user.js"));

//用户信息 访问 "api/info"
router.use("/info",require("./userInfo.js"));


module.exports = router;