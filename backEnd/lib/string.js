/**
 * Created by wangyun on 17/3/8.
 */

class S {
    constructor(str){
        this.str = str;
    }

    capitalize(){
        return this.str.charAt().toUpperCase()+this.str.slice(1);
    }
}

module.exports = (str)=>{
    return new S(str)
}
