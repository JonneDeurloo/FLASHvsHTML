// Make the sticky menu
$(document).ready(function() {
	// Clone the existing menu
	$('#html_flash').addClass('original').clone().insertAfter('#html_flash').addClass('cloned').removeClass('original').hide();

	// Start function when scrolling
	$(document).scroll(makeSticky);

	// Function to make menu sticky
	function makeSticky() {
		// original position of the menu
		var originalPos = $('.original').offset();
		originalTop = originalPos.top;               

		if ($(window).scrollTop() >= (originalTop)) {    
			// scrolled passed the menu; show cloned menu
			original = $('.original');
			originalLeft = original.offset().left;  
			originalWidth = original.css('width');
			$('.cloned').css('left', originalLeft + 'px').css('width', originalWidth).show();
			$('.original').css('visibility', 'hidden');
		} else {
			// not scrolled past the menu; only show the original menu.
			$('.cloned').hide();
			$('.original').css('visibility', 'visible');
		}
	}

	// information for Flot
	var d1 = [[0, 82], [1, 99]];

	var plot = $.plot("#placeholder1", [
		{ data: d1 }
	], {
		bars: {
			show: true,
			align:'center', 
			barWidth:0.75,
			margin: 0.1
		},
		grid: {
			hoverable: true
		},
		yaxis: {
			min: 0,
			max: 100
		},
		xaxis: {
			ticks: [[0,'HTML5'],[1,'Flash']],
			tickLength: 0,
			autoscaleMargin: 0.1
		}
	});

	// information for Flot
	var d1 = [[0, 97], [1, 0]];

	var plot = $.plot("#placeholder2", [
		{ data: d1 }
	], {
		bars: {
			show: true,
			align:'center', 
			barWidth:0.75,
			margin: 0.1
		},
		grid: {
			hoverable: true
		},
		yaxis: {
			min: 0,
			max: 100
		},
		xaxis: {
			ticks: [[0,'HTML5'],[1,'Flash']],
			tickLength: 0,
			autoscaleMargin: 0.1
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

	$("#placeholder1").bind("plothover", function (event, pos, item) {
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

	$("#placeholder2").bind("plothover", function (event, pos, item) {
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
	if (scroll > $("#html_flash").offset().top){
		$("#arrowup").fadeIn(250);
	} else {
		$("#arrowup").fadeOut(250);
	}
});