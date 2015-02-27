// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var toLeft = $("#content_image").position().left + $("#content_image").width() + 15;
    
    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $("#images").offset().top){
		$("#arrowup").css({"left": toLeft});
		$("#arrowup").show(250);
	} else {
		$("#arrowup").hide(250);
	}
});