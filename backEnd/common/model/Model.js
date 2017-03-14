/**
 * Created by wangyun on 17/3/9.
 */

const path = require("path");
const {db} = require(path.resolve(process.cwd(),'config/config'));

const Mongo = require(path.resolve(GLOBALPATH.DATABASE_PATH,'mongodb'));

let d = new Mongo(db);

module.exports = class Model {
    constructor(){

    }
}



