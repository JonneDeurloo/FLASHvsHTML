$(document).ready(function() {
	// information for Flot
	var d1 = [[0, 11.5], [1, 88.4], [2, 11.6], [3, 0.1], [4, 0.1]];


	var plot = $.plot("#placeholder", [
		{ data: d1 }
	], {
		bars: {
			show: true,
			align:'center', 
			barWidth:0.9
		},
		grid: {
			hoverable: true
		},
		yaxis: {
			min: 0,
			max: 100
		},
		xaxis: {
			ticks: [[0,'None'],[1,'JavaScript'],[2,'Flash'],[3,'Silverlight'],[4,'Java']],
			tickLength: 0
		}
	});

	$("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");

	$("#placeholder").bind("plothover", function (event, pos, item) {
		if (item) {
			var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);

			$("#tooltip").html(y + "%")
				.css({top: item.pageY+5, left: item.pageX+5})
				.fadeIn(200);
		} else {
			$("#tooltip").hide();
		}
	});
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