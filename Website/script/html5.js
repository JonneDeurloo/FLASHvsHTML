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

	// add numbers to resources; with style [x]
	$("a.resource").each(function(i) {
		$(this).append("[" + (i + 1) + "]");
	});

	// by default; hide the arrowup
	$("#arrowup").hide();

	// click on arrow up; page scrolls to top
	$("#arrowup").click(function() {
		$("html, body").animate({
      		scrollTop: 0
    	}, 0);
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