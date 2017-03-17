/**
 * Created by wangyun on 17/3/14.
 */
const path = require("path");
const mongoose = require("mongoose");
//连接数据库

module.exports = class Mongo {
    constructor(db) {
        mongoose.connect(`${db.host}:${db.port}/${db.database}`)
            .then(()=>{
                console.log("成功")
            })
            .catch((e)=>{
                console.log(e)
            });
    }
}


