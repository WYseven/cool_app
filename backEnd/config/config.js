/**
 * Created by wangyun on 17/3/8.
 */

const path = require('path');

//数据库配置信息
exports.db = {
    host:'mongodb://localhost',
    user:"root",
    password:'',
    database:'cool',
    port:'27017',
    charset:'utf-8'
}

//应用的工作目录路径
const ROOT = process.cwd();

//全局路径存储
exports.path = {
    ROOT_path:ROOT,
    CONFING_PATH:path.resolve(ROOT,'config'),
    CONTROLLER_PATH:path.resolve(ROOT,'src/controller'),
    LIB_PATH:path.resolve(ROOT,'lib'),
    MODEL_PATH:path.resolve(ROOT,'src/model'),
    DATABASE_PATH:path.resolve(ROOT,'common/database'),
    ENTITY_PATH:path.resolve(ROOT,'src/entity'),
    SERVICE_PATH:path.resolve(ROOT,'src/service'),
    DAO_PATH:path.resolve(ROOT,'src/dao')
}
