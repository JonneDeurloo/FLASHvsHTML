$(document).ready(function() {
	// scroll to the paragraph by clicking the menu
	$("#item1").click(function() {
   		$("html, body").animate({
      		scrollTop: $("#header1").offset().top
    	}, 800);
	});

	$("#item2").click(function() {
   		$("html, body").animate({
      		scrollTop: $("#header2").offset().top
    	}, 800);
	});

	$("#item3").click(function() {
   		$("html, body").animate({
      		scrollTop: $("#header3").offset().top
    	}, 800);
	});

	$("#item4").click(function() {
   		$("html, body").animate({
      		scrollTop: $("#header4").offset().top
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
	
	$("a.resource").each(function(i) {
		$(this).append("[" + (i + 1) + "]");
	});
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

$(document).ready(function() {
	$.plot($("#placeholder"), [ [[0, 0], [1, 1], [2, 4], [4, 16], [8, 64]] ], { yaxis: { max: 70 } });
});


