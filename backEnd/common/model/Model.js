/**
 * Created by wangyun on 17/3/9.
 */
const path = require("path");
const mongoose = require("mongoose");
const {db} = require(path.resolve(process.cwd(),'config/config'));

mongoose.connect(`${db.host}:${db.port}/${db.database}`)
    .then(()=>{
        console.log("成功")
    })
    .catch((e)=>{
        console.log(e)
    });

let Schema = mongoose.Schema;

let s = new Schema({
    name:String
})

//servers -  model - Schema

module.exports = class Model {
    constructor(conllection){
        this.conllectionObject = mongoose.model(conllection,s);
    }

    async save(data){
        let c = new this.conllectionObject(data);
        return await c.save();

    }
}


