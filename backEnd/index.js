/**
 * Created by wangyun on 16/12/25.
 */
var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//cors

//解析json为对象
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

var mongoose = require("mongoose");
var Promise = require("bluebird");
Promise.promisifyAll(mongoose);

mongoose.Promise = global.Promise;


mongoose.connect("mongodb://localhost:27017/myapp");

var db = mongoose.connection;

global.db = db;

db.on("error",function(error){
    throw new Error(error)
});

db.on("open",function(){
    console.log("数据库开启成功");
    app.listen(3001,function(){
        console.log("服务开启");
    })
});

/*app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

    next();
});*/

app.use("/api",require("./route/api.js"));

app.get("/",(req,res)=>{
    res.send("ok")
})
