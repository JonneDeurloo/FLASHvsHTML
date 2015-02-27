// Make the sticky menu
$(document).ready(function() {
	// Clone the existing menu
	$('#html_flash').addClass('original').clone().insertAfter('#html_flash').addClass('cloned').removeClass('original').hide();

	// Start function when scrolling
	$(document).scroll(makeSticky);

	// Function to make menu sticky
	function makeSticky() {
		// original position of the menu
		var originalPos = $('.original').offset();
		originalTop = originalPos.top;               

		if ($(window).scrollTop() >= (originalTop)) {    
			// scrolled passed the menu; show cloned menu
			original = $('.original');
			originalLeft = original.offset().left;  
			originalWidth = original.css('width');
			$('.cloned').css('left', originalLeft + 'px').css('width', originalWidth).show();
			$('.original').css('visibility', 'hidden');
		} else {
			// not scrolled past the menu; only show the original menu.
			$('.cloned').hide();
			$('.original').css('visibility', 'visible');
		}
	}
});

// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var toLeft = $("#content_image").position().left + $("#content_image").width() + 15;
    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $("#html_flash").offset().top){
		$("#arrowup").css({"left": toLeft});
		$("#arrowup").show(250);
	} else {
		$("#arrowup").hide(250);
	}
});