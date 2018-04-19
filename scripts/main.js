$(".snowflake").css("top" , String(randomXPos() + "px"));
$(".snowflake").css("left" , String(randomYPos() + "px"));

function randomXPos(){
	return Math.random() * $(document).innerWidth();
}

function randomYPos(){
	return Math.random() * $(document).innerHeight();
}


var flakes = document.getElementByClassName("snowflake");
for ( var i = 0; i < flakes.length; i++){
	flakes[i].style.top = String(randomYPos()) + "px";
	flakes[i].style.left = String(randomXPos()) + "px";
}
