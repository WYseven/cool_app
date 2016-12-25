/**
 * Created by wangyun on 16/12/25.
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;

var userSchema = new schema({
    userName:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
});

module.exports = userSchema;





