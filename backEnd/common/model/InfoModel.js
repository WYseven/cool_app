/**
 * Created by wangyun on 17/3/14.
 */

const path = require("path");
const Model = require('./Model');
const mongoose = require('mongoose');
const InfoSchema = require(path.resolve(GLOBALPATH.SCHEMA_PATH,'InfoSchema'));

//创建信息模型
const Info = mongoose.model('Info',InfoSchema);

module.exports = Info;
