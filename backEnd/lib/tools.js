/**
 * Created by wangyun on 17/3/17.
 */

function validateData(error){
    var e = error.errors;
    var obj = {};
    for( var a in e ){
        obj[a] = {
            message:e[a].message,
            code:1
        }
    }

    return obj;
};

let validateRegExp = {
    phone:/^1[34578][0-9]{9}$/,
    qq:/^[1-9]\d{4,11}$/,
    email:/^[a-z][\w\.-]{3,19}@[\da-z]{2,12}\.com(\.cn)?$/i
}


function validate(key,message){
    console.log(key,message)
    if(validateRegExp[key]){
        return validateRegExp[key].test(message);
    }else{
        throw new Error("验证规则不存在")
    }
}

exports.validateData = validateData;
exports.validate = validate;