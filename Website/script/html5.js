$(document).ready(function() {
	var showChar = 400;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});

// -------------------------------------------------------------
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
});