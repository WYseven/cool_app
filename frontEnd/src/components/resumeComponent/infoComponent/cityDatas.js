
var obj = [];

for( var i = 0; i < 10; i++ ){
	obj.push({
		value: `beijing${i}`,
	    label: '北京',
	    children:[
	    	{
	    		value:123,
	    		label:"456"
	    	}
	    ]
	})
}

module.exports = obj;
