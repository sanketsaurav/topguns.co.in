(function() {

	// ------------------------------------
	// Bootstrap popover trigger
	// ------------------------------------
	$("a[data-toggle=popover]")
	.popover()
	.click(function(e) {
		e.preventDefault();
	});



	// ------------------------------------
	// Bootstrap tooltip trigger
	// ------------------------------------
	$("a[data-toggle=tooltip]")
	.tooltip();



	// ------------------------------------
	// Active navigation
	// ------------------------------------
	var body_class = $('body').attr('class');
	$('.nav li').each(function(index, item) {
		var $item = $(item);
		if ($item.hasClass('nav-' + body_class)) {
			$item.addClass('active');
		}
	});


	// ------------------------------------
	// Background Slideshow
	// ------------------------------------
    $(function() {
        cbpBGSlideshow.init();
    });

})();