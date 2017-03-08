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

}


module.exports = InfoStaticData;