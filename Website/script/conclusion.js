// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var toLeft = $("#content_image").position().left + $("#content_image").width() + 15;
    
    $("#arrowup").css({"left": toLeft});

    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $(".block:first").offset().top){
		$("#arrowup").fadeIn(250);
	} else {
		$("#arrowup").fadeOut(250);
	}
});