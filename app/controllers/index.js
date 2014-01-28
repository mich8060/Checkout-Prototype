$.edit.addEventListener('click',function(){
	$.cartTable.editing = !$.table.editing;	
}, false);

function unselectShipping() {
	$.checkOne.image = "/images/unselected.png";
	$.checkTwo.image = "/images/unselected.png";
	$.checkThree.image = "/images/unselected.png";
	$.checkFour.image = "/images/unselected.png";
}

$.shipOne.addEventListener('click', function(){
	unselectShipping();
	$.checkOne.image = "/images/selected.png";
});
$.shipTwo.addEventListener('click', function(){
	unselectShipping();
	$.checkTwo.image = "/images/selected.png";
});
$.shipThree.addEventListener('click', function(){
	unselectShipping();
	$.checkThree.image = "/images/selected.png";
});
$.shipFour.addEventListener('click', function(){
	unselectShipping();
	$.checkFour.image = "/images/selected.png";
});

$.index.open();
