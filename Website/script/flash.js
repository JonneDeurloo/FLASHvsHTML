$(document).ready(function() {
	// information for Flot
	var d1 = [[0, 3], [1, 3], [2, 5], [3, 7], [4, 8], [5, 10], [6, 11], [7, 9], [8, 5], [9, 13]];

	$.plot($("#placeholder"), [{data: d1, bars: {show: true}}], { yaxis: { max: 15 } });
});

// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var toLeft = $("#content_image").position().left + $("#content_image").width() + 15;
    
    $("#arrowup").css({"left": toLeft});

    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $("#top_menu").offset().top){
		$("#arrowup").fadeIn(250);
	} else {
		$("#arrowup").fadeOut(250);
	}
});