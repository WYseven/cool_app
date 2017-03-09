const cityDatas = require("./cityDatas");

const InfoStaticData = {
	//最高学历
	education:[
		'硕士',
		'本科',
		'专科',
		'高中',
		'初中',
		'其他'
	],
	//毕业时间
	graduationTime:{
		currentTime:2017,  //最新时间
		forwardStep:10    //向前的跨度
	},
	//工作年限
	workLife:{
		forwardStep:10
	},
	//所在地
	seat:{},
	citys: cityDatas,
	informations:{
		name:'姓名',
		gender:"性别",
		phone:"电话",
		email:'邮箱',
		intention:"求职意向",
		education:"最高学历", 
		graduationTime:'毕业时间',
		work:'工作年限',
		seat:'所在地',
		originPlace:'籍贯', 
		qq:'QQ',
		mchat:'微信号',
		birthday:'生日',
		companyUrl:'社交主页'
	}
}

var keys = Object.keys(InfoStaticData.informations);
var o = {};
keys.forEach((item)=>{
  o[item] = '';
});
//为表单验证的字段集合
InfoStaticData.ruleForm = o;


module.exports = InfoStaticData;