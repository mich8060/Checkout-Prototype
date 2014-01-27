$.edit.addEventListener('click',function(){
	$.cartTable.editing = !$.table.editing;	
}, false);



function expand(data) {
	Ti.API.info("The data object contains: " + JSON.stringify(data));
}

$.testBtn.addEventListener('click',function(){
	$.__alloyId0.text = "It works!";
});

function zNode(element, callback, options){
	var document = $;
	var views = document.__views;
	var el = null;
	var type = null;
    var options = options || {};
    var callback = callback || null;
	if(!element) return null;
	if(!element.indexOf(".")){
		type = "class";
	}else if(!element.indexOf("#")){
		type = "id";
	}else{
		return null;
	}
	cl = element.replace('.','').replace('#','');
	
	// Parse through Titanium Object
	for(var key in views) {
		var obj = views[key];
	   	for (var prop in obj) {
			if(type == "class"){
				if(prop == "classname"){
					if(obj[prop] == cl){
						Ti.API.info("Object: " + obj);
						Ti.API.info("ID: " + obj.id);
						obj.addEventListener(callback, function(){
							this.applyProperties(options);
						});
					}
				}
			}
	   	}
	}
	
}

zNode(".test", "click", {
	text: "Hello World",
	color: "#FF0000"
});

//expand(obj);
//Ti.API.info(prop + " = " + obj[prop]);

//Ti.API.info(typeof(obj.__views));

$.index.open();
