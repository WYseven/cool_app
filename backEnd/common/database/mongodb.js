/**
 * Created by wangyun on 17/3/14.
 */
const path = require("path");
const mongoose = require("mongoose");

const {dbConfig} = require(path.resolve(process.cwd(),'config/config'));

//连接数据库
mongoose.Promise = require('bluebird');
//连接数据库
global.db = mongoose.connect('mongodb://localhost:27017/cool')
	.then(()=>{
	    console.log("连接成功")
	})
	.catch((e)=>{
	    global.databaseError = e;
	});


