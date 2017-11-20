$(document).ready( function () {
	
	/* detect window scroll events */	
	$(window).scroll(function (){
		$heightOfHeader = 84;
		if($(window).scrollTop() <= $heightOfHeader) {
			
			$("nav").css("position", "static");
			$("nav").css("float","left");
			
		} else {
			
			$("nav").css("position", "fixed");
			$("nav").css("top","0px");
			$("nav").css("left","0px");
			
		}
		
	});
});