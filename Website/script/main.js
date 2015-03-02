$(document).ready(function() {
	// by default; hide the arrowup
	$("#arrowup").hide();
	$("#leftindex").hide();

	// click on arrow up; page scrolls to top
	$("#arrowup").click(function() {
		$("html, body").animate({
      		scrollTop: 0
    	}, 200);
	});
	
	// add numbers to resources; with style [x]
	$("a.resource").each(function(i) {
		$(this).append("[" + (i + 1) + "]");

		var nameID = $(this).attr("id");
		var name = nameID.replace(/\_/g, " ");

		$("#resource_list").append("<li>" + "[" + (i + 1) + "] " + name + "</li>");
	});

	$("#resource_list li").click(function() {
		var resourceName = $(this).text();
		var resourceSplit = resourceName.split("]");
		var resourceNr = resourceSplit[0].slice(1);

		if (resourceNr < 10) {
			var resource = $("#" + resourceName.substr(4).replace(/\ /g, "_"));
		} else {
			var resource = $("#" + resourceName.substr(5).replace(/\ /g, "_"));
		}

		$(window).scrollTop(resource.offset().top - 20);		
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
		$("#leftindex").show("slide", {direction: "right"}, 100);
	} else if (e.pageX < $(window).width() - 220) {
		$("#leftindex").hide("slide", {direction: "right"}, 100);
	}
});