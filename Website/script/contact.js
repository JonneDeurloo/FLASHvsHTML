$(document).ready(function () {
	$(".person_info").css('height',($(".person_info img").height()));


    $("#content").css('top', ($(window).height() - $("#content_wrapper").height()) / 2);
});