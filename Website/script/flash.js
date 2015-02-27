$(document).ready(function() {
	// scroll to the paragraph by clicking the menu
	$(".menu_item").click(function() {
		var getId = $(this).attr('id');
		var idNr = getId.substr(getId.length - 1);
		var id = "#header" + idNr;

   		$("html, body").animate({
      		scrollTop: $(id).offset().top
    	}, 800);
	});

	// by default; hide the arrowup
	$("#arrowup").hide();

	// click on arrow up; page scrolls to top
	$("#arrowup").click(function() {
		$("html, body").animate({
      		scrollTop: 0
    	}, 500);
	});
	
	// add numbers to resources; with style [x]
	$("a.resource").each(function(i) {
		$(this).append("[" + (i + 1) + "]");
	});

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