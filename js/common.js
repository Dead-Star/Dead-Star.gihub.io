
$(window).on('load', function() {
  $('#preloader').delay().fadeOut('slow');
});


$(document).ready(function(){
	
		













	$(".button_menu").click(function() {
		$("#sandwich").toggleClass("active");
		
		if ($(".top_menu").is(":visible"))
		{
			$(".top_menu").fadeOut(600);

		}
		
		else {
		$(".top_menu").fadeIn(600);
		$(".top_menu_li .top_menu_a").toggleClass("animated rollIn")
		};
	});	

	$(".top_menu_li  .top_menu_a").click(function() {
	$(".top_menu").fadeOut(600)
	$("#sandwich").toggleClass("active");

	});
	
	
	new WOW().init();

});

