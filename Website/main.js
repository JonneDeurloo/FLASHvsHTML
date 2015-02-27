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

	$(document).mousemove(function(e){
		if(e.pageX > $(window).width() - 160) {
			$("#index").show('slide',{direction:'right'}, 250);
		} else {
			$("#index").hide('slide',{direction:'right'}, 250);
		}
	});
});

$(document).onload(function() {
	var url = window.location.href;

	var values = url.split('#');
	var link = values[1];
	var linkID = $("#" + link);

	$(window).scrollTop(linkID.offset().top);
});