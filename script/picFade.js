$(document).ready(function(){
	var picCount = 2
	for ( var i = 0; i < 99; i++ ) {
		$('.homeImage1').hide().fadeIn(3000).delay(10000).fadeOut(3000);
		$('.homeImage1 > src').replaceWith("img/builds/picCount.png");
		picCount++ ;
	}
});