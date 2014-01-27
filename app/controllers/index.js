$.edit.addEventListener('click',function(){
	$.cartTable.editing = !$.table.editing;	
}, false);

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
	element = element.replace('.','').replace('#','');
	
	// Parse through Titanium Object
	for(var key in views) {
		var obj = views[key];
	   	for (var prop in obj) {
			if(type == "class"){
				if(prop == "classname"){
					if(obj[prop] == element){
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


$.index.open();
