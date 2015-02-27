// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $(".block:first").offset().top){
		$("#arrowup").show(250);
	}
	else {
		$("#arrowup").hide(250);
	}
});