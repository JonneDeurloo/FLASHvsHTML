$(document).ready(function() {
	// information for Flot
	var d1 = [[0, 3], [1, 3], [2, 5], [3, 7], [4, 8], [5, 10], [6, 11], [7, 9], [8, 5], [9, 13]];

	$.plot($("#placeholder"), [{data: d1, bars: {show: true}}], { yaxis: { max: 15 } });

/*
	$(document).mousemove(function(e){
		if(e.pageX < 160) {
			$("#menu_bar").show('slide',{direction:'left'}, 250);
		} else {
			$("#menu_bar").hide('slide',{direction:'left'}, 250);
		}
	});
*/
});

// window on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // show the arrowup if the page is below the menu; or hide it when it is above
	if (scroll > $("#top_menu").offset().top){
		$("#arrowup").show(250);
	}
	else {
		$("#arrowup").hide(250);
	}
});