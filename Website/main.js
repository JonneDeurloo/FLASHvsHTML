$(document).ready(function() {
	// by default; hide the arrowup
	$("#arrowup").hide();
	$("#leftindex").hide();

	// click on arrow up; page scrolls to top
	$("#arrowup").click(function() {
		$("html, body").animate({
      		scrollTop: 0
    	}, 500);
	});
	
	// add numbers to resources; with style [x]
	$("a.resource").each(function(i) {
		$(this).append("[" + (i + 1) + "]");

		var classname = $(this).attr("class");
		var splitname = classname.split(" ");
		var name = splitname[1];

		$("#sources").append("[" + (i + 1) + "]" + name + "<br>");
	});
});

$(document).load(function() {
	var url = window.location.href;

	var values = url.split('#');
	var link = values[1];
	var linkID = $("#" + link);

	$(window).scrollTop(linkID.offset().top);
});

$(document).mousemove(function(e){
	if(e.pageX > $(window).width() - 170) {
		$("#leftindex").show("slide", {direction: "right"}, 250);
	} else {
		$("#leftindex").hide("slide", {direction: "right"}, 250);
	}
});